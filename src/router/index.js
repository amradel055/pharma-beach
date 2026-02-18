import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NestedLayout from '@/layouts/NestedLayout.vue'

const routes = [
  // Main layout — header + footer
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },

  // Default layout — empty page (no header, no footer)
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'تسجيل الدخول' },
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'إنشاء حساب' },
      },
    ],
  },

  // Booking wizard
  {
    path: '/booking',
    component: NestedLayout,
    children: [
      {
        path: '',
        name: 'booking',
        component: () => import('@/views/BookingView.vue'),
        meta: { title: 'البحث عن شاليه' },
      },
      {
        path: ':id',
        name: 'chalet-details',
        component: () => import('@/views/ChaletDetailsView.vue'),
        meta: { title: 'تفاصيل الشاليه' },
      },
    ],
  },

  // Nested layout — different navbar, no footer
  {
    path: '/app',
    component: NestedLayout,
    children: [
      {
        path: 'privacy',
        name: 'privacy',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'السياسات والخصوصية' },
      },
      {
        path: 'terms',
        name: 'terms',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'الشروط والأحكام' },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'تواصل معنا' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
