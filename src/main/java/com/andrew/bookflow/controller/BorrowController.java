package com.andrew.bookflow.controller;

import com.andrew.bookflow.service.BorrowService;
import com.andrew.bookflow.vo.BorrowRecordVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api")
public class BorrowController {
    @Autowired
    private BorrowService borrowService;

    // 借書 by inventoryId
    @PostMapping("/borrow/{inventoryId}")
    public Map<String, Object> borrow(@PathVariable Long inventoryId, Authentication authentication) {
        Long userId = (Long) authentication.getPrincipal();
        borrowService.borrowBook(userId, inventoryId);
        Map<String, Object> resp = new HashMap<>();
        resp.put("success", true);
        resp.put("message", "借書成功");
        return resp;
    }

    // 借書 by isbn（自動找第一本可借的inventory）
    @PostMapping("/borrow/isbn/{isbn}")
    public Map<String, Object> borrowByIsbn(@PathVariable String isbn, Authentication authentication) {
        Long userId = (Long) authentication.getPrincipal();
        borrowService.borrowBookByIsbn(userId, isbn);
        Map<String, Object> resp = new HashMap<>();
        resp.put("success", true);
        resp.put("message", "借書成功");
        return resp;
    }

    // 還書
    @PostMapping("/return/{inventoryId}")
    public Map<String, Object> returnBook(@PathVariable Long inventoryId, Authentication authentication) {
        Long userId = (Long) authentication.getPrincipal();
        borrowService.returnBook(userId, inventoryId);
        Map<String, Object> resp = new HashMap<>();
        resp.put("success", true);
        resp.put("message", "還書成功");
        return resp;
    }

    // 查詢借閱紀錄
    @GetMapping("/borrow/history")
    public List<BorrowRecordVO> history(Authentication authentication) {
        Long userId = (Long) authentication.getPrincipal();
        return borrowService.getUserBorrowHistory(userId);
    }
} 