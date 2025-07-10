package com.andrew.bookflow.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // 建議長度至少 256-bit（32 bytes）
    private static final String SECRET = "my-super-secure-256-bit-secret-key-for-jwt";
    private static final long EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 天

    private static final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    // 產生 Token
    public String generateToken(Long userId) {
        return Jwts.builder()
                .setSubject(userId.toString())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_MS))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // 驗證 Token 並取得使用者 ID
    public Long validateAndGetUserId(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return Long.parseLong(claims.getSubject());
        } catch (JwtException | IllegalArgumentException e) {
            return null; // token 無效
        }
    }

    // 驗證 Token
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    // 提取使用者 ID
    public Long extractUserId(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return Long.parseLong(claims.getSubject());
        } catch (JwtException | IllegalArgumentException e) {
            return null;
        }
    }
} 