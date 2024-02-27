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
        <div class="grid gap-2">
          <Label for="text">Nome Completo</Label>
          <Input id="text" type="text" placeholder="John Doe" />
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>

        <div class="grid gap-2">
          <Label for="password">Senha</Label>
          <Input id="password" type="password" />
        </div>
        <div class="grid gap-2">
          <Label for="password">Confirme a sua Senha</Label>
          <Input id="password" type="password" />
        </div>
        <div class="grid gap-2">
          <Label for="city">Estado:</Label>
          <select class="border rounded-md p-3" v-model="state" @change="handleStateChange">
            <option class="mx-4" v-for="(state, index) in uf" :key="index" :value="state">
              {{ state }}
            </option>
          </select>
        </div>
        <div class="grid gap-2">
          <Label for="city">Cidade:</Label>
          <select class="border rounded-md p-3">
            <option v-for="city in alphabeticalCityOrder" :key="city.id" :value="city.nome">
              {{ city.nome }}
            </option>
          </select>
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">Registrar</Button>
      </CardFooter>
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
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'
const callApi = async () => {
  await axios
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos`)
    .then((response) => {
      cities.value = response.data
      console.log(cities.value)
    })
}

let state = ''

const cities = ref<City[] | null>(null)
const handleStateChange = (value: any) => {
  callApi()
}

onMounted(() => {
  callApi()
})
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

const uf = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO'
]
</script>
