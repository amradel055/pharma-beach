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

    <!-- About Section -->
    <section :class="['about', { 'in-view': aboutVisible }]" ref="aboutRef">
      <div class="about-container">
        <div class="about-text">
          <span class="about-tag">من نحن</span>
          <h2 class="about-title">نبذة عن <span>القرية</span></h2>
          <p class="about-desc">
            تقع قرية فارما بيتش ريزورت على ساحل البحر الأبيض المتوسط، وتوفر تجربة إقامة فاخرة
            تجمع بين الراحة والاستجمام. تضم القرية مجموعة من الشاليهات الحديثة المجهزة بالكامل،
            مع خدمات متميزة على مدار الساعة لضمان راحتكم.
          </p>

          <div class="about-stats">
            <div class="about-stat">
              <div class="stat-icon"><i class="pi pi-calendar" /></div>
              <div class="stat-content">
                <span class="stat-num">+10</span>
                <span class="stat-label">سنوات خبرة</span>
              </div>
            </div>
            <div class="about-stat">
              <div class="stat-icon stat-icon--blue"><i class="pi pi-building" /></div>
              <div class="stat-content">
                <span class="stat-num">+50</span>
                <span class="stat-label">شاليه فاخر</span>
              </div>
            </div>
            <div class="about-stat">
              <div class="stat-icon stat-icon--green"><i class="pi pi-users" /></div>
              <div class="stat-content">
                <span class="stat-num">+1200</span>
                <span class="stat-label">عميل سعيد</span>
              </div>
            </div>
          </div>

          <a href="#" class="about-link">
            اقرأ المزيد
            <i class="pi pi-arrow-down" />
          </a>
        </div>

        <div class="about-visual">
          <div class="about-deco" />
          <div class="about-img-main">
            <img src="https://picsum.photos/seed/pharma-resort-view/700/500" alt="فارما بيتش ريزورت" loading="lazy" />
            <button class="about-play" aria-label="تشغيل الفيديو">
              <i class="pi pi-play-fill" />
            </button>
          </div>
          <div class="about-img-float">
            <img src="https://picsum.photos/seed/pharma-pool-view/400/300" alt="المسبح" loading="lazy" />
          </div>
          <div class="about-badge">
            <span class="badge-num">+10</span>
            <span class="badge-txt">سنوات خبرة</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features: Sticky Scroll Section -->
    <section class="features" ref="featRef" :style="{ height: featuresData.length * 100 + 'vh' }">
      <div class="features-sticky">
        <!-- Full-width background image -->
        <div class="features-bg">
          <Transition name="feat-fade">
            <div class="feat-slide" :key="activeFeature">
              <img :src="featuresData[activeFeature].img" :alt="featuresData[activeFeature].title" />
            </div>
          </Transition>
          <div class="features-bg-overlay" />
        </div>

        <!-- Active feature info: centered on image -->
        <div class="feat-active-display">
          <Transition name="feat-info" mode="out-in">
            <div class="feat-active-inner" :key="activeFeature">
              <div class="feat-active-icon">
                <i :class="'pi ' + featuresData[activeFeature].icon" />
              </div>
              <h3 class="feat-active-title">{{ featuresData[activeFeature].title }}</h3>
              <p class="feat-active-desc">{{ featuresData[activeFeature].desc }}</p>
            </div>
          </Transition>
        </div>

        <!-- Steps card -->
        <div class="features-card">
          <span class="features-tag">
            <i class="pi pi-sparkles" />
            مميزاتنا
          </span>
          <h2 class="features-title">هي وجهتك <span>المثالية</span></h2>
          <p class="features-desc">كل ما تحتاجه لعطلة لا تُنسى متوفر في مكان واحد</p>
          <div class="features-list">
            <button
              v-for="(feat, i) in featuresData"
              :key="feat.id"
              :class="['feat-item', { passed: i < activeFeature, current: i === activeFeature }]"
              @click="goToFeature(i)"
            >
              <span class="feat-indicator">
                <i v-if="i <= activeFeature" class="pi pi-check" />
              </span>
              <span class="feat-item-title">{{ feat.title }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section class="location">
      <div class="location-header">
        <span class="location-tag">الموقع</span>
        <h2 class="location-title">موقعنا على <span>الخريطة</span></h2>
        <p class="location-sub">يسهل الوصول إلينا من القاهرة والإسكندرية عبر طريق الساحل الشمالي</p>
      </div>

      <div class="location-map-wrap">
        <!-- Full-width Map -->
        <div class="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217988.4511519507!2d28.5!3d31.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAzJzAwLjAiTiAyOMKwMzAnMDAuMCJF!5e0!3m2!1sar!2seg!4v1700000000000"
            width="100%"
            height="100%"
            style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        <!-- Glass info card floating over map -->
        <div class="location-card">
          <div class="location-card-head">
            <div class="location-card-icon">
              <i class="pi pi-map-marker" />
            </div>
            <div>
              <h3 class="location-card-title">فارما بيتش ريزورت</h3>
              <p class="location-card-sub">الساحل الشمالي — الكيلو 120، مصر</p>
            </div>
          </div>

          <div class="location-card-items">
            <div class="loc-item">
              <i class="pi pi-phone" />
              <span dir="ltr">+20 123 456 7890</span>
            </div>
            <div class="loc-item">
              <i class="pi pi-clock" />
              <span>24 ساعة / 7 أيام</span>
            </div>
            <div class="loc-item">
              <i class="pi pi-envelope" />
              <span dir="ltr">info@pharmabeach.com</span>
            </div>
          </div>

          <a href="https://maps.google.com" target="_blank" rel="noopener" class="map-btn">
            <i class="pi pi-directions" />
            افتح في خرائط جوجل
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section :class="['cta', { 'in-view': ctaVisible }]" ref="ctaRef">
      <div class="cta-container">
        <div class="cta-glow-wrap">
          <span class="cta-glow-ring" />
        </div>
        <div class="cta-card">
          <!-- Animated gradient overlay -->
          <div class="cta-gradient-bg" />

          <!-- Animated floating shapes -->
          <div class="cta-shapes">
            <span class="cta-shape cta-shape--1" />
            <span class="cta-shape cta-shape--2" />
            <span class="cta-shape cta-shape--3" />
            <span class="cta-shape cta-shape--4" />
            <span class="cta-shape cta-shape--5" />
          </div>

          <!-- Floating particles -->
          <div class="cta-particles">
            <span v-for="n in 12" :key="n" :class="'cta-particle cta-particle--' + n" />
          </div>

          <!-- Animated border -->
          <div class="cta-border-glow" />

          <div class="cta-inner">
            <span class="cta-badge">
              <i class="pi pi-bolt" />
              عروض لفترة محدودة
            </span>
            <h2 class="cta-title">جاهز لعطلة <span>لا تُنسى</span> ؟</h2>
            <p class="cta-desc">احجز شاليهك الآن واستمتع بأفضل العروض الحصرية على فارما بيتش ريزورت</p>
            <div class="cta-actions">
              <RouterLink to="/booking" class="cta-btn">
                <span class="cta-btn-text">احجز الآن — عروض محدودة</span>
                <i class="pi pi-arrow-left" />
              </RouterLink>
              <a href="tel:+201234567890" class="cta-phone">
                <i class="pi pi-phone" />
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
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

// ---- About Section: scroll entrance ----
const aboutRef = ref(null)
const aboutVisible = ref(false)
let aboutObserver = null

// ---- CTA Section: scroll entrance ----
const ctaRef = ref(null)
const ctaVisible = ref(false)
let ctaObserver = null

// ---- Features Section: sticky scroll ----
const featRef = ref(null)
const activeFeature = ref(0)

const featuresData = [
  { id: 1, title: 'شاطئ خاص', desc: 'شاطئ رملي ناعم بمياه كريستالية صافية مع خدمات شاطئية متكاملة', icon: 'pi-sun', img: 'https://picsum.photos/seed/pharma-feat-beach/1200/900' },
  { id: 2, title: 'مطاعم متنوعة', desc: 'مطاعم عالمية تقدم أشهى المأكولات البحرية والعالمية', icon: 'pi-star', img: 'https://picsum.photos/seed/pharma-feat-dining/1200/900' },
  { id: 3, title: 'موقف سيارات', desc: 'موقف سيارات آمن ومجهز بالكامل لجميع الزوار', icon: 'pi-car', img: 'https://picsum.photos/seed/pharma-feat-parking/1200/900' },
  { id: 4, title: 'واي فاي مجاني', desc: 'إنترنت فائق السرعة متاح في جميع أنحاء القرية', icon: 'pi-wifi', img: 'https://picsum.photos/seed/pharma-feat-wifi/1200/900' },
  { id: 5, title: 'أمن 24/7', desc: 'فريق أمن محترف يعمل على مدار الساعة لراحتكم وأمانكم', icon: 'pi-shield', img: 'https://picsum.photos/seed/pharma-feat-security/1200/900' },
  { id: 6, title: 'مناطق خضراء', desc: 'حدائق ومساحات خضراء واسعة للاسترخاء والتنزه', icon: 'pi-heart', img: 'https://picsum.photos/seed/pharma-feat-green/1200/900' },
]

function onFeatScroll() {
  if (!featRef.value) return
  const rect = featRef.value.getBoundingClientRect()
  if (rect.bottom < 0 || rect.top > window.innerHeight) return
  const scrolled = -rect.top
  const scrollable = featRef.value.offsetHeight - window.innerHeight
  if (scrollable <= 0) return
  const progress = Math.max(0, Math.min(1, scrolled / scrollable))
  activeFeature.value = Math.min(featuresData.length - 1, Math.floor(progress * featuresData.length))
}

function goToFeature(idx) {
  if (!featRef.value) return
  const top = featRef.value.offsetTop
  const scrollable = featRef.value.offsetHeight - window.innerHeight
  window.scrollTo({ top: top + ((idx + 0.3) / featuresData.length) * scrollable, behavior: 'smooth' })
}

onMounted(() => {
  startShowcase()
  aboutObserver = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { aboutVisible.value = true; aboutObserver.disconnect() } },
    { threshold: 0.15 }
  )
  if (aboutRef.value) aboutObserver.observe(aboutRef.value)
  ctaObserver = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { ctaVisible.value = true; ctaObserver.disconnect() } },
    { threshold: 0.15 }
  )
  if (ctaRef.value) ctaObserver.observe(ctaRef.value)
  window.addEventListener('scroll', onFeatScroll, { passive: true })
  featuresData.forEach(f => { const img = new Image(); img.src = f.img })
})
onUnmounted(() => {
  running = false
  aboutObserver?.disconnect()
  ctaObserver?.disconnect()
  window.removeEventListener('scroll', onFeatScroll)
})

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
  text-align: right;
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

