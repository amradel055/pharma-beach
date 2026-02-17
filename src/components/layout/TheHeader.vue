<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="header-inner">
      <RouterLink to="/" class="header-logo">
        <img :src="logo" alt="Pharma Beach" />
      </RouterLink>

      <nav class="header-actions">
        <RouterLink to="/login" class="btn-login">تسجيل الدخول</RouterLink>
        <RouterLink to="/register" class="btn-register">إنشاء حساب</RouterLink>
      </nav>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="القائمة">
        <i :class="mobileOpen ? 'pi pi-times' : 'pi pi-bars'" />
      </button>
    </div>

    <Transition name="slide-down">
      <div v-if="mobileOpen" class="mobile-menu">
        <RouterLink to="/login" class="btn-login" @click="mobileOpen = false">تسجيل الدخول</RouterLink>
        <RouterLink to="/register" class="btn-register" @click="mobileOpen = false">إنشاء حساب</RouterLink>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/images/logo.jpeg'

const isScrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.08);
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo img {
  height: 52px;
  width: auto;
  transition: height 0.3s ease;
}

.header.scrolled .header-logo img {
  height: 44px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-login {
  padding: 0.55rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.25s ease;
  color: #1a1a2e;
  background: rgba(255, 255, 255, 0.65);
  border: 1.5px solid rgba(0, 0, 0, 0.08);
}

.btn-login:hover {
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary);
  border-color: rgba(var(--primary-rgb), 0.2);
}

.header.scrolled .btn-login {
  background: rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.08);
}

.header.scrolled .btn-login:hover {
  background: rgba(var(--primary-rgb), 0.06);
  color: var(--primary);
  border-color: rgba(var(--primary-rgb), 0.2);
}

.btn-register {
  padding: 0.55rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.25s ease;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  border: none;
  box-shadow: 0 2px 12px rgba(var(--primary-rgb), 0.3);
}

.btn-register:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
  box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.4);
  transform: translateY(-1px);
}

/* Mobile */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #1a1a2e;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
}

.mobile-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 2rem 1.25rem;
  max-width: 1280px;
  margin: 0 auto;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 640px) {
  .header-actions {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }

  .mobile-menu {
    display: flex;
  }

  .mobile-menu .btn-login,
  .mobile-menu .btn-register {
    text-align: center;
    width: 100%;
    display: block;
  }
}
</style>
