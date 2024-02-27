<template>
  <section>
    <SideContainer>
      <div class="flex flex-col md:flex md:flex-row items-center justify-center">
        <div class="flex flex-col items-center">
          <h1 class="text-text-blue text-4xl font-bold text-center">
            ERRO 404 - Página não encontrada!
          </h1>
          <Button class="mt-6" size="sm">Voltar para a Home</Button>
        </div>
        <img class="md:w-1/2" src="/404.png" />
      </div>
    </SideContainer>
  </section>
</template>

<script setup lang="ts">
import SideContainer from '@/primary/components/container/SideContainer.vue'
import Button from '@/primary/components/ui/button/Button.vue'
</script>
