<template>
  <Transition name="scroll-btn">
    <button
      v-show="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="العودة للأعلى"
    >
      <span class="scroll-to-top__progress" :style="{ '--progress': progress }"></span>
      <i class="pi pi-arrow-up"></i>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const progress = ref(0)

function onScroll() {
  const scrollY = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  isVisible.value = scrollY > 400
  progress.value = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 1000;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(249, 115, 22, 0.9);
  color: #fff;
  font-size: 1.15rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 4px 24px rgba(249, 115, 22, 0.35);
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  background: var(--primary-dark);
  box-shadow: 0 8px 32px rgba(249, 115, 22, 0.45);
}

.scroll-to-top:active {
  transform: translateY(0);
}

/* circular progress ring */
.scroll-to-top__progress {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: conic-gradient(
    var(--primary) calc(var(--progress) * 360deg),
    transparent calc(var(--progress) * 360deg)
  );
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
  pointer-events: none;
}

/* transitions */
.scroll-btn-enter-active,
.scroll-btn-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-btn-enter-from,
.scroll-btn-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}

@media (max-width: 640px) {
  .scroll-to-top {
    bottom: 1.25rem;
    left: 1.25rem;
    width: 42px;
    height: 42px;
    font-size: 1rem;
  }
}
</style>
