import { createRouter, createWebHistory } from 'vue-router'
import LoginRegister from '../components/LoginRegister.vue'
import BookList from '../components/BookList.vue'
import BorrowHistory from '../components/BorrowHistory.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginRegister,
        meta: { title: '登入 - 借書系統' }
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginRegister,
        meta: { title: '登入 - 借書系統' }
    },
    {
        path: '/books',
        name: 'BookList',
        component: BookList,
        meta: { title: '書櫃 - 借書系統' }
    },
    {
        path: '/history',
        name: 'BorrowHistory',
        component: BorrowHistory,
        meta: { title: '借閱中心 - 借書系統' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 自動切換分頁標題
router.afterEach((to) => {
    document.title = to.meta.title || '借書系統';
});

export default router
