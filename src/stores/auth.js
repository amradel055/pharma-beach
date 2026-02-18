import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const returnUrl = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  // Restore session on init
  function init() {
    const saved = localStorage.getItem('pb_user')
    if (saved) {
      try {
        user.value = JSON.parse(saved)
      } catch {
        localStorage.removeItem('pb_user')
      }
    }
  }

  function _getUsers() {
    try {
      return JSON.parse(localStorage.getItem('pb_users') || '[]')
    } catch {
      return []
    }
  }

  function _saveUsers(users) {
    localStorage.setItem('pb_users', JSON.stringify(users))
  }

  function _setUser(u) {
    user.value = u
    localStorage.setItem('pb_user', JSON.stringify(u))
  }

  function login(email, password) {
    const users = _getUsers()
    const found = users.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password,
    )
    if (!found) {
      return { ok: false, error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' }
    }
    const { password: _, ...safeUser } = found
    _setUser(safeUser)
    return { ok: true }
  }

  function register({ name, email, phone, password }) {
    const users = _getUsers()
    const normalizedEmail = email.trim().toLowerCase()

    if (users.some((u) => u.email === normalizedEmail)) {
      return { ok: false, error: 'البريد الإلكتروني مسجل بالفعل' }
    }

    const newUser = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      avatar: null,
      createdAt: new Date().toISOString(),
      password,
    }

    users.push(newUser)
    _saveUsers(users)

    const { password: _, ...safeUser } = newUser
    _setUser(safeUser)
    return { ok: true }
  }

  function logout() {
    user.value = null
    localStorage.removeItem('pb_user')
  }

  // Run init immediately
  init()

  return {
    user,
    returnUrl,
    isAuthenticated,
    login,
    register,
    logout,
  }
})
