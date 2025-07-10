package com.andrew.bookflow.repository;

import com.andrew.bookflow.entity.BorrowingRecord;
import com.andrew.bookflow.entity.User;
import com.andrew.bookflow.entity.Inventory;
import com.andrew.bookflow.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface BorrowingRecordRepository extends JpaRepository<BorrowingRecord, Long> {
    List<BorrowingRecord> findByUserOrderByBorrowingTimeDesc(User user);
    Optional<BorrowingRecord> findByInventoryAndReturnTimeIsNull(Inventory inventory);
    // 查詢user尚未歸還某書的紀錄
    boolean existsByUserAndInventory_BookAndReturnTimeIsNull(User user, Book book);
} 