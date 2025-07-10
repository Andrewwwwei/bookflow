package com.andrew.bookflow.repository;

import com.andrew.bookflow.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, String> {
    List<Book> findByNameContainingIgnoreCaseOrAuthorContainingIgnoreCase(String name, String author);
} 