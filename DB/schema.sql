-- User table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_name VARCHAR(50),
    registration_time TIMESTAMP DEFAULT NOW(),
    last_login_time TIMESTAMP
);

-- Book table
CREATE TABLE IF NOT EXISTS books (
    isbn VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100),
    author VARCHAR(100),
    introduction TEXT
);

-- Inventory table
CREATE TABLE IF NOT EXISTS inventory (
    id SERIAL PRIMARY KEY,
    isbn VARCHAR(20) REFERENCES books(isbn),
    store_time TIMESTAMP DEFAULT NOW(),
    status VARCHAR(20)  -- 在庫、出借中、整理中、遺失、損毀、廢棄
);

-- BorrowingRecord table
CREATE TABLE IF NOT EXISTS borrowing_record (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    inventory_id INT REFERENCES inventory(id),
    borrowing_time TIMESTAMP DEFAULT NOW(),
    return_time TIMESTAMP
);

-- PostgreSQL 用戶密碼重置函數
-- 此函數允許通過手機號碼重置用戶密碼
CREATE OR REPLACE FUNCTION reset_user_password(
    p_phone_number VARCHAR(20),
    p_new_password VARCHAR(255)
)
RETURNS INTEGER
LANGUAGE plpgsql
AS $$
DECLARE
    user_exists INTEGER DEFAULT 0;
    result INTEGER;
BEGIN
    -- 檢查用戶是否存在
    SELECT COUNT(*) INTO user_exists 
    FROM users 
    WHERE phone_number = p_phone_number;
    
    IF user_exists > 0 THEN
        -- 更新密碼
        UPDATE users 
        SET password = p_new_password 
        WHERE phone_number = p_phone_number;
        
        result := 1; -- 成功
    ELSE
        result := 0; -- 用戶未找到
    END IF;
    
    RETURN result;
    
EXCEPTION
    WHEN OTHERS THEN
        RETURN -1; -- 發生錯誤
END;
$$; 