import { defineStore } from 'pinia'
import supabase from '@/secondary/lib/supabase'
import useLoggedStore from '@/primary/infrastructure/store/logged'
import { reactive, ref } from 'vue'
const useUserStore = defineStore('user', () => {
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    city: '',
    state: ''
  }
  const credentials = ref()
  const state = reactive(initialState)
  const store = useLoggedStore()
  const signUp = async () => {
    await supabase.auth.signUp({
      email: state.email,
      password: state.password,
      options: {
        data: {
          name: state.first_name,
          last_name: state.last_name,
          city: state.city,
          state: state.state
        }
      }
    })
  }

  const signIn = async () => {
    store.setLoggedIn(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password
    })
    if (error) {
      store.setLoggedIn(false)
      throw error
    }
  }

  const signOut = async () => {
    try {
      store.setLoggedIn(false)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Erro ao desconectar!', error)
      store.setLoggedIn(true)
    }
  }

  const getUser = async () => {
    const response = await supabase.auth.getUser()
    if (response) {
      credentials.value = response.data.user?.user_metadata
    }
  }

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    if (error) {
      throw error
    }
  }

  return { signUp, signIn, getUser, signOut, signInWithGithub, state, credentials }
})

export default useUserStore
