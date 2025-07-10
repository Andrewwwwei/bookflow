package com.andrew.bookflow.controller;

import com.andrew.bookflow.service.BookService;
import com.andrew.bookflow.vo.BookVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/list")
    public List<BookVO> list(@RequestParam(required = false) String name,
                             @RequestParam(required = false) String author) {
        return bookService.searchBooks(name, author);
    }
} 