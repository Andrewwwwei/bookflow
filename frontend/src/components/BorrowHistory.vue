<template>
  <div class="history-list">
    <div class="top-bar">
      <button class="back-btn" @click="$router.push('/books')">← 返回書籍列表</button>
      <h2>我的借閱紀錄</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>書名</th>
          <th>借閱時間</th>
          <th>還書時間</th>
          <th>狀態</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.id">
          <td class="book-name">{{ record.bookName }}</td>
          <td>{{ formatTime(record.borrowTime) }}</td>
          <td>{{ record.returnTime ? formatTime(record.returnTime) : '-' }}</td>
          <td>
            <span :class="{'status-unreturned': record.status === '尚未歸還', 'status-returned': record.status === '已歸還'}">
              {{ record.status }}
            </span>
          </td>
          <td>
            <button v-if="record.status === '尚未歸還'" @click="returnBook(record)">還書</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import { getBorrowHistory, returnBook } from '../api';

export default {
  name: 'BorrowHistory',
  data() {
    return {
      records: [],
      message: ''
    };
  },
  methods: {
    async fetchHistory() {
      try {
        const res = await getBorrowHistory();
        this.records = res.data;
      } catch (e) {
        this.message = '取得借閱紀錄失敗';
      }
    },
    async returnBook(record) {
      this.message = '';
      try {
        await returnBook(record.inventoryId);
        this.message = '還書成功';
        this.fetchHistory();
      } catch (e) {
        this.message = e.response?.data?.message || '還書失敗';
      }
    },
    formatTime(time) {
      if (!time) return '';
      return new Date(time).toLocaleString();
    }
  },
  mounted() {
    this.fetchHistory();
  }
};
</script>

<style scoped>
.history-list {
  max-width: 900px;
  margin: 40px auto;
  padding: 28px 20px 20px 20px;
  border-radius: 12px;
  background: #f7f9fa;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}
.top-bar {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}
.back-btn {
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
.back-btn:hover {
  background: linear-gradient(90deg, #2fa97c 60%, #42b983 100%);
  transform: scale(1.07);
}
.history-list h2 {
  text-align: left;
  margin: 0;
  color: #222;
  letter-spacing: 2px;
  font-size: 1.4rem;
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(66,185,131,0.08);
}
th, td {
  padding: 12px 14px;
  text-align: center;
  font-size: 1rem;
}
th {
  background: #e6f2ed;
  color: #222;
  font-weight: bold;
  border-bottom: 2px solid #b2e2d2;
}
td {
  border-bottom: 1px solid #f0f0f0;
}
tr:last-child td {
  border-bottom: none;
}
.book-name {
  font-weight: bold;
  color: #42b983;
  letter-spacing: 1px;
}
.status-unreturned {
  color: #d33;
  font-weight: bold;
}
.status-returned {
  color: #42b983;
  font-weight: bold;
}
button {
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
button:hover {
  background: linear-gradient(90deg, #2fa97c 60%, #42b983 100%);
  transform: scale(1.07);
}
.message {
  color: #42b983;
  margin-top: 18px;
  text-align: center;
  font-size: 1.1rem;
}
@media (max-width: 700px) {
  .history-list {
    padding: 10px 2px 10px 2px;
  }
  th, td {
    padding: 8px 4px;
    font-size: 0.95rem;
  }
  .top-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .history-list h2 {
    font-size: 1.1rem;
  }
}
</style> 