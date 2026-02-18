import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const pendingDurationMinutes = ref(120)
  const contactPhone = ref('201234567890')
  const contactMessage = ref(
    'مرحباً، أريد تأكيد حجز شاليه رقم {chaletNumber} من {checkIn} إلى {checkOut}. رقم الحجز: {bookingId}',
  )

  function init() {
    const saved = localStorage.getItem('pb_settings')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (data.pendingDurationMinutes) pendingDurationMinutes.value = data.pendingDurationMinutes
        if (data.contactPhone) contactPhone.value = data.contactPhone
        if (data.contactMessage) contactMessage.value = data.contactMessage
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
      }),
    )
  }

  init()

  return {
    pendingDurationMinutes,
    contactPhone,
    contactMessage,
    save,
  }
})
