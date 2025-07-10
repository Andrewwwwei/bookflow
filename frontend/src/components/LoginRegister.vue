<template>
  <div class="login-register">
    <h2>{{ isLogin ? '登入' : '註冊' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>手機號碼：</label>
        <input v-model="phoneNumber" type="text" required />
      </div>
      <div>
        <label>密碼：</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">{{ isLogin ? '登入' : '註冊' }}</button>
    </form>
    <button @click="isLogin = !isLogin" style="margin-top:10px;">
      {{ isLogin ? '還沒有帳號？註冊' : '已有帳號？登入' }}
    </button>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import { register, login } from '../api';

export default {
  name: 'LoginRegister',
  data() {
    return {
      phoneNumber: '',
      password: '',
      isLogin: true,
      message: ''
    };
  },
  methods: {
    async handleSubmit() {
      this.message = '';
      try {
        if (this.isLogin) {
          const res = await login({ phoneNumber: this.phoneNumber, password: this.password });
          // 後端回傳 token
          localStorage.setItem('token', res.data.token || '');
          this.message = '登入成功！';
          this.$emit('login-success');
          this.$router.push('/books');
        } else {
          await register({ phoneNumber: this.phoneNumber, password: this.password, userName: this.phoneNumber });
          this.message = '註冊成功，請登入！';
          this.isLogin = true;
        }
      } catch (e) {
        this.message = e.response?.data?.message || '操作失敗';
      }
    }
  }
};
</script>

<style scoped>
.login-register {
  max-width: 300px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}
.login-register label {
  display: block;
  margin-bottom: 4px;
}
.login-register input {
  width: 100%;
  margin-bottom: 12px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-register button {
  width: 100%;
  padding: 8px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login-register .message {
  margin-top: 12px;
  color: #d33;
}
</style> 