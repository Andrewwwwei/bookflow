package com.andrew.bookflow.repository;

import com.andrew.bookflow.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByPhoneNumber(String phoneNumber);

    // 呼叫 PostgreSQL 函數重置密碼
    @Query(value = "SELECT reset_user_password(:phoneNumber, :newPassword)", nativeQuery = true)
    Integer resetUserPassword(@Param("phoneNumber") String phoneNumber, @Param("newPassword") String newPassword);
} 