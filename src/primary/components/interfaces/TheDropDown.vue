<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline"> Minha conta </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>{{ store.credentials.name }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User class="mr-2 h-4 w-4" />
          <router-link :to="{ name: RouteNameEnum.PROFILE }">Perfil</router-link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard class="mr-2 h-4 w-4" />
          <span>Compras</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuItem>
        <LifeBuoy class="mr-2 h-4 w-4" />
        <span>Suporte</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut class="mr-2 h-4 w-4" />
        <span @click="signOut">Finalizar</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { CreditCard, LifeBuoy, LogOut, User } from 'lucide-vue-next'
import { Button } from '@/primary/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/primary/components/ui/dropdown-menu'

import useUserStore from '@/primary/infrastructure/store/user'
import { RouteNameEnum } from '@/domain/enums/RouteEnum'
const store = useUserStore()
const emit = defineEmits(['signOut'])
const signOut = () => {
  emit('signOut')
}
</script>
