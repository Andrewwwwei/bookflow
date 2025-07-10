-- User table
CREATE TABLE IF NOT EXISTS user (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    registration_time DATETIME,
    last_login_time DATETIME
);

-- Book table
CREATE TABLE IF NOT EXISTS book (
    isbn VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    author VARCHAR(100),
    introduction TEXT
);

-- Inventory table
CREATE TABLE IF NOT EXISTS inventory (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    book_isbn VARCHAR(20),
    status VARCHAR(20),
    FOREIGN KEY (book_isbn) REFERENCES book(isbn)
);

-- BorrowingRecord table
CREATE TABLE IF NOT EXISTS borrowing_record (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    inventory_id BIGINT,
    borrowing_time DATETIME,
    return_time DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (inventory_id) REFERENCES inventory(id)
); 