/* ========================================
   ABOUT SECTION
   ======================================== */
.about {
  padding: 7rem 0 8rem;
  background: #fff;
  position: relative;
  overflow: hidden;
}

.about-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 5rem;
}

/* ---- Text Side ---- */
.about-text {
  flex: 1;
  min-width: 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.about.in-view .about-text {
  opacity: 1;
  transform: translateY(0);
}

.about-tag {
  display: inline-block;
  padding: 0.35rem 1.1rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.08);
  border: 1.5px solid rgba(var(--primary-rgb), 0.2);
}

.about-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 1rem;
  line-height: 1.3;
}

.about-title span {
  color: var(--primary);
}

.about-desc {
  font-size: 1.05rem;
  line-height: 1.9;
  color: #475569;
  font-weight: 500;
  margin-top: 1.25rem;
}

/* ---- Stats: Glass Cards ---- */
.about-stats {
  display: flex;
  gap: 0.75rem;
  margin-top: 2.5rem;
}

.about-stat {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.15rem;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  transition: all 0.35s ease;
}

.about-stat:hover {
  background: rgba(var(--primary-rgb), 0.04);
  border-color: rgba(var(--primary-rgb), 0.15);
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(var(--primary-rgb), 0.04));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.05rem;
  flex-shrink: 0;
}

