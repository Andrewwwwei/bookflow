import axios from 'axios';

const API_BASE = '/api'; // Spring Boot serve 前端時，API 路徑可用相對路徑

const instance = axios.create();

// 攔截器：自動帶上 token
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete config.headers['Authorization'];
  }
  return config;
});

// 回應攔截器：遇到 401 自動登出並導向登入頁
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const register = (data) => instance.post(`${API_BASE}/auth/register`, data);
export const login = (data) => instance.post(`${API_BASE}/auth/login`, data);
export const getBooks = () => instance.get(`${API_BASE}/book/list`);
export const borrowBook = (isbn) => instance.post(`${API_BASE}/borrow/isbn/${isbn}`);
export const returnBook = (inventoryId) => instance.post(`${API_BASE}/return/${inventoryId}`);
export const getBorrowHistory = () => instance.get(`${API_BASE}/borrow/history`);
