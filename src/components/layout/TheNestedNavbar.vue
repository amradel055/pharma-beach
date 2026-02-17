<template>
  <header class="nested-navbar">
    <div class="navbar-inner">
      <button class="back-btn" @click="goBack" aria-label="رجوع">
        <i class="pi pi-arrow-right" />
      </button>

      <RouterLink to="/" class="navbar-logo">
        <img :src="logo" alt="Pharma Beach" />
      </RouterLink>

      <span class="navbar-title">{{ pageTitle }}</span>

      <div class="navbar-spacer" />
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logo from '@/assets/images/logo.jpeg'

const route = useRoute()
const router = useRouter()

const pageTitle = computed(() => route.meta?.title || '')

function goBack() {
  if (window.history.length > 2) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.nested-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.6rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  color: #334155;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.back-btn:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  transform: translateX(3px);
  box-shadow: 0 2px 12px rgba(var(--primary-rgb), 0.3);
}

.navbar-logo img {
  height: 38px;
  width: auto;
}

.navbar-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.navbar-spacer {
  flex: 1;
}

@media (max-width: 640px) {
  .navbar-inner {
    padding: 0.5rem 1rem;
    gap: 0.75rem;
  }

  .navbar-logo img {
    height: 32px;
  }
}
</style>
