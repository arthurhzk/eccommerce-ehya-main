import { defineStore } from 'pinia'
import supabase from '@/secondary/lib/supabase'
import useLoading from '@/primary/infrastructure/composables/useLoading'
import { reactive } from 'vue'
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

  const state = reactive(initialState)
  const { setLoading } = useLoading()
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
    await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password
    })
  }

  const signOut = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Erro ao desconectar!', error)
    } finally {
      setLoading(false)
    }
  }

  const getUser = async () => {
    await supabase.auth.getUser()
  }

  return { signUp, signIn, getUser, signOut, state }
})

export default useUserStore
