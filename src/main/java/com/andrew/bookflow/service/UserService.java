package com.andrew.bookflow.service;

import com.andrew.bookflow.entity.User;
import com.andrew.bookflow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import org.apache.commons.text.StringEscapeUtils;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Optional<User> findByPhoneNumber(String phoneNumber) {
        return userRepository.findByPhoneNumber(phoneNumber);
    }

    public User register(String phoneNumber, String password, String userName) {
        if (userRepository.findByPhoneNumber(phoneNumber).isPresent()) {
            throw new RuntimeException("手機號碼已註冊");
        }
        User user = new User();
        user.setPhoneNumber(phoneNumber);
        user.setPassword(passwordEncoder.encode(password));
        // 對 userName 進行 HTML 轉義，防範 XSS（跨站腳本攻擊），避免惡意腳本被存入資料庫
        user.setUserName(StringEscapeUtils.escapeHtml4(userName));
        user.setRegistrationTime(LocalDateTime.now());
        user.setLastLoginTime(null);
        return userRepository.save(user);
    }

    public User login(String phoneNumber, String password) {
        User user = userRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new RuntimeException("帳號或密碼錯誤"));
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("帳號或密碼錯誤");
        }
        user.setLastLoginTime(LocalDateTime.now());
        userRepository.save(user);
        return user;
    }

    // 透過 Stored Procedure 重置密碼
    public boolean resetPassword(String phoneNumber, String newPassword) {
        // 對新密碼進行加密
        String hashedPassword = passwordEncoder.encode(newPassword);

        // 呼叫 PostgreSQL 函數
        Integer result = userRepository.resetUserPassword(phoneNumber, hashedPassword);

        // 根據返回值判斷結果
        switch (result) {
            case 1:
                return true; // 密碼重置成功
            case 0:
                throw new RuntimeException("用戶不存在");
            case -1:
                throw new RuntimeException("密碼重置過程中發生錯誤");
            default:
                throw new RuntimeException("未知錯誤");
        }
    }
} 