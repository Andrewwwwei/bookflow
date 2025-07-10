<template>
  <div id="app">
    <div class="user-bar">
      <template v-if="isLoggedIn">
        <span>已登入</span>
        <router-link to="/history" class="history-link">借閱中心</router-link>
        <button @click="logout">登出</button>
      </template>
      <template v-else>
        <button v-if="isLoginPage" class="books-btn" @click="goBooks">前往書櫃</button>
        <button v-else class="login-btn" @click="goLogin">登入/註冊</button>
      </template>
    </div>
    <router-view :isLoggedIn="isLoggedIn" @login-success="onLoginSuccess" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: !!localStorage.getItem('token')
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/' || this.$route.path === '/login';
    }
  },
  methods: {
    onLoginSuccess() {
      this.isLoggedIn = true;
    },
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.$router.push('/login');
    },
    goLogin() {
      this.$router.push('/login');
    },
    goBooks() {
      this.$router.push('/books');
    },
    syncLoginState() {
      this.isLoggedIn = !!localStorage.getItem('token');
    }
  },
  mounted() {
    window.addEventListener('storage', this.syncLoginState);
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.syncLoginState);
  }
};
</script>

<style scoped>
.user-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}
.user-bar button, .login-btn, .books-btn {
  padding: 4px 12px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.2s;
}
.user-bar button:hover, .login-btn:hover, .books-btn:hover {
  background: #2fa97c;
}
.history-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  margin-right: 8px;
}
</style>
