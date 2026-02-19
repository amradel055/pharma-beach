<template>
  <div class="auth-split">
    <!-- Photo side -->
    <div class="auth-photo">
      <div class="photo-bg" />
      <div class="photo-overlay" />
      <div class="photo-content">
        <RouterLink to="/" class="photo-logo anim-item" style="--i: 0">
          <img :src="logo" alt="Pharma Beach" />
        </RouterLink>
        <h2 class="anim-item" style="--i: 1">إعادة تعيين كلمة المرور</h2>
        <p class="anim-item" style="--i: 2">اختر كلمة مرور جديدة وقوية لحماية حسابك</p>
      </div>
    </div>

    <!-- Form side -->
    <div class="auth-form-side">
      <div class="auth-form-container">
        <!-- Mobile logo -->
        <RouterLink to="/" class="mobile-logo">
          <img :src="logo" alt="Pharma Beach" />
        </RouterLink>

        <!-- Token invalid / expired -->
        <template v-if="tokenError">
          <h1 class="anim-item" style="--i: 0">رابط غير صالح</h1>

          <div class="auth-error anim-item" style="--i: 1">
            <i class="pi pi-exclamation-circle" />
            {{ tokenError }}
          </div>

          <p class="switch-link anim-item" style="--i: 2">
            <RouterLink to="/forgot-password">
              <i class="pi pi-refresh" />
              طلب رابط جديد
            </RouterLink>
          </p>
        </template>

        <!-- Reset form -->
        <template v-else-if="tokenValid">
          <h1 class="anim-item" style="--i: 0">كلمة مرور جديدة</h1>
          <p class="auth-subtitle anim-item" style="--i: 1">أدخل كلمة المرور الجديدة لحسابك</p>

          <!-- Error message -->
          <Transition name="fade-msg">
            <div v-if="errorMsg" class="auth-error">
              <i class="pi pi-exclamation-circle" />
              {{ errorMsg }}
            </div>
          </Transition>

          <form @submit.prevent="handleReset" novalidate>
            <!-- New password -->
            <div class="field anim-item" style="--i: 2">
              <label for="password">كلمة المرور الجديدة</label>
              <div :class="['input-wrap', { error: touched.password && !isPasswordValid, focus: focused === 'password' }]">
                <i class="pi pi-lock" />
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPass ? 'text' : 'password'"
                  placeholder="6 أحرف على الأقل"
                  autocomplete="new-password"
                  @focus="focused = 'password'"
                  @blur="focused = null; touched.password = true"
                />
                <button type="button" class="toggle-pass" @click="showPass = !showPass" tabindex="-1">
                  <i :class="showPass ? 'pi pi-eye-slash' : 'pi pi-eye'" />
                </button>
              </div>
              <Transition name="fade-msg">
                <span v-if="touched.password && !isPasswordValid" class="field-error">كلمة المرور يجب أن تكون 6 أحرف على الأقل</span>
              </Transition>
            </div>

            <!-- Confirm password -->
            <div class="field anim-item" style="--i: 3">
              <label for="confirm">تأكيد كلمة المرور</label>
              <div :class="['input-wrap', { error: touched.confirm && !isConfirmValid, focus: focused === 'confirm' }]">
                <i class="pi pi-lock" />
                <input
                  id="confirm"
                  v-model="form.confirm"
                  :type="showConfirm ? 'text' : 'password'"
                  placeholder="أعد كتابة كلمة المرور"
                  autocomplete="new-password"
                  @focus="focused = 'confirm'"
                  @blur="focused = null; touched.confirm = true"
                />
                <button type="button" class="toggle-pass" @click="showConfirm = !showConfirm" tabindex="-1">
                  <i :class="showConfirm ? 'pi pi-eye-slash' : 'pi pi-eye'" />
                </button>
              </div>
              <Transition name="fade-msg">
                <span v-if="touched.confirm && !isConfirmValid" class="field-error">كلمتا المرور غير متطابقتين</span>
              </Transition>
            </div>

            <!-- Submit -->
            <button type="submit" class="auth-btn anim-item" style="--i: 4" :disabled="!isFormValid || loading">
              <i v-if="loading" class="pi pi-spin pi-spinner" />
              <template v-else>
                <i class="pi pi-check" />
                حفظ كلمة المرور
              </template>
            </button>
          </form>
        </template>

        <!-- Loading state -->
        <template v-else>
          <div class="loading-state">
            <i class="pi pi-spin pi-spinner" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useToastStore } from '@/stores/toast'
import logo from '@/assets/images/logo.jpeg'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
const toast = useToastStore()

const tokenValid = ref(false)
const tokenError = ref('')
const errorMsg = ref('')
const loading = ref(false)
const focused = ref(null)
const showPass = ref(false)
const showConfirm = ref(false)

const form = reactive({
  password: '',
  confirm: '',
})

const touched = reactive({ password: false, confirm: false })

const isPasswordValid = computed(() => form.password.length >= 6)
const isConfirmValid = computed(() => form.confirm.length > 0 && form.confirm === form.password)
const isFormValid = computed(() => isPasswordValid.value && isConfirmValid.value)

onMounted(() => {
  const token = route.query.token
  if (!token) {
    tokenError.value = 'الرابط غير صالح أو منتهي'
    return
  }

  const result = auth.validateResetToken(token)
  if (result.ok) {
    tokenValid.value = true
  } else {
    tokenError.value = result.error
  }
})

function handleReset() {
  if (!isFormValid.value) return
  loading.value = true
  errorMsg.value = ''

  setTimeout(() => {
    const token = route.query.token
    const result = auth.resetPassword(token, form.password)
    loading.value = false

    if (result.ok) {
      toast.success('تم تغيير كلمة المرور بنجاح')
      router.push('/login')
    } else {
      errorMsg.value = result.error
    }
  }, 400)
}
</script>

