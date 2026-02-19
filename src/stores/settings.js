import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const pendingDurationMinutes = ref(120)
  const contactPhone = ref('201234567890')
  const contactMessage = ref(
    'مرحباً، أريد تأكيد حجز شاليه رقم {chaletNumber} من {checkIn} إلى {checkOut}. رقم الحجز: {bookingId}',
  )
  const entryInstructions = ref(
    '1. يُرجى إبراز هذا التصريح عند بوابة الدخول\n2. التصريح صالح فقط خلال المدة المحددة\n3. يُمنع دخول الحيوانات الأليفة\n4. يُرجى الحفاظ على نظافة المكان\n5. الالتزام بأوقات الهدوء بعد الساعة 11 مساءً',
  )

  function init() {
    const saved = localStorage.getItem('pb_settings')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (data.pendingDurationMinutes) pendingDurationMinutes.value = data.pendingDurationMinutes
        if (data.contactPhone) contactPhone.value = data.contactPhone
        if (data.contactMessage) contactMessage.value = data.contactMessage
        if (data.entryInstructions) entryInstructions.value = data.entryInstructions
      } catch {
        /* ignore */
      }
    }
  }

  function save() {
    localStorage.setItem(
      'pb_settings',
      JSON.stringify({
        pendingDurationMinutes: pendingDurationMinutes.value,
        contactPhone: contactPhone.value,
        contactMessage: contactMessage.value,
        entryInstructions: entryInstructions.value,
      }),
    )
  }

  init()

  return {
    pendingDurationMinutes,
    contactPhone,
    contactMessage,
    entryInstructions,
    save,
  }
})
