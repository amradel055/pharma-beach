<template>
  <header class="nested-navbar">
    <div class="navbar-inner">
      <RouterLink to="/" class="navbar-logo">
        <img :src="logo" alt="Pharma Beach" />
      </RouterLink>

      <span class="navbar-title">{{ pageTitle }}</span>

      <button class="back-btn" @click="goBack" aria-label="رجوع">
        العودة
        <i class="pi pi-arrow-left" />
      </button>
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
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  max-width: 1280px;
  width: 100%;
  padding: 0 2rem;
}

.navbar-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 50px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.back-btn {
  padding: 0.45rem 1rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: inherit;
  color: #fff;
  transition: all 0.25s ease;
  flex-shrink: 0;
  box-shadow: 0 2px 12px rgba(var(--primary-rgb), 0.35);
  white-space: nowrap;
}

.back-btn:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
  box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.5);
  transform: scale(1.05);
}

.navbar-title {
  flex: 1;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #0f172a, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.navbar-logo img {
  height: 34px;
  width: auto;
  border-radius: 50px;
}

@media (max-width: 640px) {
  .nested-navbar {
    top: 0.75rem;
    padding: 0 1rem;
  }

  .navbar-inner {
    padding: 0.45rem 1rem;
    gap: 0.6rem;
  }

  .back-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }

  .navbar-title {
    font-size: 0.82rem;
  }

  .navbar-logo img {
    height: 28px;
  }
}
</style>
