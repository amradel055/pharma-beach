<template>
  <div class="home">
    <section class="hero">
      <div :class="['hero-visual', { 'has-spotlight': spotlightIdx !== -1 }]" ref="visualRef">
        <img :src="heroBg" alt="Pharma Beach Resort" />
        <div class="hero-overlay" />

        <!-- Float Card 1: Chalet preview -->
        <div
          :class="['fcard fcard-1', { entered, spotlight: spotlightIdx === 0 }]"
          :style="spotlightIdx === 0 ? { transform: spotlightTransform } : {}"
        >
          <div class="fcard-thumb">
            <img :src="heroImg" alt="شاليه فاخر" />
          </div>
          <div class="fcard-body">
            <strong>شاليهات فاخرة</strong>
            <span>إطلالة مباشرة على البحر</span>
          </div>
        </div>

        <!-- Float Card 2: Rating -->
        <div
          :class="['fcard fcard-2', { entered, spotlight: spotlightIdx === 1 }]"
          :style="spotlightIdx === 1 ? { transform: spotlightTransform } : {}"
        >
          <div class="fcard-icon fcard-icon--star">
            <i class="pi pi-star-fill" />
          </div>
          <div class="fcard-body">
            <strong>4.9 <small>/ 5</small></strong>
            <span>تقييم الزوار</span>
          </div>
        </div>

        <!-- Float Card 3: Live guests -->
        <div
          :class="['fcard fcard-3', { entered, spotlight: spotlightIdx === 2 }]"
          :style="spotlightIdx === 2 ? { transform: spotlightTransform } : {}"
        >
          <div class="fcard-avatars">
            <span class="avatar a1">A</span>
            <span class="avatar a2">M</span>
            <span class="avatar a3">S</span>
          </div>
          <div class="fcard-body">
            <strong>+1,200 حجز</strong>
            <span>هذا الموسم</span>
          </div>
        </div>

        <!-- Float Card 4: Location -->
        <div
          :class="['fcard fcard-4', { entered, spotlight: spotlightIdx === 3 }]"
          :style="spotlightIdx === 3 ? { transform: spotlightTransform } : {}"
        >
          <div class="fcard-icon fcard-icon--loc">
            <i class="pi pi-map-marker" />
          </div>
          <div class="fcard-body">
            <strong>الساحل الشمالي</strong>
            <span>البحر الأبيض المتوسط</span>
          </div>
        </div>

        <!-- Stat Card 1: Chalets -->
        <div
          :class="['fcard fcard-stat fcard-s1', { entered, spotlight: spotlightIdx === 4 }]"
          :style="spotlightIdx === 4 ? { transform: spotlightTransform } : {}"
        >
          <div class="fcard-icon fcard-icon--building">
            <i class="pi pi-building" />
          </div>
          <div class="fcard-body">
            <strong>+50 شاليه</strong>
            <span>بمساحات متنوعة</span>
          </div>
        </div>

        <!-- Stat Card 2: Service -->
        <div
          :class="['fcard fcard-stat fcard-s2', { entered, spotlight: spotlightIdx === 5 }]"
          :style="spotlightIdx === 5 ? { transform: spotlightTransform } : {}"
        >
          <div class="fcard-icon fcard-icon--check">
            <i class="pi pi-check-circle" />
          </div>
          <div class="fcard-body">
            <strong>خدمة متميزة</strong>
            <span>على مدار الساعة</span>
          </div>
        </div>

        <!-- Stat Card 3: Beach -->
        <div
          :class="['fcard fcard-stat fcard-s3', { entered, spotlight: spotlightIdx === 6 }]"
          :style="spotlightIdx === 6 ? { transform: spotlightTransform } : {}"
        >
          <div class="fcard-icon fcard-icon--sun">
            <i class="pi pi-sun" />
          </div>
          <div class="fcard-body">
            <strong>شاطئ خاص</strong>
            <span>رمال ذهبية نقية</span>
          </div>
        </div>
      </div>


      <!-- Ambient effects -->
      <div class="hero-ambient">
        <span
          v-for="(orb, i) in bokehOrbs" :key="'o'+i"
          class="bokeh"
          :style="{
            left: orb.x, top: orb.y,
            width: orb.size+'px', height: orb.size+'px',
            background: orb.clr,
            '--blur': orb.blur+'px',
            '--dur': orb.dur+'s',
            '--del': orb.del+'s',
            '--dx': orb.dx+'px',
            '--dy': orb.dy+'px',
          }"
        />
        <span
          v-for="(s, i) in sparkles" :key="'s'+i"
          class="sparkle"
          :style="{
            left: s.x, top: s.y,
            width: s.size+'px', height: s.size+'px',
            '--dur': s.dur+'s',
            '--del': s.del+'s',
          }"
        />
        <div class="light-sweep" />
      </div>

      <div class="hero-content">
        <div class="hero-content-inner">
          <span class="hero-badge anim-item" style="--i: 0">
            <i class="pi pi-star-fill" />
            الوجهة الأولى للاستجمام
          </span>

          <h1 class="hero-title">
            <span class="title-word">
              <span v-for="(ch, i) in 'Pharma'" :key="'p'+i" class="title-letter title-blue" :style="`--d:${i}`">{{ ch }}</span>
              <span class="title-letter title-space" :style="`--d:6`">&nbsp;</span>
              <span v-for="(ch, i) in 'Beach'" :key="'b'+i" class="title-letter title-dark" :style="`--d:${i + 7}`">{{ ch }}</span>
            </span>
          </h1>

          <p class="hero-desc anim-item" style="--i: 2">
            استمتع بتجربة استثنائية على شاطئ البحر الأبيض المتوسط،
            <br />
            شاليهات فاخرة وخدمات لا مثيل لها
          </p>

          <div class="hero-actions anim-item" style="--i: 3">
            <RouterLink to="/booking" class="btn-book">احجز الآن</RouterLink>
            <a href="#discover" class="btn-discover">
              اكتشف المزيد
              <i class="pi pi-arrow-down" />
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Discover Section -->
    <section id="discover" class="discover">
      <div class="discover-header">
        <h2 class="discover-title">اكتشف <span>جمال</span> القرية</h2>
        <p class="discover-sub">استمتع بمرافق متنوعة تلبي جميع احتياجاتك</p>
      </div>

      <div class="discover-tabs">
        <button
          v-for="(cat, i) in categories"
          :key="cat.id"
          :class="['dtab', { active: activeCat === i }]"
          @click="goToSlide(i)"
        >{{ cat.label }}</button>
      </div>

      <div class="discover-carousel">
        <Swiper
          :modules="swiperModules"
          :slides-per-view="1.4"
          :centered-slides="true"
          :space-between="24"
          :loop="true"
          :speed="650"
          :grab-cursor="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }"
          :navigation="{ nextEl: '.nav-next', prevEl: '.nav-prev' }"
          :breakpoints="{
            768: { slidesPerView: 1.6, spaceBetween: 30 },
            1024: { slidesPerView: 2.2, spaceBetween: 36 },
          }"
          effect="coverflow"
          :coverflow-effect="{ rotate: 4, stretch: 0, depth: 180, modifier: 1, slideShadows: false }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="item in galleryItems" :key="item.id">
            <div class="dcard">
              <img :src="item.img" :alt="item.title" loading="lazy" />
              <div class="dcard-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button class="carousel-nav nav-prev" aria-label="السابق">
          <i class="pi pi-chevron-right" />
        </button>
        <button class="carousel-nav nav-next" aria-label="التالي">
          <i class="pi pi-chevron-left" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import heroBg from '@/assets/images/hero-bg.jpg'