.stat-icon--blue {
  background: linear-gradient(135deg, rgba(var(--secondary-rgb), 0.12), rgba(var(--secondary-rgb), 0.04));
  color: var(--secondary);
}

.stat-icon--green {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(34, 197, 94, 0.04));
  color: #16a34a;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.stat-num {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
}

.stat-label {
  font-size: 0.76rem;
  color: #64748b;
  font-weight: 600;
}

/* Link */
.about-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--primary);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: gap 0.3s ease;
}

.about-link:hover {
  gap: 0.85rem;
}

.about-link i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.about-link:hover i {
  transform: translateY(3px);
}

/* ---- Visual Side ---- */
.about-visual {
  flex: 1.15;
  position: relative;
  min-width: 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}

.about.in-view .about-visual {
  opacity: 1;
  transform: translateY(0);
}

/* Decorative Gradient Blob */
.about-deco {
  position: absolute;
  width: 115%;
  height: 115%;
  top: -8%;
  right: -12%;
  background: radial-gradient(
    ellipse at 55% 50%,
    rgba(var(--primary-rgb), 0.07) 0%,
    rgba(var(--secondary-rgb), 0.04) 40%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 0;
  filter: blur(30px);
}

/* Main Image */
.about-img-main {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.04);
  transform: rotate(1.5deg);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-img-main:hover {
  transform: rotate(0deg);
}

.about-img-main > img {
  width: 100%;
  display: block;
  aspect-ratio: 7 / 5;
  object-fit: cover;
  transition: transform 6s ease;
}

.about-img-main:hover > img {
  transform: scale(1.06);
}

/* Play Button — Double Ring Pulse */
.about-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  color: var(--primary);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 2;
}

