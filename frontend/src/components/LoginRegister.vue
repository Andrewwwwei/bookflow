<template>
  <div class="login-register">
    <div class="tab-buttons">
      <button
        @click="currentTab = 'login'"
        :class="{ active: currentTab === 'login' }"
      >
        登入
      </button>
      <button
        @click="currentTab = 'register'"
        :class="{ active: currentTab === 'register' }"
      >
        註冊
      </button>
      <button
        @click="currentTab = 'reset'"
        :class="{ active: currentTab === 'reset' }"
      >
        重置密碼
      </button>
    </div>

    <!-- 登入表單 -->
    <div v-if="currentTab === 'login'" class="form-container">
      <h2>登入</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label>手機號碼：</label>
          <input v-model="phoneNumber" type="text" required />
        </div>
        <div>
          <label>密碼：</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit">登入</button>
      </form>
    </div>

    <!-- 註冊表單 -->
    <div v-if="currentTab === 'register'" class="form-container">
      <h2>註冊</h2>
      <form @submit.prevent="handleRegister">
        <div>
          <label>手機號碼：</label>
          <input v-model="phoneNumber" type="text" required />
        </div>
        <div>
          <label>密碼：</label>
          <input v-model="password" type="password" required />
        </div>
        <div>
          <label>用戶名稱：</label>
          <input v-model="userName" type="text" required />
        </div>
        <button type="submit">註冊</button>
      </form>
    </div>

    <!-- 重置密碼表單 -->
    <div v-if="currentTab === 'reset'" class="form-container">
      <h2>重置密碼</h2>
      <form @submit.prevent="handleResetPassword">
        <div>
          <label>手機號碼：</label>
          <input v-model="resetPhoneNumber" type="text" required />
        </div>
        <div>
          <label>新密碼：</label>
          <input v-model="newPassword" type="password" required />
        </div>
        <div>
          <label>確認新密碼：</label>
          <input v-model="confirmPassword" type="password" required />
        </div>
        <button type="submit">重置密碼</button>
      </form>
    </div>

    <div v-if="message" class="message" :class="{ success: isSuccess }">{{ message }}</div>
  </div>
</template>

<script>
import { register, login, resetPassword } from '../api';

export default {
  name: 'LoginRegister',
  data() {
    return {
      phoneNumber: '',
      password: '',
      userName: '',
      resetPhoneNumber: '',
      newPassword: '',
      confirmPassword: '',
      currentTab: 'login',
      message: '',
      isSuccess: false
    };
  },
  methods: {
    async handleLogin() {
      this.message = '';
      try {
        const res = await login({ phoneNumber: this.phoneNumber, password: this.password });
        localStorage.setItem('token', res.data.token || '');
        this.message = '登入成功！';
        this.isSuccess = true;
        this.$emit('login-success');
        this.$router.push('/books');
      } catch (e) {
        this.message = e.response?.data?.message || '登入失敗';
        this.isSuccess = false;
      }
    },

    async handleRegister() {
      this.message = '';
      try {
        await register({
          phoneNumber: this.phoneNumber,
          password: this.password,
          userName: this.userName
        });
        this.message = '註冊成功，請登入！';
        this.isSuccess = true;
        this.currentTab = 'login';
        // 清空註冊表單
        this.phoneNumber = '';
        this.password = '';
        this.userName = '';
      } catch (e) {
        this.message = e.response?.data?.message || '註冊失敗';
        this.isSuccess = false;
      }
    },

    async handleResetPassword() {
      this.message = '';

      // 驗證密碼確認
      if (this.newPassword !== this.confirmPassword) {
        this.message = '兩次輸入的密碼不一致';
        this.isSuccess = false;
        return;
      }

      try {
        await resetPassword({
          phoneNumber: this.resetPhoneNumber,
          newPassword: this.newPassword
        });
        this.message = '密碼重置成功！請使用新密碼登入';
        this.isSuccess = true;
        this.currentTab = 'login';
        // 清空重置表單
        this.resetPhoneNumber = '';
        this.newPassword = '';
        this.confirmPassword = '';
      } catch (e) {
        this.message = e.response?.data?.message || '密碼重置失敗';
        this.isSuccess = false;
      }
    }
  }
};
</script>

<style scoped>
.login-register {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}

.tab-buttons {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.tab-buttons button {
  flex: 1;
  padding: 10px;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
  margin-right: 2px;
}

.tab-buttons button.active {
  background: #42b983;
  color: white;
}

.form-container h2 {
  margin-bottom: 20px;
  text-align: center;
}

.login-register label {
  display: block;
  margin-bottom: 4px;
}

.login-register input {
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-register button[type="submit"] {
  width: 100%;
  padding: 10px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.login-register button[type="submit"]:hover {
  background: #3aa876;
}

.message {
  margin-top: 12px;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
}

.message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message:not(.success) {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style> 