<template>
  <div class="book-list">
    <h2>書籍列表</h2>
    <div v-if="!isLoggedIn" class="warn">請先登入才能借書</div>
    <ul class="book-list-flex">
      <li v-for="book in books" :key="book.isbn" class="book-item">
        <div class="book-info">
          <div class="book-title">{{ book.name }}</div>
          <div class="book-meta">
            <span class="author">作者：{{ book.author }}</span>
            <span class="isbn">ISBN：{{ book.isbn }}</span>
          </div>
          <div class="book-intro">{{ book.introduction }}</div>
          <div class="book-available">
            <span :class="{'available': book.availableCount > 0, 'unavailable': book.availableCount === 0}">
              可借閱數量：{{ book.availableCount }}
            </span>
          </div>
        </div>
        <div class="book-actions">
          <button v-if="book.availableCount > 0" @click="borrow(book)">借閱</button>
          <span v-else class="unavailable-text">（已借閱完）</span>
        </div>
      </li>
    </ul>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import { getBooks, borrowBook } from '../api';

export default {
  name: 'BookList',
  data() {
    return {
      books: [],
      message: ''
    };
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  },
  methods: {
    async fetchBooks() {
      try {
        const res = await getBooks();
        this.books = res.data;
      } catch (e) {
        this.message = '取得書籍失敗';
      }
    },
    async borrow(book) {
      this.message = '';
      if (!this.isLoggedIn) {
        this.$router.push('/login');
        return;
      }
      try {
        await borrowBook(book.isbn);
        this.message = '借閱成功';
        this.fetchBooks();
      } catch (e) {
        this.message = e.response?.data?.message || '借閱失敗';
      }
    }
  },
  mounted() {
    this.fetchBooks();
  }
};
</script>

<style scoped>
.book-list {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  background: #f7f9fa;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}
.book-list h2 {
  text-align: center;
  margin-bottom: 28px;
  color: #222;
  letter-spacing: 2px;
}
.book-list-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.book-item {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(66,185,131,0.08);
  padding: 22px 20px 16px 20px;
  width: calc(33.333% - 18.7px);
  min-width: 260px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s, transform 0.2s;
  border: 1.5px solid #e6f2ed;
}
.book-item:hover {
  box-shadow: 0 8px 32px rgba(66,185,131,0.18);
  transform: translateY(-4px) scale(1.02);
  border-color: #42b983;
}
@media (max-width: 1100px) {
  .book-item {
    width: calc(50% - 14px);
  }
}
@media (max-width: 700px) {
  .book-item {
    width: 100%;
  }
}
.book-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
  letter-spacing: 1px;
}
.book-meta {
  font-size: 0.98rem;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  gap: 18px;
}
.book-intro {
  font-size: 0.97rem;
  color: #444;
  margin-bottom: 10px;
  min-height: 36px;
}
.book-available {
  margin-bottom: 12px;
}
.available {
  color: #42b983;
  font-weight: bold;
}
.unavailable {
  color: #d33;
  font-weight: bold;
}
.unavailable-text {
  color: #d33;
  font-size: 0.98rem;
  font-weight: bold;
}
.warn {
  color: #d33;
  background: #fff3f3;
  border: 1.5px solid #f5bcbc;
  border-radius: 6px;
  padding: 10px 18px;
  margin-bottom: 18px;
  text-align: center;
  font-size: 1.08rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.book-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 100px;
}
.book-list button {
  padding: 6px 18px;
  background: linear-gradient(90deg, #42b983 60%, #2fa97c 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(66,185,131,0.08);
  transition: background 0.2s, transform 0.2s;
}
.book-list button:hover {
  background: linear-gradient(90deg, #2fa97c 60%, #42b983 100%);
  transform: scale(1.07);
}
.message {
  margin-top: 18px;
  color: #42b983;
  text-align: center;
  font-size: 1.1rem;
}
</style>
