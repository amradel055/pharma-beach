import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
        component: () => import('@/views/LoginView.vue'),
        meta: { title: 'تسجيل الدخول', guest: true },
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue'),
        meta: { title: 'إنشاء حساب', guest: true },
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

  // Booking confirmation (requires auth)
  {
    path: '/booking-confirmation',
    component: NestedLayout,
    children: [
      {
        path: ':id',
        name: 'booking-confirmation',
        component: () => import('@/views/BookingConfirmationView.vue'),
        meta: { title: 'تأكيد الحجز', requiresAuth: true },
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

router.beforeEach((to) => {
  const auth = useAuthStore()

  // Protected routes — redirect to login if not authenticated
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    auth.returnUrl = to.fullPath
    return { name: 'login' }
  }

  // Guest-only routes — redirect to home if already authenticated
  if (to.meta.guest && auth.isAuthenticated) {
    return { name: 'home' }
  }
})

export default router