import heroImg from '@/assets/images/hero-1.jpg'

const bokehOrbs = [
  { x: '78%', y: '12%', size: 110, clr: 'rgba(var(--primary-rgb), 0.18)', blur: 35, dur: 9, del: 0, dx: -35, dy: 45 },
  { x: '8%', y: '60%', size: 150, clr: 'rgba(var(--secondary-rgb), 0.14)', blur: 45, dur: 12, del: 3, dx: 45, dy: -30 },
  { x: '55%', y: '75%', size: 90, clr: 'rgba(var(--primary-rgb), 0.12)', blur: 30, dur: 8, del: 1.5, dx: -25, dy: -40 },
  { x: '25%', y: '20%', size: 130, clr: 'rgba(var(--secondary-rgb), 0.1)', blur: 40, dur: 14, del: 5, dx: 30, dy: 35 },
  { x: '90%', y: '50%', size: 80, clr: 'rgba(var(--primary-rgb), 0.15)', blur: 25, dur: 10, del: 2, dx: -40, dy: -20 },
  { x: '40%', y: '5%', size: 100, clr: 'rgba(255,255,255,0.12)', blur: 30, dur: 11, del: 4, dx: 20, dy: 50 },
]

const sparkles = [
  { x: '18%', y: '25%', size: 4, dur: 3.5, del: 0 },
  { x: '72%', y: '18%', size: 3, dur: 4, del: 1.2 },
  { x: '45%', y: '70%', size: 5, dur: 3, del: 2.5 },
  { x: '85%', y: '40%', size: 3, dur: 4.5, del: 0.8 },
  { x: '30%', y: '85%', size: 4, dur: 3.8, del: 3.5 },
  { x: '60%', y: '35%', size: 3, dur: 5, del: 1.8 },
  { x: '12%', y: '50%', size: 5, dur: 3.2, del: 4.2 },
  { x: '92%', y: '72%', size: 4, dur: 4.2, del: 2.8 },
  { x: '50%', y: '10%', size: 3, dur: 3.6, del: 5 },
  { x: '75%', y: '88%', size: 4, dur: 4.8, del: 0.5 },
]

