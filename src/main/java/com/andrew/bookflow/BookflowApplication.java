package com.andrew.bookflow;

import com.andrew.bookflow.entity.Book;
import com.andrew.bookflow.entity.Inventory;
import com.andrew.bookflow.repository.BookRepository;
import com.andrew.bookflow.repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class BookflowApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookflowApplication.class, args);
    }

    @Bean
    public CommandLineRunner initBooks(BookRepository bookRepository, InventoryRepository inventoryRepository) {
        return args -> {
            if (bookRepository.count() == 0) {
                Book b1 = new Book();
                b1.setIsbn("9789864794424");
                b1.setName("Java 從入門到精通");
                b1.setAuthor("王小明");
                b1.setIntroduction("最適合初學者的 Java 入門書籍。");

                Book b2 = new Book();
                b2.setIsbn("9789863123682");
                b2.setName("Spring Boot 實戰");
                b2.setAuthor("李大華");
                b2.setIntroduction("快速上手 Spring Boot，打造現代 Web 應用。");

                Book b3 = new Book();
                b3.setIsbn("9789864345670");
                b3.setName("資料結構與演算法");
                b3.setAuthor("陳美麗");
                b3.setIntroduction("圖解資料結構與演算法，輕鬆學會程式邏輯。");

                bookRepository.save(b1);
                bookRepository.save(b2);
                bookRepository.save(b3);
            }
            // 為每本書產生3本在庫inventory
            for (Book book : bookRepository.findAll()) {
                long count = inventoryRepository.countByBookAndStatus(book, "在庫");
                if (count == 0) {
                    for (int i = 0; i < 3; i++) {
                        Inventory inv = new Inventory();
                        inv.setBook(book);
                        inv.setStoreTime(LocalDateTime.now());
                        inv.setStatus("在庫");
                        inventoryRepository.save(inv);
                    }
                }
            }
        };
    }
}
