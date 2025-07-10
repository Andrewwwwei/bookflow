package com.andrew.bookflow.repository;

import com.andrew.bookflow.entity.Inventory;
import com.andrew.bookflow.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findByBookAndStatus(Book book, String status);
    int countByBookAndStatus(Book book, String status);
} 