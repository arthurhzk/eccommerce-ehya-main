import { defineStore } from 'pinia'
import { ref } from 'vue'

const useLoggedStore = defineStore('logged', () => {
  const isLoggedIn = ref(false)

  const setLoggedIn = (value: boolean) => {
    isLoggedIn.value = value
  }

  return {
    isLoggedIn,
    setLoggedIn
  }
})

export default useLoggedStore