.about-play::before,
.about-play::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  z-index: -1;
}

.about-play::before {
  animation: play-ring 2.5s ease-out infinite;
}

.about-play::after {
  animation: play-ring 2.5s ease-out 0.9s infinite;
}

@keyframes play-ring {
  0% { transform: scale(1); opacity: 0.7; border-width: 2px; }
  100% { transform: scale(2); opacity: 0; border-width: 0.5px; }
}

.about-play:hover {
  background: var(--primary);
  color: #fff;
  transform: translate(-50%, -50%) scale(1.12);
  box-shadow: 0 12px 40px rgba(var(--primary-rgb), 0.4);
}

/* Floating Image — Tilted */
.about-img-float {
  position: absolute;
  bottom: -2.5rem;
  left: -2.5rem;
  width: 42%;
  border-radius: 20px;
  overflow: hidden;
  border: 5px solid #fff;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.14);
  z-index: 3;
  transform: rotate(-3deg);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-img-float:hover {
  transform: rotate(0deg) scale(1.04);
}

.about-img-float img {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* Badge — Tilted Gradient */
.about-badge {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  padding: 1.1rem 1.6rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 32px rgba(var(--primary-rgb), 0.35);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  transform: rotate(4deg);
  transition: transform 0.35s ease;
}

.about-badge:hover {
  transform: rotate(0deg) scale(1.06);
}

.badge-num {
  font-size: 1.9rem;
  font-weight: 800;
  line-height: 1;
}

.badge-txt {
  font-size: 0.78rem;
  font-weight: 600;
  opacity: 0.9;
}

/* ---- About Responsive ---- */
@media (max-width: 1024px) {
  .about-container {
    gap: 3rem;
  }

  .about-title {
    font-size: 2.1rem;
  }

  .about-stats {
    flex-wrap: wrap;
  }

  .about-img-float {
    left: -1rem;
    width: 38%;
  }

  .about-badge {
    right: -0.5rem;
    top: -1rem;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 0 5rem;
  }

  .about-container {
    flex-direction: column;
    gap: 3rem;
  }

  .about-text {
    text-align: center;
  }

  .about-title {
    font-size: 2rem;
  }

  .about-stats {
    justify-content: center;
  }

  .about-link {
    justify-content: center;
  }

  .about-visual {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .about-img-main {
    transform: rotate(0deg);
  }

  .about-img-float {
    bottom: -1.5rem;
    left: -0.5rem;
    width: 38%;
    border-width: 4px;
    transform: rotate(-2deg);
  }

  .about-badge {
    right: -0.5rem;
    top: -0.75rem;
    padding: 0.8rem 1.2rem;
    transform: rotate(3deg);
  }

  .badge-num {
    font-size: 1.4rem;
  }

  .about-play {
    width: 56px;
    height: 56px;
    font-size: 1rem;
  }

  .about-stat {
    padding: 0.7rem 0.9rem;
  }

  .stat-icon {
    width: 38px;
    height: 38px;
    font-size: 0.9rem;
  }

  .stat-num {
    font-size: 1.15rem;
  }
}

/* ========================================
   FEATURES SECTION (Sticky Scroll)
   ======================================== */
.features {
  position: relative;
}

.features-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

/* ---- Full-Width Background Image ---- */
.features-bg {
  position: absolute;
  inset: 0;
}

.features-bg .feat-slide {
  position: absolute;
  inset: 0;
  will-change: opacity, transform;
}

.features-bg .feat-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.features-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.3) 35%,
    rgba(0, 0, 0, 0.12) 100%
  );
  z-index: 1;
}

