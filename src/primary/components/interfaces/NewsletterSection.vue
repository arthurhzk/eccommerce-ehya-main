<template>
  <section class="bg-blue-acqua md:bg-white w-screen my-14">
    <SideContainer class="md:block md:bg-blue-acqua rounded-md">
      <div class="lg:flex">
        <img
          src="/Foreign Exchange Market Medium.png"
          class="hidden md:hidden lg:block mx-auto md:pt-10 observe"
        />
        <div class="pt-12 px-5 space-y-4 text-center">
          <h2 class="text-white text-2xl">Nunca esqueça uma promoção</h2>
          <p class="font-light text-main-white">
            Nós sempre oferecemos aos nossos clientes uma promoção para <br class="lg:visible" />
            mostrar nosso apreço pela fidelidade deles conosco. Basta se inscrever conosco.
          </p>
          <div class="py-4 rounded-lg space-y-4">
            <div class="relative w-full max-w-sm items-center">
              <Input id="search" type="text" placeholder="Assinar Newsletter" class="pl-10" />
              <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                <Mail class="size-6 text-muted-foreground" />
              </span>
            </div>

            <Button class="font-bold text-lg">Inscreva-se</Button>
          </div>
        </div>
        <img class="block md:hidden mx-auto observe" src="/Foreign Exchange Market.png" />
        <img
          src="/Foreign Exchange Market Medium.png"
          class="hidden md:block lg:hidden mx-auto observe"
        />
      </div>
    </SideContainer>
  </section>
</template>

<script setup lang="ts">
import SideContainer from '@/primary/components/container/SideContainer.vue'
import { Button } from '@/primary/components/ui/button'
import { Input } from '@/primary/components/ui/input'
import { Mail } from 'lucide-vue-next'
</script>
