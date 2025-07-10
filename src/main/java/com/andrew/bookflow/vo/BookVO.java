package com.andrew.bookflow.vo;

public class BookVO {
    private String isbn;
    private String name;
    private String author;
    private String introduction;
    private int availableCount;

    public String getIsbn() {
        return isbn;
    }
    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public String getIntroduction() {
        return introduction;
    }
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
    public int getAvailableCount() {
        return availableCount;
    }
    public void setAvailableCount(int availableCount) {
        this.availableCount = availableCount;
    }
} 