/* ---- Active Feature Display: centered on image ---- */
.feat-active-display {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  text-align: center;
  pointer-events: none;
}

.feat-active-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.feat-active-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.feat-active-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.3);
}

.feat-active-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  line-height: 1.7;
  margin: 0;
  max-width: 420px;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}

/* Active feature transition */
.feat-info-enter-active {
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.feat-info-leave-active {
  transition: all 0.3s ease;
}

.feat-info-enter-from {
  opacity: 0;
  transform: translateY(14px);
}

.feat-info-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ---- Steps Card: glass, on the right ---- */
.features-card {
  position: absolute;
  top: 50%;
  right: max(2rem, calc((100vw - 1280px) / 2 + 2rem));
  transform: translateY(-50%);
  z-index: 10;
  width: 320px;
  max-width: calc(100% - 4rem);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  padding: 1.5rem 1.5rem 1.75rem;
}

.features-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 1rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.08);
  border: 1.5px solid rgba(var(--primary-rgb), 0.18);
  width: fit-content;
}

.features-tag i {
  font-size: 0.65rem;
}

.features-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 0.65rem;
  line-height: 1.35;
}

.features-title span {
  color: var(--primary);
}

.features-desc {
  font-size: 0.82rem;
  line-height: 1.65;
  color: #64748b;
  font-weight: 500;
  margin-top: 0.3rem;
}

/* ---- Feature Steps ---- */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 1rem;
}

.feat-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.45rem 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 0.9rem;
  color: #b0b8c4;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;
  text-align: right;
}

.feat-item:hover {
  color: #64748b;
}

.feat-item.passed {
  color: #475569;
}

.feat-item.current {
  color: #0f172a;
}

.feat-indicator {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 0.55rem;
  color: transparent;
}

.feat-item.passed .feat-indicator {
  background: var(--secondary);
  border-color: var(--secondary);
  color: #fff;
  box-shadow: 0 2px 8px rgba(var(--secondary-rgb), 0.3);
}

.feat-item.current .feat-indicator {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-color: var(--primary);
  color: #fff;
  box-shadow:
    0 0 0 3px rgba(var(--primary-rgb), 0.12),
    0 3px 12px rgba(var(--primary-rgb), 0.3);
  transform: scale(1.1);
}

.feat-item-title {
  font-weight: inherit;
  transition: all 0.3s ease;
}

.feat-item.current .feat-item-title {
  font-weight: 700;
}