const visualRef = ref(null)
const entered = ref(false)
const spotlightIdx = ref(-1)
const spotlightTransform = ref('')
let running = true

// Base transforms that cards use for positioning (fcard-s1 uses translateX(50%) to center)
const BASE_TRANSFORMS = ['', '', '', '', '', '', '']
const CARD_COUNT = 7

function wait(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function startShowcase() {
  // Wait for all entrance animations to finish
  await wait(5500)
  if (!running) return
  entered.value = true
  await wait(300)

  let lastIdx = -1

  while (running) {
    // Pause between spotlights
    await wait(1500 + Math.random() * 1000)
    if (!running) break

    // Pick a random card (different from last)
    let idx
    do {
      idx = Math.floor(Math.random() * CARD_COUNT)
    } while (idx === lastIdx)
    lastIdx = idx

    // Calculate movement to container center
    const container = visualRef.value
    if (!container) break
    const cards = container.querySelectorAll('.fcard')
    const card = cards[idx]
    if (!card) continue

    const cRect = container.getBoundingClientRect()
    const kRect = card.getBoundingClientRect()

    // Target left-center area (away from glass content card)
    const dx = (cRect.left + cRect.width * 0.3) - (kRect.left + kRect.width / 2)
    const dy = (cRect.top + cRect.height / 2) - (kRect.top + kRect.height / 2)

    const base = BASE_TRANSFORMS[idx]
    spotlightTransform.value = `${base} translate(${dx}px, ${dy}px) scale(1.45)`.trim()
    spotlightIdx.value = idx

    // Hold in spotlight
    await wait(2500)
    if (!running) break

    // Return to original position
    spotlightIdx.value = -1
    spotlightTransform.value = ''

    // Wait for return transition to finish
    await wait(900)
  }
}

onMounted(startShowcase)
onUnmounted(() => { running = false })

// ---- Discover Section ----
const swiperModules = [Navigation, Autoplay, EffectCoverflow]
let swiperInstance = null

const categories = [
  { id: 'pool', label: 'مسبح' },
  { id: 'beach', label: 'شاطئ خاص' },
  { id: 'chalets', label: 'شاليهات' },
  { id: 'restaurants', label: 'مطاعم' },
  { id: 'waterGames', label: 'ألعاب مائية' },
  { id: 'gardens', label: 'حدائق' },
]

const galleryItems = [
  { id: 1, title: 'المسبح الرئيسي', desc: 'استرخاء وسباحة بلا حدود', img: 'https://picsum.photos/seed/pharma-pool/800/500' },
  { id: 2, title: 'الشاطئ الخاص', desc: 'رمال ذهبية وأمواج هادئة', img: 'https://picsum.photos/seed/pharma-beach/800/500' },
  { id: 3, title: 'الشاليهات', desc: 'إقامة فاخرة بإطلالة بحرية', img: 'https://picsum.photos/seed/pharma-chalet/800/500' },
  { id: 4, title: 'المطعم', desc: 'مأكولات عالمية وأجواء ساحرة', img: 'https://picsum.photos/seed/pharma-dining/800/500' },
  { id: 5, title: 'الألعاب المائية', desc: 'مغامرات ومرح للجميع', img: 'https://picsum.photos/seed/pharma-water/800/500' },
  { id: 6, title: 'الحدائق', desc: 'طبيعة خلابة واسترخاء', img: 'https://picsum.photos/seed/pharma-garden/800/500' },
]

const activeCat = ref(0)

function onSwiper(swiper) {
  swiperInstance = swiper
}

function onSlideChange(swiper) {
  activeCat.value = swiper.realIndex
}

function goToSlide(idx) {
  if (swiperInstance) swiperInstance.slideToLoop(idx, 650)
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* ---- Full Background Image ---- */
.hero-visual {
  position: absolute;
  inset: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.3) 40%,
    rgba(0, 0, 0, 0.12) 100%
  );
  z-index: 1;
}

