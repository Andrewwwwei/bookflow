package com.andrew.bookflow.vo;

import java.time.LocalDateTime;

public class UserVO {
    private Long userId;
    private String userName;
    private String phoneNumber;
    private LocalDateTime lastLoginTime;

    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getPhone() {
        return phoneNumber;
    }
    public void setPhone(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public LocalDateTime getLastLoginTime() {
        return lastLoginTime;
    }
    public void setLastLoginTime(LocalDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }
} 