/* ---- Image Crossfade Transition ---- */
.feat-fade-enter-active {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.feat-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.feat-fade-enter-from {
  opacity: 0;
  transform: scale(1.08);
}

.feat-fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

/* ---- Features Responsive ---- */
@media (max-width: 1024px) {
  .features-card {
    width: 290px;
    padding: 1.25rem;
  }

  .feat-active-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .features-sticky {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .features-bg-overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  .feat-active-display {
    top: 30%;
  }

  .feat-active-title {
    font-size: 1.3rem;
  }

  .feat-active-desc {
    font-size: 0.85rem;
    max-width: 300px;
  }

  .features-card {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    width: calc(100% - 2rem);
    max-width: none;
    margin: auto 1rem 1.5rem;
    align-self: flex-end;
    padding: 1.25rem;
    border-radius: 18px;
  }

  .feat-item {
    font-size: 0.85rem;
  }
}

/* ========================================
   LOCATION SECTION
   ======================================== */
.location {
  padding: 6rem 0 0;
  background: #fff;
  position: relative;
}

.location-header {
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.location-tag {
  display: inline-block;
  padding: 0.35rem 1.1rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.08);
  border: 1.5px solid rgba(var(--primary-rgb), 0.2);
}

.location-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 0.75rem;
  line-height: 1.35;
}

.location-title span {
  color: var(--primary);
}

.location-sub {
  color: #64748b;
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 0.6rem;
}

/* ---- Map Wrapper (full-width with glass card overlay) ---- */
.location-map-wrap {
  position: relative;
  margin-top: 3rem;
  height: 520px;
}

.location-map {
  position: absolute;
  inset: 0;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
}

.location-map iframe {
  display: block;
  width: 100%;
  height: 100%;
}

/* ---- Floating Glass Card ---- */
.location-card {
  position: absolute;
  top: 2rem;
  right: max(2rem, calc((100vw - 1280px) / 2 + 2rem));
  z-index: 10;
  width: 360px;
  max-width: calc(100% - 4rem);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Card header: icon + title */
.location-card-head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.location-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.15rem;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(var(--primary-rgb), 0.3);
}

.location-card-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.location-card-sub {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
  margin: 0.1rem 0 0;
  line-height: 1.4;
}

/* Contact items */
.location-card-items {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.loc-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.85rem;
  color: #334155;
  font-weight: 500;
}

.loc-item i {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #64748b;
  flex-shrink: 0;
}

/* Map Button */
.map-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.3);
  transition: all 0.3s ease;
}

.map-btn:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
  box-shadow: 0 6px 24px rgba(var(--primary-rgb), 0.4);
  transform: translateY(-2px);
}

.map-btn i {
  font-size: 0.85rem;
}

/* ---- Location Responsive ---- */
@media (max-width: 1024px) {
  .location-card {
    width: 320px;
  }

  .location-title {
    font-size: 2.1rem;
  }
}

@media (max-width: 768px) {
  .location {
    padding: 4rem 0 0;
  }

  .location-map-wrap {
    height: auto;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
  }

  .location-map {
    position: relative;
    height: 300px;
    border-radius: 0;
  }

  .location-card {
    position: relative;
    top: auto;
    right: auto;
    width: calc(100% - 2rem);
    max-width: none;
    margin: -2rem auto 0;
    border-radius: 18px;
    z-index: 10;
  }

  .location-title {
    font-size: 2rem;
  }
}

/* ========================================
   CTA SECTION
   ======================================== */
.cta {
  padding: 6rem 0;
  background: #fff;
}

.cta-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}

/* Pulsing glow ring behind the card */
.cta-glow-wrap {
  position: absolute;
  inset: -20px;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 1.2s ease 0.3s;
}

.cta.in-view .cta-glow-wrap {
  opacity: 1;
}

.cta-glow-ring {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: linear-gradient(135deg, rgba(var(--secondary-rgb), 0.2), rgba(var(--primary-rgb), 0.15), rgba(var(--secondary-rgb), 0.2));
  filter: blur(30px);
  animation: cta-glow-pulse 4s ease-in-out infinite;
}

@keyframes cta-glow-pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
}

/* Card — entrance animation */
.cta-card {
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, var(--secondary) 0%, #0077b6 50%, #023e8a 100%);
  border-radius: 32px;
  padding: 5rem 3rem;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px) scale(0.97);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta.in-view .cta-card {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Animated gradient overlay that shifts */
.cta-gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(var(--primary-rgb), 0.08) 0%,
    transparent 40%,
    rgba(255, 255, 255, 0.05) 60%,
    rgba(var(--primary-rgb), 0.06) 100%
  );
  background-size: 200% 200%;
  animation: cta-gradient-shift 6s ease-in-out infinite;
  pointer-events: none;
  border-radius: 32px;
}

@keyframes cta-gradient-shift {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}

/* Animated border glow */
.cta-border-glow {
  position: absolute;
  inset: 0;
  border-radius: 32px;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: opacity 1s ease 0.5s;
}

.cta.in-view .cta-border-glow {
  opacity: 1;
}