.hero-visual > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  animation: img-reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes img-reveal {
  from {
    opacity: 0;
    scale: 1.08;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

/* ---- Floating Cards ---- */
.fcard {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.55rem 1rem 0.55rem 0.55rem;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 5;
  opacity: 0;
  will-change: transform, opacity;
}

/* ---- Entered state (after entrance animations) ---- */
.fcard.entered {
  animation: none;
  opacity: 1;
  transition:
    transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.6s ease,
    filter 0.5s ease;
}

.fcard.spotlight {
  z-index: 10;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.22),
    0 4px 12px rgba(0, 0, 0, 0.08);
}

.has-spotlight .fcard.entered:not(.spotlight) {
  filter: brightness(0.75) saturate(0.6);
}

.fcard-body {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.fcard-body strong {
  font-size: 0.82rem;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
}

.fcard-body strong small {
  font-weight: 500;
  color: #94a3b8;
  font-size: 0.72rem;
}

.fcard-body span {
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 500;
  white-space: nowrap;
}

/* --- Card 1: Chalet preview --- */
.fcard-1 {
  bottom: 8rem;
  left: 4%;
  animation:
    fc-enter-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.4s forwards,
    fc-drift-1 6s ease-in-out 2.3s infinite;
}

.fcard-thumb {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.fcard-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Card 2: Rating --- */
.fcard-2 {
  top: 7rem;
  left: 2%;
  animation:
    fc-enter-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.8s forwards,
    fc-drift-2 7s ease-in-out 2.7s infinite;
}

.fcard-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.fcard-icon--star {
  background: rgba(250, 204, 21, 0.15);
  color: #eab308;
}

/* --- Card 3: Guests --- */
.fcard-3 {
  bottom: 3rem;
  left: 30%;
  animation:
    fc-enter-left 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.2s forwards,
    fc-drift-3 8s ease-in-out 3.1s infinite;
}

.fcard-avatars {
  display: flex;
  flex-shrink: 0;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.9);
}

.avatar:not(:first-child) {
  margin-right: -10px;
}

.a1 { background: var(--primary); }
.a2 { background: var(--secondary); }
.a3 { background: #8b5cf6; }

/* --- Card 4: Location --- */
.fcard-4 {
  top: 13rem;
  left: 28%;
  animation:
    fc-enter-left 0.9s cubic-bezier(0.22, 1, 0.36, 1) 2.6s forwards,
    fc-drift-4 9s ease-in-out 3.5s infinite;
}

.fcard-icon--loc {
  background: rgba(var(--primary-rgb), 0.12);
  color: var(--primary);
}

/* --- Stat Cards --- */
.fcard-stat {
  padding: 0.45rem 0.9rem 0.45rem 0.45rem;
}

.fcard-stat .fcard-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  font-size: 0.9rem;
}

.fcard-s1 {
  bottom: 2.5rem;
  left: 15%;
  animation:
    fc-enter-bottom 0.9s cubic-bezier(0.22, 1, 0.36, 1) 3s forwards,
    fc-drift-s1 7s ease-in-out 3.9s infinite;
}

.fcard-s2 {
  top: 42%;
  left: 1%;
  animation:
    fc-enter-left 0.9s cubic-bezier(0.22, 1, 0.36, 1) 3.3s forwards,
    fc-drift-s2 8s ease-in-out 4.2s infinite;
}

.fcard-s3 {
  top: 38%;
  left: 40%;
  animation:
    fc-enter-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) 3.6s forwards,
    fc-drift-s3 9s ease-in-out 4.5s infinite;
}

.fcard-icon--building {
  background: rgba(var(--secondary-rgb), 0.12);
  color: var(--secondary);
}

.fcard-icon--check {
  background: rgba(34, 197, 94, 0.12);
  color: #16a34a;
}

.fcard-icon--sun {
  background: rgba(250, 204, 21, 0.12);
  color: #ca8a04;
}

/* ---- Entrance Animations ---- */
@keyframes fc-enter-right {
  0% {
    opacity: 0;
    transform: translateX(-40px) translateY(15px) scale(0.88);
  }
  65% {
    opacity: 1;
    transform: translateX(5px) translateY(-2px) scale(1.03);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}

@keyframes fc-enter-left {
  0% {
    opacity: 0;
    transform: translateX(40px) translateY(15px) scale(0.88);
  }
  65% {
    opacity: 1;
    transform: translateX(-5px) translateY(-2px) scale(1.03);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}

@keyframes fc-enter-bottom {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.88);
  }
  65% {
    opacity: 1;
    transform: translateY(-4px) scale(1.03);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ---- Drift / Float Animations (each unique) ---- */
@keyframes fc-drift-1 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-9px) rotate(0.6deg); }
  55% { transform: translateY(-3px) rotate(-0.4deg); }
  80% { transform: translateY(-11px) rotate(0.3deg); }
}

