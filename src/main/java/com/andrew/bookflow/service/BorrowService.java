package com.andrew.bookflow.service;

import com.andrew.bookflow.entity.*;
import com.andrew.bookflow.repository.*;
import com.andrew.bookflow.vo.BorrowRecordVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BorrowService {
    @Autowired
    private InventoryRepository inventoryRepository;
    @Autowired
    private BorrowingRecordRepository borrowingRecordRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;

    @Transactional
    public void borrowBook(Long userId, Long inventoryId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("用戶不存在"));
        Inventory inventory = inventoryRepository.findById(inventoryId).orElseThrow(() -> new RuntimeException("庫存不存在"));
        if (!"在庫".equals(inventory.getStatus())) {
            throw new RuntimeException("該書不可借出");
        }
        // 檢查這本 inventory 是否已被借出
        if (borrowingRecordRepository.findByInventoryAndReturnTimeIsNull(inventory).isPresent()) {
            throw new RuntimeException("該書已被借出");
        }
        // 建立借閱紀錄
        BorrowingRecord record = new BorrowingRecord();
        record.setUser(user);
        record.setInventory(inventory);
        record.setBorrowingTime(LocalDateTime.now());
        record.setReturnTime(null);
        borrowingRecordRepository.save(record);
        // 更新庫存狀態
        inventory.setStatus("出借中");
        inventoryRepository.save(inventory);
    }

    @Transactional
    public void borrowBookByIsbn(Long userId, String isbn) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("用戶不存在"));
        Book book = bookRepository.findById(isbn).orElseThrow(() -> new RuntimeException("書籍不存在"));
        // 新增：檢查user是否已借過該書且尚未歸還
        if (borrowingRecordRepository.existsByUserAndInventory_BookAndReturnTimeIsNull(user, book)) {
            throw new RuntimeException("你已借閱這本書，請先歸還後再借");
        }
        List<Inventory> available = inventoryRepository.findByBookAndStatus(book, "在庫");
        if (available.isEmpty()) {
            throw new RuntimeException("目前無可借閱庫存");
        }
        Inventory inventory = available.get(0);
        borrowBook(userId, inventory.getId());
    }

    @Transactional
    public void returnBook(Long userId, Long inventoryId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("用戶不存在"));
        Inventory inventory = inventoryRepository.findById(inventoryId).orElseThrow(() -> new RuntimeException("庫存不存在"));
        BorrowingRecord record = borrowingRecordRepository.findByInventoryAndReturnTimeIsNull(inventory)
                .orElseThrow(() -> new RuntimeException("找不到尚未歸還的借閱紀錄"));
        if (!record.getUser().getId().equals(userId)) {
            throw new RuntimeException("只能還自己借的書");
        }
        record.setReturnTime(LocalDateTime.now());
        borrowingRecordRepository.save(record);
        inventory.setStatus("在庫");
        inventoryRepository.save(inventory);
    }

    public List<BorrowRecordVO> getUserBorrowHistory(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("用戶不存在"));
        List<BorrowingRecord> records = borrowingRecordRepository.findByUserOrderByBorrowingTimeDesc(user);
        return records.stream().map(record -> {
            BorrowRecordVO vo = new BorrowRecordVO();
            vo.setBookName(record.getInventory().getBook().getName());
            vo.setBorrowTime(record.getBorrowingTime());
            vo.setReturnTime(record.getReturnTime());
            vo.setStatus(record.getReturnTime() == null ? "尚未歸還" : "已歸還");
            vo.setInventoryId(record.getInventory().getId());
            return vo;
        }).collect(Collectors.toList());
    }
} 