.cta-border-glow::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 32px;
  padding: 1.5px;
  background: linear-gradient(
    var(--cta-border-angle, 0deg),
    rgba(255, 255, 255, 0.3),
    transparent 40%,
    transparent 60%,
    rgba(var(--primary-rgb), 0.4)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: cta-border-rotate 5s linear infinite;
}

@keyframes cta-border-rotate {
  to { --cta-border-angle: 360deg; }
}

@property --cta-border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

/* Animated floating shapes */
.cta-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 32px;
}

.cta-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 1s ease;
}

.cta.in-view .cta-shape {
  opacity: 1;
}

.cta-shape--1 {
  width: 300px;
  height: 300px;
  top: -80px;
  right: -60px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
  animation: cta-float-1 8s ease-in-out infinite;
}

.cta-shape--2 {
  width: 200px;
  height: 200px;
  bottom: -40px;
  left: 5%;
  background: radial-gradient(circle, rgba(var(--primary-rgb), 0.18) 0%, transparent 70%);
  animation: cta-float-2 10s ease-in-out infinite;
}

.cta-shape--3 {
  width: 120px;
  height: 120px;
  top: 20%;
  left: 15%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: cta-float-3 7s ease-in-out infinite;
}

.cta-shape--4 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 20%;
  background: radial-gradient(circle, rgba(var(--primary-rgb), 0.14) 0%, transparent 70%);
  animation: cta-float-4 9s ease-in-out infinite;
}

.cta-shape--5 {
  width: 160px;
  height: 160px;
  top: 10%;
  left: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 70%);
  animation: cta-float-5 12s ease-in-out infinite;
}

@keyframes cta-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 20px) scale(1.1); }
  66% { transform: translate(15px, -10px) scale(1.05); }
}

@keyframes cta-float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(25px, -30px) scale(1.15); }
  66% { transform: translate(-10px, 15px) scale(0.95); }
}

@keyframes cta-float-3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(15px, 15px) rotate(45deg); }
}

@keyframes cta-float-4 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, -15px) scale(1.3); }
}

@keyframes cta-float-5 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-20px, 25px) rotate(60deg); }
}

/* Floating particles */
.cta-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 32px;
}

.cta-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
}

.cta.in-view .cta-particle {
  animation: cta-particle-rise linear infinite;
}

.cta-particle--1  { left: 8%;  bottom: -5%; animation-duration: 6s;  animation-delay: 0s;   }
.cta-particle--2  { left: 15%; bottom: -5%; animation-duration: 8s;  animation-delay: 1s;   width: 2px; height: 2px; }
.cta-particle--3  { left: 25%; bottom: -5%; animation-duration: 7s;  animation-delay: 0.5s; }
.cta-particle--4  { left: 35%; bottom: -5%; animation-duration: 9s;  animation-delay: 2s;   width: 4px; height: 4px; background: rgba(var(--primary-rgb), 0.4); }
.cta-particle--5  { left: 45%; bottom: -5%; animation-duration: 6.5s; animation-delay: 0.8s; }
.cta-particle--6  { left: 55%; bottom: -5%; animation-duration: 8.5s; animation-delay: 1.5s; width: 2px; height: 2px; }
.cta-particle--7  { left: 65%; bottom: -5%; animation-duration: 7.5s; animation-delay: 0.3s; }
.cta-particle--8  { left: 72%; bottom: -5%; animation-duration: 10s; animation-delay: 2.5s; width: 4px; height: 4px; background: rgba(var(--primary-rgb), 0.35); }
.cta-particle--9  { left: 80%; bottom: -5%; animation-duration: 6.8s; animation-delay: 1.2s; }
.cta-particle--10 { left: 88%; bottom: -5%; animation-duration: 9.5s; animation-delay: 0.7s; width: 2px; height: 2px; }
.cta-particle--11 { left: 20%; bottom: -5%; animation-duration: 11s; animation-delay: 3s;   width: 2px; height: 2px; background: rgba(var(--primary-rgb), 0.3); }
.cta-particle--12 { left: 50%; bottom: -5%; animation-duration: 7.2s; animation-delay: 1.8s; }

@keyframes cta-particle-rise {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 0.6; }
  50% { opacity: 0.4; }
  90% { opacity: 0; }
  100% { transform: translateY(-500px) translateX(20px); opacity: 0; }
}

