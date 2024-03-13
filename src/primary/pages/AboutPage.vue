<template>
  <section>
    <SideContainer>
      <h1 class="text-center text-4xl text-text-blue font-bold pt-16 pb-11 leading-10">
        Nossa história
      </h1>

      <p class="text-center text-text-gray">
        Imagine encontrar todos os produtos que você precisa em um só lugar. Assim como a EhyaSpace,
        nossa loja online oferece desde itens essenciais até soluções avançadas. Simplificamos sua
        experiência de compra para que você possa se concentrar no que realmente importa: aproveitar
        ao máximo seus produtos e fazer o seu trabalho com excelência.
      </p>

      <img class="h-[320px] mx-auto mt-10" src="/Office.jpg" />

      <div class="flex items-center justify-center mt-9">
        <div class="grid grid-cols-2 gap-12">
          <BadgeCard :title="concatNumberClients" description="Clientes" image="/Badge (3).png" />
          <BadgeCard :title="concatNumberSales" description="Vendas" image="/Badge (2).png" />
          <BadgeCard :title="concatNumberMessages" description="Mensagens" image="/Badge (1).png" />
          <BadgeCard :title="concatNumberCountries" description="Países" image="/Badge (0).png" />
        </div>
      </div>

      <h1 class="text-center text-4xl text-text-blue font-bold pt-16 pb-11 leading-10">
        Nossa história
      </h1>
      <p class="text-center text-text-gray">
        Com mais de 1.500 produtos e um atendimento diferenciado, a equipe da plataforma trabalha
        com parceiros e desenvolvedores globalmente para construir uma experiência única para você.
      </p>
      <h1 class="text-center text-4xl text-text-blue font-bold pt-16 pb-11 leading-10">
        Nossa cultura de trabalho
      </h1>
      <p class="text-center text-text-gray">
        Assim como Steve Jobs disse, 'Design não é apenas como parece e como se sente. Design é como
        funciona.' Sempre buscamos produzir um excelente resultado seguindo essa cultura.
      </p>
    </SideContainer>
    <NewsletterSection />
  </section>
</template>
<script setup lang="ts">
import SideContainer from '@/primary/components/container/SideContainer.vue'
import NewsletterSection from '@/primary/components/interfaces/NewsletterSection.vue'
import BadgeCard from '@/primary/components/interfaces/BadgeCard.vue'
import { ref, onMounted, computed } from 'vue'

const numberOfClients = ref(0)
const numberOfSales = ref(0)
const numberOfMessages = ref(0)
const numberOfCountries = ref(0)

const increaseByTime = (value: any, limit: any) => {
  setTimeout(() => {
    if (value.value < limit) {
      value.value++
      increaseByTime(value, limit)
    }
  }, 10)
}

const concatNumberClients = computed(() => {
  return numberOfClients.value.toString() + 'K'
})

const concatNumberSales = computed(() => {
  return numberOfSales.value.toString() + 'K'
})

const concatNumberMessages = computed(() => {
  return numberOfMessages.value.toString() + 'K'
})

const concatNumberCountries = computed(() => {
  return numberOfCountries.value.toString()
})

onMounted(() => {
  increaseByTime(numberOfClients, 50)
  increaseByTime(numberOfSales, 100)
  increaseByTime(numberOfMessages, 200)
  increaseByTime(numberOfCountries, 123)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  })

  const elementsToWatch = document.querySelectorAll('.observe')
  elementsToWatch.forEach((element) => {
    observer.observe(element)
  })
})
</script>