@keyframes fc-drift-2 {
  0%, 100% { transform: translateY(0) translateX(0); }
  20% { transform: translateY(-6px) translateX(3px); }
  50% { transform: translateY(-12px) translateX(-2px); }
  75% { transform: translateY(-4px) translateX(4px); }
}

@keyframes fc-drift-3 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  30% { transform: translateY(-7px) rotate(-0.5deg); }
  60% { transform: translateY(-13px) rotate(0.4deg); }
  85% { transform: translateY(-5px) rotate(-0.2deg); }
}

@keyframes fc-drift-4 {
  0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
  20% { transform: translateY(-10px) translateX(-3px) rotate(-0.5deg); }
  45% { transform: translateY(-4px) translateX(2px) rotate(0.3deg); }
  70% { transform: translateY(-12px) translateX(-1px) rotate(-0.3deg); }
  90% { transform: translateY(-6px) translateX(3px) rotate(0.2deg); }
}

@keyframes fc-drift-s1 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  35% { transform: translateY(-8px) rotate(0.4deg); }
  65% { transform: translateY(-4px) rotate(-0.3deg); }
  85% { transform: translateY(-10px) rotate(0.2deg); }
}

@keyframes fc-drift-s2 {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-9px) translateX(2px); }
  50% { transform: translateY(-5px) translateX(-3px); }
  75% { transform: translateY(-11px) translateX(1px); }
}

@keyframes fc-drift-s3 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  20% { transform: translateY(-7px) rotate(0.5deg); }
  50% { transform: translateY(-12px) rotate(-0.3deg); }
  80% { transform: translateY(-5px) rotate(0.4deg); }
}

/* ---- Staggered entrance animation ---- */
.anim-item {
  opacity: 0;
  transform: translateY(30px) translateX(15px);
  animation: curtain-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(0.15s * var(--i) + 0.3s);
}

@keyframes curtain-in {
  0% {
    opacity: 0;
    transform: translateY(30px) translateX(15px);
    filter: blur(4px);
  }
  60% {
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0);
    filter: blur(0);
  }
}

