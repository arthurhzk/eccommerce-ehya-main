<template>
  <section>
    <SideContainer>
      <div class="md:hidden">
        <VPImage
          alt="Forms"
          width="1280"
          height="1214"
          class="block"
          :image="{
            dark: '/examples/forms-dark.png',
            light: '/examples/forms-light.png'
          }"
        />
      </div>
      <div class="hidden space-y-6 p-10 pb-16 md:block">
        <div class="space-y-0.5">
          <h2 class="text-2xl font-bold tracking-tight">Configurações</h2>
          <p class="text-muted-foreground">Ajuste as configurações da sua conta</p>
        </div>
        <Separator class="my-6" />
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside class="-mx-4 lg:w-1/5">
            <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
              <Button
                v-for="item in sidebarNavItems"
                :key="item.title"
                as="a"
                :href="item.href"
                variant="ghost"
                :class="
                  cn(
                    'w-full text-left justify-start',
                    $route.path === `${item.href}.html` && 'bg-muted hover:bg-muted'
                  )
                "
              >
                {{ item.title }}
              </Button>
            </nav>
          </aside>
          <div class="flex-1 lg:max-w-2xl">
            <div class="space-y-6">
              <slot />
            </div>
          </div>
        </div></div
    ></SideContainer>
  </section>
</template>

<script setup lang="ts">
import { cn } from '@/secondary/lib/utils'
import Button from '@/primary/components/ui/button/Button.vue'
import { useRoute } from 'vue-router'
import Separator from '@/primary/components/ui/separator/Separator.vue'
import SideContainer from '@/primary/components/container/SideContainer.vue'
interface Item {
  title: string
  href: string
}

const $route = useRoute()

const sidebarNavItems: Item[] = [
  {
    title: 'Perfil',
    href: '/profile'
  },
  {
    title: 'Tema',
    href: '/theme'
  },
  {
    title: 'Histórico de compras',
    href: '/history'
  }
]
</script>
