<!-- eslint-disable vue/require-v-for-key -->
<template>
  <SideContainer class="lg:w-1/2 lg:mx-auto">
    <Card>
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> Faça o seu registro </CardTitle>
        <CardDescription> Digite o seu email para continuar </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <GithubIcon class="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
              <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
            Google
          </Button>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">Ou continuar como</span>
          </div>
        </div>
        <form class="space-y-2" @submit="onSubmit">
          <div class="grid gap-2">
            <Label for="text">Nome</Label>
            <Input v-model:modelValue="store.state.first_name" id="first_name" type="text" />
            <div vif="errors?.email" class="text-red-600">
              <span v-for="error in errors?.first_name?._errors">{{ error }}</span>
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="text">Sobrenome</Label>
            <Input v-model:modelValue="store.state.last_name" id="last_name" type="text" />
            <div vif="errors?.email" class="text-red-600">
              <span v-for="error in errors?.last_name?._errors">{{ error }}</span>
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input v-model:modelValue="store.state.email" id="email" type="email" />
            <div vif="errors?.email" class="text-red-600">
              <span v-for="error in errors?.email?._errors">{{ error }}</span>
            </div>
          </div>

          <div class="grid gap-2">
            <Label for="password">Senha</Label>
            <Input v-model:modelValue="store.state.password" id="password" type="password" />
            <div vif="errors?.email" class="text-red-600">
              <span v-for="error in errors?.password?._errors">{{ error }}</span>
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="confirm_password">Confirme a sua Senha</Label>
            <Input
              v-model:modelValue="store.state.confirm_password"
              id="confirm_password"
              type="password"
            />
            <div class="text-red-600">
              <span v-if="store.state.password !== store.state.confirm_password">
                As senhas não coincidem.
              </span>
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="city">Estado:</Label>
            <select
              class="border rounded-md p-2"
              v-model="store.state.state"
              @change="handleStateChange"
            >
              <option class="mx-4" v-for="(state, index) in uf" :key="index" :value="state">
                {{ state }}
              </option>
            </select>
          </div>
          <div class="grid gap-2">
            <Label for="city">Cidade:</Label>
            <select v-model="store.state.city" class="border rounded-md p-2">
              <option v-for="city in alphabeticalCityOrder" :key="city.id" :value="city.nome">
                {{ city.nome }}
              </option>
            </select>
          </div>
          <Button @click="onSubmit" class="w-full">Registrar</Button>
        </form>
      </CardContent>
      <CardFooter> </CardFooter>
    </Card>
  </SideContainer>
</template>

<script setup lang="ts">
import SideContainer from '../components/container/SideContainer.vue'
import { GithubIcon } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/primary/components/ui/card'
import Input from '@/primary/components/ui/input/Input.vue'
import Label from '@/primary/components/ui/label/Label.vue'
import Button from '@/primary/components/ui/button/Button.vue'
import uf from '@/domain/data/uf'
import { z } from 'zod'
import { ref, computed } from 'vue'
import useUserStore from '@/primary/infrastructure/store/user'
import { fetchCitiesByState } from '@/secondary/services/ibgeDataProvider'
import { useToast } from '@/primary/components/ui/toast/use-toast'
const { toast } = useToast()
const schema = z
  .object({
    first_name: z.string().min(2, 'Nome é obrigatório.'),
    last_name: z.string().min(2, 'Sobrenome é obrigatório.'),
    email: z.string().email('Email inválido.'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres.'),
    confirm_password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres.'),
    isVerified: z.boolean().optional()
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ['confirm']
  })

const store = useUserStore()

type formSchemaType = z.infer<typeof schema>

const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null)

const callApi = async () => {
  try {
    const citiesData = await fetchCitiesByState(store.state.state)
    cities.value = citiesData
  } catch (error) {
    console.error('Error fetching cities:', error)
  }
}

const cities = ref<City[] | null>(null)
const handleStateChange = () => {
  callApi()
}

interface City {
  nome: string
  id: number
}

const alphabeticalCityOrder = computed(() => {
  if (cities.value === null) {
    return []
  }

  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  return cities.value.sort((a: any, b: any) => {
    if (a.nome > b.nome) {
      return -1
    }
    if (a.nome < b.nome) {
      return 1
    }
    return 0
  })
})

async function onSubmit(event: Event) {
  event.preventDefault()

  const validSchema = schema.safeParse({
    email: store.state.email,
    password: store.state.password,
    first_name: store.state.first_name,
    last_name: store.state.last_name,
    confirm_password: store.state.confirm_password,
    isVerified: false
  })

  if (!validSchema.success) {
    errors.value = validSchema.error.format()
  } else {
    try {
      await store.signUp()
      errors.value = null
      toast({
        title: 'Cadastro realizado com sucesso!',
        description: 'Você foi cadastrado com sucesso!',
        class: 'bg-green-500 text-white'
      })
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar!',
        description: 'Verifique os campos e tente novamente.',
        class: 'bg-red-500 text-white'
      })
    }
  }
}
</script>
