import { defineStore } from 'pinia'
import supabase from '@/secondary/lib/supabase'
import useLoggedStore from '@/primary/infrastructure/store/logged'
import { reactive, ref } from 'vue'
import { RouteNameEnum } from '@/domain/enums/RouteEnum'
import { useRouter } from 'vue-router'
import { useToast } from '@/primary/components/ui/toast/use-toast'
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

  const { toast } = useToast()
  const credentials = ref()
  const state = reactive(initialState)
  const store = useLoggedStore()
  const accessToken = ref()
  const errorResponse = ref()
  const router = useRouter()
  const emailValue = ref('')
  const signUp = async () => {
    try {
      const response = await supabase.auth.signUp({
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
      accessToken.value = response.data.session?.access_token
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar!',
        description: 'Ocorreu um erro ao cadastrar, tente novamente!',
        variant: 'destructive'
      })
    }
  }

  const signIn = async () => {
    store.setLoggedIn(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password
    })
    if (error) {
      store.setLoggedIn(false)
      errorResponse.value = 'Senha ou email inválidos!'
      throw error
    }
  }

  const signOut = async () => {
    try {
      store.setLoggedIn(false)
      router.push({ name: RouteNameEnum.HOME })
      toast({
        title: 'Desconectado!',
        description: 'Você foi desconectado com sucesso!',
        class: 'bg-green-500 text-white'
      })
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      toast({
        title: 'Erro ao desconectar!',
        description: 'Ocorreu um erro ao desconectar, tente novamente!',
        variant: 'destructive'
      })
      store.setLoggedIn(true)
    }
  }

  const getUser = async () => {
    const response = await supabase.auth.getUser()
    if (response) {
      credentials.value = response.data.user?.user_metadata
      emailValue.value = response.data.user?.email || ''
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

  return {
    signUp,
    signIn,
    getUser,
    signOut,
    signInWithGithub,
    state,
    credentials,
    accessToken,
    errorResponse,
    emailValue
  }
})

export default useUserStore
