package com.andrew.bookflow.controller;

import com.andrew.bookflow.entity.User;
import com.andrew.bookflow.service.UserService;
import com.andrew.bookflow.vo.UserVO;
import com.andrew.bookflow.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody Map<String, String> req) {
        log.debug("Received registration request: {}", req);
        String phoneNumber = req.get("phoneNumber");
        String password = req.get("password");
        String userName = req.get("userName");

        log.debug("Registering user: phone={}, name={}", phoneNumber, userName);

        User user = userService.register(phoneNumber, password, userName);
        UserVO vo = new UserVO();
        vo.setUserId(user.getId());
        vo.setUserName(user.getUserName());
        vo.setPhone(user.getPhoneNumber());
        vo.setLastLoginTime(user.getLastLoginTime());

        Map<String, Object> resp = new HashMap<>();
        resp.put("success", true);
        resp.put("user", vo);
        return resp;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> req) {
        String phoneNumber = req.get("phoneNumber");
        String password = req.get("password");

        log.debug("Login attempt: phoneNumber={}", phoneNumber);

        User user = userService.login(phoneNumber, password);
        String token = jwtUtil.generateToken(user.getId());

        Map<String, Object> resp = new HashMap<>();
        resp.put("success", true);
        resp.put("token", token);
        resp.put("userId", user.getId());
        return resp;
    }
}
