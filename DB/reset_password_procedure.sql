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
    FROM "user" 
    WHERE phone_number = p_phone_number;
    
    IF user_exists > 0 THEN
        -- 更新密碼
        UPDATE "user" 
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

-- 使用範例：
-- SELECT reset_user_password('1234567890', 'new_hashed_password');
-- 
-- 返回值說明：
-- 1: 密碼重置成功
-- 0: 用戶未找到
-- -1: 發生錯誤 