/* Inner content */
.cta-inner {
  position: relative;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

/* Scroll entrance — staggered slide-up */
.cta-badge,
.cta-title,
.cta-desc,
.cta-actions {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta.in-view .cta-badge {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}

.cta.in-view .cta-title {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.5s;
}

.cta.in-view .cta-desc {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.7s;
}

.cta.in-view .cta-actions {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.9s;
}

/* Badge — with pulse animation */
.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1.3rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  animation: cta-badge-pulse 3s ease-in-out infinite;
}

@keyframes cta-badge-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.15); }
  50% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
}

.cta-badge i {
  font-size: 0.75rem;
  color: var(--primary);
  animation: cta-bolt-flash 2s ease-in-out infinite;
}

@keyframes cta-bolt-flash {
  0%, 70%, 100% { opacity: 1; }
  80% { opacity: 0.3; }
  90% { opacity: 1; }
}

/* Title */
.cta-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.35;
}

.cta-title span {
  background: linear-gradient(135deg, var(--primary), #fbbf24, var(--primary));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: cta-text-shimmer 4s ease-in-out infinite;
}

@keyframes cta-text-shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Description */
.cta-desc {
  font-size: 1.08rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  line-height: 1.8;
  max-width: 520px;
}

/* Actions */
.cta-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* CTA Button — with shine, glow pulse, and arrow bounce */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: 0 6px 28px rgba(var(--primary-rgb), 0.45);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: cta-btn-glow 3s ease-in-out infinite;
}

@keyframes cta-btn-glow {
  0%, 100% { box-shadow: 0 6px 28px rgba(var(--primary-rgb), 0.45); }
  50% { box-shadow: 0 6px 40px rgba(var(--primary-rgb), 0.65), 0 0 60px rgba(var(--primary-rgb), 0.15); }
}

.cta-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-btn:hover::before {
  opacity: 1;
}

.cta-btn::after {
  content: '';
  position: absolute;
  top: 0;
  right: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: cta-shine 3s ease-in-out infinite;
}

@keyframes cta-shine {
  0%, 60%, 100% { right: -100%; }
  30% { right: 120%; }
}

.cta-btn:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
  box-shadow: 0 8px 40px rgba(var(--primary-rgb), 0.6);
  transform: translateY(-3px) scale(1.03);
  animation: none;
}

.cta-btn:hover::after {
  animation: none;
  opacity: 0;
}

.cta-btn-text {
  position: relative;
  z-index: 1;
}

.cta-btn i {
  font-size: 0.85rem;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
  animation: cta-arrow-nudge 2s ease-in-out infinite;
}

@keyframes cta-arrow-nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-4px); }
}

.cta-btn:hover i {
  animation: none;
  transform: translateX(-6px);
}

/* Phone link — with ring animation */
.cta-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.cta-phone::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-phone:hover::after {
  opacity: 1;
}

.cta-phone:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.cta-phone i {
  font-size: 0.9rem;
  animation: cta-phone-ring 3s ease-in-out infinite;
}

@keyframes cta-phone-ring {
  0%, 100% { transform: rotate(0deg); }
  5% { transform: rotate(15deg); }
  10% { transform: rotate(-15deg); }
  15% { transform: rotate(12deg); }
  20% { transform: rotate(-8deg); }
  25% { transform: rotate(0deg); }
}

@media (max-width: 768px) {
  .cta {
    padding: 4rem 0;
  }

  .cta-card {
    padding: 3.5rem 1.5rem;
    border-radius: 24px;
  }

  .cta-gradient-bg,
  .cta-shapes,
  .cta-particles,
  .cta-border-glow {
    border-radius: 24px;
  }

  .cta-glow-ring {
    border-radius: 32px;
  }

  .cta-title {
    font-size: 1.9rem;
  }

  .cta-desc {
    font-size: 0.95rem;
  }

  .cta-btn {
    padding: 0.85rem 2rem;
    font-size: 0.92rem;
  }

  .cta-phone {
    padding: 0.85rem 1.5rem;
    font-size: 0.88rem;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .cta-btn,
  .cta-phone {
    width: 100%;
    justify-content: center;
  }

  .cta-particle {
    display: none;
  }
}
</style>