/* ---- Ambient Background ---- */
.hero-ambient {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 3;
}

/* Bokeh orbs */
.bokeh {
  position: absolute;
  border-radius: 50%;
  filter: blur(var(--blur));
  opacity: 0;
  animation: bokeh-drift var(--dur) ease-in-out var(--del) infinite;
}

@keyframes bokeh-drift {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.7);
  }
  15% {
    opacity: 1;
  }
  50% {
    opacity: 1;
    transform: translate(var(--dx), var(--dy)) scale(1.15);
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(calc(var(--dx) * -0.5), calc(var(--dy) * -0.5)) scale(0.8);
  }
}

/* Sparkle dots */
.sparkle {
  position: absolute;
  border-radius: 50%;
  background: white;
  opacity: 0;
  box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.3);
  animation: sparkle-pulse var(--dur) ease-in-out var(--del) infinite;
}

@keyframes sparkle-pulse {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  15% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  40% {
    opacity: 0.9;
    transform: scale(1) rotate(90deg);
  }
  60% {
    opacity: 0.9;
    transform: scale(1.2) rotate(180deg);
  }
  80% {
    opacity: 0;
    transform: scale(0) rotate(270deg);
  }
}

/* Light sweep */
.light-sweep {
  position: absolute;
  top: 0;
  left: -80%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255, 255, 255, 0.04) 45%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.04) 55%,
    transparent 70%
  );
  transform: skewX(-15deg);
  animation: sweep 7s ease-in-out 2s infinite;
}

@keyframes sweep {
  0%, 100% {
    left: -80%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    left: 130%;
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
}

/* ---- Frosted Glass Content Card ---- */
.hero-content {
  position: relative;
  z-index: 10;
  margin-left: auto;
  margin-right: 0;
  width: 45%;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-radius: 32px 0 0 32px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  animation: glass-enter 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}

@keyframes glass-enter {
  from {
    opacity: 0;
    transform: translateX(40px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.hero-content-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem;
  padding-right: max(3rem, calc((100vw - 1280px) / 2 + 2rem));
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.25rem;
  border-radius: 50px;
  border: 1.5px solid rgba(var(--primary-rgb), 0.4);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
  background: rgba(var(--primary-rgb), 0.08);
}

.hero-badge i {
  font-size: 0.75rem;
}

/* ---- Hero Title ---- */
.hero-title {
  font-family: 'Playfair Display', Georgia, serif;
  line-height: 1.1;
  perspective: 600px;
  direction: ltr;
}

.title-word {
  display: block;
  font-size: 3.8rem;
  font-weight: 900;
}

.title-blue {
  color: var(--secondary);
}

.title-dark {
  color: #0f172a;
}

.title-space {
  width: 0.3em;
}

/* ---- Letter Animation ---- */
.title-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%) rotateX(-80deg);
  transform-origin: top center;
  animation:
    letter-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards,
    letter-wave 4s ease-in-out infinite;
  animation-delay:
    calc(0.08s * var(--d) + 0.5s),
    calc(0.12s * var(--d) + 2.5s);
}

@keyframes letter-rise {
  0% {
    opacity: 0;
    transform: translateY(100%) rotateX(-80deg);
    filter: blur(6px);
  }
  40% {
    opacity: 1;
    filter: blur(0);
  }
  70% {
    transform: translateY(-8%) rotateX(5deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    filter: blur(0);
  }
}

@keyframes letter-wave {
  0%, 50%, 100% {
    transform: translateY(0) scale(1);
  }
  20% {
    transform: translateY(-14px) scale(1.08);
  }
  35% {
    transform: translateY(3px) scale(0.98);
  }
}

.hero-desc {
  font-size: 1.05rem;
  line-height: 1.85;
  color: #475569;
  font-weight: 500;
}

/* ---- Buttons ---- */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-book {
  padding: 0.7rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.35);
  transition: all 0.25s ease;
}

.btn-book:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
  box-shadow: 0 6px 24px rgba(var(--primary-rgb), 0.45);
  transform: translateY(-2px);
}

