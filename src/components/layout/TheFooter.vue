<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <RouterLink to="/">
          <img :src="logo" alt="Pharma Beach" class="footer-logo" />
        </RouterLink>

        <div class="social-links">
          <a href="#" aria-label="Facebook" class="social-link">
            <i class="pi pi-facebook" />
          </a>
          <a href="#" aria-label="Instagram" class="social-link">
            <i class="pi pi-instagram" />
          </a>
          <a href="#" aria-label="Twitter" class="social-link">
            <i class="pi pi-twitter" />
          </a>
          <a href="#" aria-label="WhatsApp" class="social-link">
            <i class="pi pi-whatsapp" />
          </a>
          <a href="#" aria-label="YouTube" class="social-link">
            <i class="pi pi-youtube" />
          </a>
        </div>
      </div>

      <div class="footer-links">
        <RouterLink to="/app/privacy">السياسات والخصوصية</RouterLink>
        <RouterLink to="/app/terms">الشروط والأحكام</RouterLink>
        <RouterLink to="/app/contact">تواصل معنا</RouterLink>
      </div>

      <div class="footer-bottom">
        <span>&copy; {{ year }} Pharma Beach. جميع الحقوق محفوظة.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo-dark.png'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #0f172a;
  color: #94a3b8;
  margin-top: auto;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.footer-logo {
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.9;
  transition: opacity 0.3s;
}

.footer-logo:hover {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 0.6rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: #94a3b8;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: var(--primary);
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.35);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.25s;
  position: relative;
}

.footer-links a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  right: 0;
  width: 0;
  height: 1.5px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.footer-links a:hover {
  color: #e2e8f0;
}

.footer-links a:hover::after {
  width: 100%;
}

.footer-bottom {
  width: 100%;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.82rem;
  color: #475569;
}

@media (max-width: 640px) {
  .footer-inner {
    padding: 2rem 1.25rem 1.25rem;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
