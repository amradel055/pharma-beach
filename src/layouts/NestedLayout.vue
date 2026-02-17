<template>
  <div class="nested-layout">
    <TheNestedNavbar />
    <main class="nested-content">
      <RouterView v-slot="{ Component }">
        <Transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
import TheNestedNavbar from '@/components/layout/TheNestedNavbar.vue'
</script>

<style scoped>
.nested-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nested-content {
  flex: 1;
}
</style>
