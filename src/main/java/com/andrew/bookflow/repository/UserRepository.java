package com.andrew.bookflow.repository;

import com.andrew.bookflow.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByPhoneNumber(String phoneNumber);

    // 呼叫儲存過程的範例：假設有一個儲存過程 reset_user_password
    @Procedure(name = "reset_user_password")
    void resetUserPassword(Long userId, String newPassword);
} 