.btn-discover {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.75rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: #334155;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.25s ease;
}

.btn-discover i {
  font-size: 0.8rem;
  transition: transform 0.25s ease;
}

.btn-discover:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.04);
}

.btn-discover:hover i {
  transform: translateY(3px);
}

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .hero-content {
    width: 50%;
  }

  .hero-content-inner {
    padding: 2.5rem;
    padding-right: 2.5rem;
  }

  .title-word { font-size: 3rem; }

  .fcard-3 { left: 22%; }
  .fcard-4 { left: 20%; }
  .fcard-s3 { left: 30%; }
}

@media (max-width: 768px) {
  .hero {
    align-items: flex-end;
    padding: 0 1rem 1.25rem;
  }

  .hero-content {
    margin: 0;
    max-width: none;
    width: 100%;
    border-radius: 24px 24px 0 0;
  }

  .hero-content-inner {
    padding: 2rem 1.5rem;
    align-items: center;
    text-align: center;
  }

  .title-word { font-size: 2.2rem; }

  .hero-desc { font-size: 0.95rem; }

  .hero-actions { justify-content: center; }

  .fcard-1 { left: 1rem; top: 6.5rem; bottom: auto; }
  .fcard-2 { left: 1rem; top: 1rem; }
  .fcard-3 { left: auto; right: 1rem; top: 6.5rem; bottom: auto; }
  .fcard-4 { left: auto; right: 1rem; top: 1rem; }
  .fcard-stat { display: none; }

  .hero-overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.15) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
}

/* ========================================
   DISCOVER SECTION
   ======================================== */
.discover {
  padding: 6rem 0 5rem;
  background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
  overflow: hidden;
}

.discover-header {
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.discover-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #0f172a;
}

.discover-title span {
  color: var(--primary);
}

.discover-sub {
  color: #64748b;
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 0.6rem;
}

/* ---- Tabs ---- */
.discover-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  padding: 0 2rem;
}

.dtab {
  padding: 0.5rem 1.3rem;
  border-radius: 50px;
  border: 1.5px solid #e2e8f0;
  background: #fff;
  color: #475569;
  font-weight: 600;
  font-size: 0.88rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.dtab:hover {
  border-color: rgba(var(--primary-rgb), 0.35);
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.04);
}

.dtab.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 14px rgba(var(--primary-rgb), 0.35);
  transform: scale(1.05);
}

/* ---- Swiper Carousel ---- */
.discover-carousel {
  position: relative;
  max-width: 1280px;
  margin: 3rem auto 0;
  padding: 1rem 0 2rem;
}

.discover-carousel :deep(.swiper) {
  overflow: visible;
  padding: 1.5rem 0;
}

.discover-carousel :deep(.swiper-slide) {
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0.55;
  filter: saturate(0.6) brightness(0.9);
}

.discover-carousel :deep(.swiper-slide-active) {
  opacity: 1;
  filter: none;
}

.dcard {
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.5s ease;
}

.discover-carousel :deep(.swiper-slide-active) .dcard {
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.08);
}

.dcard img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 6s ease;
}

.discover-carousel :deep(.swiper-slide-active) .dcard img {
  transform: scale(1.06);
}

.dcard-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3.5rem 1.5rem 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.45s ease;
}

.discover-carousel :deep(.swiper-slide-active) .dcard-info {
  opacity: 1;
  transform: translateY(0);
}

.dcard-info h3 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
}

.dcard-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.2rem;
}

/* Navigation Arrows */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #334155;
  transition: all 0.3s ease;
}

.carousel-nav:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.35);
  transform: translateY(-50%) scale(1.1);
}

.nav-prev {
  right: 0;
}

.nav-next {
  left: 0;
}

/* ---- Discover Responsive ---- */
@media (max-width: 768px) {
  .discover {
    padding: 4rem 0 3rem;
  }

  .discover-title {
    font-size: 2rem;
  }

  .discover-carousel {
    margin-top: 2rem;
  }

  .dcard {
    border-radius: 18px;
  }

  .carousel-nav {
    width: 40px;
    height: 40px;
    font-size: 0.85rem;
  }

  .dtab {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
}
</style>