<style scoped>
/* ═══════════════════════════════════
   SPLIT LAYOUT
   ═══════════════════════════════════ */
.auth-split {
  display: flex;
  min-height: 100vh;
  direction: rtl;
}

/* ═══════════════════════════════════
   PHOTO SIDE
   ═══════════════════════════════════ */
.auth-photo {
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: 3rem;
  overflow: hidden;
}

.photo-bg {
  position: absolute;
  inset: 0;
  background: url('@/assets/images/hero-bg.jpg') center/cover no-repeat;
  animation: kenBurns 25s ease-in-out infinite alternate;
}

@keyframes kenBurns {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.1) translate(-2%, -1%); }
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0.3) 0%,
    rgba(15, 23, 42, 0.5) 50%,
    rgba(15, 23, 42, 0.85) 100%
  );
  z-index: 1;
}

.photo-content {
  position: relative;
  z-index: 2;
  max-width: 440px;
}

.photo-logo {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.photo-logo img {
  height: 56px;
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25); }
  50% { transform: translateY(-6px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }
}

.photo-content h2 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.photo-content p {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
}

/* ═══════════════════════════════════
   FORM SIDE
   ═══════════════════════════════════ */
.auth-form-side {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  background: #fff;
  max-width: 580px;
}

.auth-form-container {
  width: 100%;
  max-width: 400px;
}

/* ═══════════════════════════════════
   STAGGER ANIMATIONS
   ═══════════════════════════════════ */
.anim-item {
  opacity: 0;
  animation: staggerIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: calc(var(--i, 0) * 100ms + 200ms);
}

@keyframes staggerIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Mobile logo ── */
.mobile-logo {
  display: none;
}

/* ── Typography ── */
.auth-form-container h1 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.3rem;
}

.auth-subtitle {
  font-size: 0.88rem;
  color: #64748b;
  margin-bottom: 2rem;
}

/* ═══════════════════════════════════
   FORM FIELDS
   ═══════════════════════════════════ */
.field {
  margin-bottom: 1.25rem;
}

.field label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 0.45rem;
}

.input-wrap {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0 1rem;
  height: 50px;
  border-radius: 12px;
  border: 1.5px solid #e2e8f0;
  background: #f8fafc;
  transition: all 0.25s ease;
}

.input-wrap.focus {
  border-color: var(--primary, #f97316);
  background: #fff;
  box-shadow: 0 0 0 3.5px rgba(249, 115, 22, 0.1);
}

.input-wrap.error {
  border-color: #fca5a5;
  background: #fef2f2;
}

.input-wrap i {
  font-size: 0.92rem;
  color: #94a3b8;
  flex-shrink: 0;
  transition: color 0.25s;
}

.input-wrap.focus i {
  color: var(--primary, #f97316);
}

.input-wrap input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  font-family: 'Cairo', sans-serif;
  color: #0f172a;
  height: 100%;
}

.input-wrap input::placeholder {
  color: #cbd5e1;
}

.toggle-pass {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #94a3b8;
  font-size: 0.92rem;
  transition: color 0.2s;
}

.toggle-pass:hover {
  color: #64748b;
}

.field-error {
  display: block;
  font-size: 0.72rem;
  color: #ef4444;
  margin-top: 0.35rem;
  font-weight: 600;
}

/* ═══════════════════════════════════
   ERROR MESSAGE
   ═══════════════════════════════════ */
.auth-error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  background: #fef2f2;
  color: #dc2626;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  border: 1px solid #fecaca;
}

/* ═══════════════════════════════════
   LOADING STATE
   ═══════════════════════════════════ */
.loading-state {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  font-size: 1.5rem;
  color: #94a3b8;
}

/* ═══════════════════════════════════
   SUBMIT BUTTON
   ═══════════════════════════════════ */
.auth-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, var(--primary, #f97316), var(--primary-dark, #ea580c));
  color: #fff;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.3);
}

.auth-btn:hover:not(:disabled) {
  box-shadow: 0 6px 24px rgba(249, 115, 22, 0.4);
  transform: translateY(-2px);
}

.auth-btn:active:not(:disabled) {
  transform: translateY(0);
}

.auth-btn:disabled {
  background: #e2e8f0;
  color: #94a3b8;
  box-shadow: none;
  cursor: not-allowed;
}

/* ═══════════════════════════════════
   SWITCH LINK
   ═══════════════════════════════════ */
.switch-link {
  text-align: center;
  font-size: 0.84rem;
  color: #64748b;
  margin-top: 2rem;
}

.switch-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--primary, #f97316);
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}

.switch-link a:hover {
  color: var(--primary-dark, #ea580c);
  text-decoration: underline;
}

/* ═══════════════════════════════════
   TRANSITIONS
   ═══════════════════════════════════ */
.fade-msg-enter-active,
.fade-msg-leave-active {
  transition: all 0.3s ease;
}

.fade-msg-enter-from,
.fade-msg-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ═══════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════ */
@media (max-width: 900px) {
  .auth-photo {
    display: none;
  }

  .auth-form-side {
    max-width: 100%;
    padding: 2rem 1.5rem;
  }

  .mobile-logo {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .mobile-logo img {
    height: 60px;
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    animation: logoFloat 3s ease-in-out infinite;
  }

  .auth-form-container h1 {
    text-align: center;
  }

  .auth-subtitle {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .auth-form-side {
    padding: 1.5rem 1.25rem;
  }

  .auth-form-container h1 {
    font-size: 1.4rem;
  }
}
</style>
