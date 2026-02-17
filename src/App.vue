<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade-slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700&display=swap');

:root {
  --primary: #f97316;
  --primary-dark: #ea580c;
  --primary-darker: #c2410c;
  --primary-rgb: 249, 115, 22;

  --secondary: #0ea5e9;
  --secondary-dark: #0284c7;
  --secondary-darker: #0369a1;
  --secondary-rgb: 14, 165, 233;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

body {
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  color: #1a1a2e;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
