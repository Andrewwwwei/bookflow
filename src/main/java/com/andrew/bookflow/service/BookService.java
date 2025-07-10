package com.andrew.bookflow.service;

import com.andrew.bookflow.entity.Book;
import com.andrew.bookflow.repository.BookRepository;
import com.andrew.bookflow.repository.InventoryRepository;
import com.andrew.bookflow.vo.BookVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private InventoryRepository inventoryRepository;

    public List<BookVO> searchBooks(String name, String author) {
        List<Book> books = bookRepository.findByNameContainingIgnoreCaseOrAuthorContainingIgnoreCase(
                name == null ? "" : name, author == null ? "" : author);
        return books.stream().map(book -> {
            int availableCount = inventoryRepository.countByBookAndStatus(book, "在庫");
            BookVO vo = new BookVO();
            vo.setIsbn(book.getIsbn());
            vo.setName(book.getName());
            vo.setAuthor(book.getAuthor());
            vo.setIntroduction(book.getIntroduction());
            vo.setAvailableCount(availableCount);
            return vo;
        }).collect(Collectors.toList());
    }
} 