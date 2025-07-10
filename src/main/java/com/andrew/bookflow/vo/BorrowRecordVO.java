package com.andrew.bookflow.vo;

import java.time.LocalDateTime;

public class BorrowRecordVO {
    private String bookName;
    private LocalDateTime borrowTime;
    private LocalDateTime returnTime;
    private String status;
    private Long inventoryId;

    public String getBookName() {
        return bookName;
    }
    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
    public LocalDateTime getBorrowTime() {
        return borrowTime;
    }
    public void setBorrowTime(LocalDateTime borrowTime) {
        this.borrowTime = borrowTime;
    }
    public LocalDateTime getReturnTime() {
        return returnTime;
    }
    public void setReturnTime(LocalDateTime returnTime) {
        this.returnTime = returnTime;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Long getInventoryId() {
        return inventoryId;
    }
    public void setInventoryId(Long inventoryId) {
        this.inventoryId = inventoryId;
    }
} 