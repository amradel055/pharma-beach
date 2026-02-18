<template>
  <Teleport to="body">
    <TransitionGroup name="toast" tag="div" class="toast-container">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['toast-item', `toast-${toast.type}`]"
        @click="toastStore.remove(toast.id)"
      >
        <i :class="iconClass(toast.type)" />
        <span>{{ toast.message }}</span>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import { useToastStore } from '@/stores/toast'

const toastStore = useToastStore()
const toasts = computed(() => toastStore.toasts)

function iconClass(type) {
  if (type === 'success') return 'pi pi-check-circle'
  if (type === 'error') return 'pi pi-times-circle'
  return 'pi pi-info-circle'
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  pointer-events: none;
}

.toast-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Cairo', sans-serif;
  cursor: pointer;
  pointer-events: auto;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  white-space: nowrap;
}

.toast-item i {
  font-size: 1rem;
}

.toast-success {
  background: rgba(22, 163, 74, 0.92);
  color: #fff;
}

.toast-error {
  background: rgba(220, 38, 38, 0.92);
  color: #fff;
}

.toast-info {
  background: rgba(14, 165, 233, 0.92);
  color: #fff;
}

/* Transitions */
.toast-enter-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast-leave-active {
  transition: all 0.25s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(-16px) scale(0.95);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.toast-move {
  transition: transform 0.3s ease;
}

@media (max-width: 640px) {
  .toast-container {
    left: 1rem;
    right: 1rem;
    transform: none;
  }

  .toast-item {
    white-space: normal;
  }
}
</style>
