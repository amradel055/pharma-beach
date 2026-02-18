import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useSettingsStore } from './settings'

export const useBookingsStore = defineStore('bookings', () => {
  const bookings = ref([])

  function init() {
    const saved = localStorage.getItem('pb_bookings')
    if (saved) {
      try {
        bookings.value = JSON.parse(saved)
      } catch {
        bookings.value = []
      }
    }
    expireStaleBookings()
  }

  function _persist() {
    localStorage.setItem('pb_bookings', JSON.stringify(bookings.value))
  }

  function createBooking({ chaletId, userId, checkIn, checkOut, nights, subtotal, deposit, total, chaletName, chaletNumber, chaletImage }) {
    const settings = useSettingsStore()
    const now = new Date()
    const expiresAt = new Date(now.getTime() + settings.pendingDurationMinutes * 60 * 1000)

    const booking = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      chaletId,
      userId,
      checkIn,
      checkOut,
      nights,
      subtotal,
      deposit,
      total,
      chaletName: chaletName || '',
      chaletNumber: chaletNumber || '',
      chaletImage: chaletImage || '',
      status: 'PENDING',
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
    }

    bookings.value.push(booking)
    _persist()
    return booking
  }

  function cancelBooking(id) {
    const booking = bookings.value.find((b) => b.id === id)
    if (booking) {
      booking.status = 'CANCELLED'
      _persist()
    }
  }

  function confirmBooking(id) {
    const booking = bookings.value.find((b) => b.id === id)
    if (booking) {
      booking.status = 'CONFIRMED'
      _persist()
    }
  }

  function expireStaleBookings() {
    const now = new Date()
    let changed = false
    for (const b of bookings.value) {
      if (b.status === 'PENDING' && new Date(b.expiresAt) <= now) {
        b.status = 'EXPIRED'
        changed = true
      }
    }
    if (changed) _persist()
  }

  function isDateBlocked(chaletId, checkIn, checkOut) {
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    start.setHours(0, 0, 0, 0)
    end.setHours(0, 0, 0, 0)

    return bookings.value.some((b) => {
      if (b.chaletId !== chaletId) return false
      if (b.status !== 'PENDING' && b.status !== 'CONFIRMED') return false
      const bStart = new Date(b.checkIn)
      const bEnd = new Date(b.checkOut)
      bStart.setHours(0, 0, 0, 0)
      bEnd.setHours(0, 0, 0, 0)
      return start < bEnd && end > bStart
    })
  }

  function getBookingById(id) {
    return bookings.value.find((b) => b.id === id) || null
  }

  function getUserBookings(userId) {
    return bookings.value.filter((b) => b.userId === userId)
  }

  function getBlockedDatesForChalet(chaletId) {
    const dates = []
    for (const b of bookings.value) {
      if (b.chaletId !== chaletId) continue
      if (b.status !== 'PENDING' && b.status !== 'CONFIRMED') continue
      const start = new Date(b.checkIn)
      const end = new Date(b.checkOut)
      start.setHours(0, 0, 0, 0)
      end.setHours(0, 0, 0, 0)
      const d = new Date(start)
      while (d < end) {
        dates.push(new Date(d))
        d.setDate(d.getDate() + 1)
      }
    }
    return dates
  }

  init()

  return {
    bookings,
    createBooking,
    cancelBooking,
    confirmBooking,
    expireStaleBookings,
    isDateBlocked,
    getBookingById,
    getUserBookings,
    getBlockedDatesForChalet,
  }
})
