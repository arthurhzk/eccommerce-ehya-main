<template>
  <section class="bg-blue-acqua md:bg-white observe">
    <SideContainer class="md:bg-blue-acqua md:px-12 md:pt-12 md:rounded-md md:border">
      <h1
        class="text-center lg:text-start text-4xl text-text-blue font-bold pt-16 pb-11 leading-10"
      >
        Pesquise Milhares de Produtos <br />
        em um Único Lugar
      </h1>

      <div class="flex justify-center">
        <Input class="md:p-6" placeholder="Eu quero comprar..." type="text" />

        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2"> </span>
        <Button class="md:p-6"><Search /></Button>
        <img class="hidden lg:block" src="/Shopping Checkout Medium.png" />
      </div>
      <div class="flex items-center justify-center mt-6">
        <img class="block md:hidden" src="/Shopping Checkout.png" />
        <img class="hidden md:block lg:hidden" src="/Shopping Checkout Medium.png" />
      </div>
    </SideContainer>
  </section>
  <section>
    <SideContainer>
      <div class="lg:flex lg:items-center lg:justify-around observe">
        <div class="flex flex-col items-center mt-24 bg-main-white space-y-6 rounded-md">
          <p class="pt-6 uppercase text-main-blue">Promoções da Semana</p>
          <h2 class="text-text-blue font-bold text-2xl">Frete Grátis</h2>
          <Button size="sm">Saiba Mais</Button>
          <img src="/Delivery.png" alt="" />
        </div>

        <div class="md:flex items-center lg:mx-4 justify-between observe">
          <div class="bg-main-white mt-6 rounded-md space-y-6 pl-6 pt-6">
            <div class="flex flex-col">
              <h2 class="text-text-blue font-bold text-2xl pt-6">Descontos de até <br />25%</h2>
              <div class="flex justify-between">
                <div class="flex items-center">
                  <Button class="bg-invisible text-main-blue" size="sm">Saiba Mais</Button>
                  <img class="mt-1" src="/arrow-right.svg" />
                </div>
                <img class="w-34 h-32" src="/Shopping Cart Mobile.png" />
              </div>
            </div>
          </div>
          <div class="lg:flex lg:mx-4 lg:flex-col observe">
            <div class="bg-main-white mt-6 rounded-md space-y-6 pr-6 pt-6">
              <div class="flex flex-col">
                <div class="flex items-end justify-end">
                  <h2 class="text-text-blue font-bold text-2xl pt-6">
                    5GB Livres <br />
                    de Armazenamento
                  </h2>
                </div>
                <div class="flex justify-between flex-row-reverse observe">
                  <div class="flex items-center">
                    <Button class="bg-invisible text-main-blue" size="sm">Saiba Mais</Button>
                    <img class="mt-1" src="/arrow-right.svg" />
                  </div>
                  <img class="w-34 h-32" src="/Call Center.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:hidden lg:flex lg:items-center lg:justify-around observe">
          <div class="flex flex-col items-center mt-24 bg-main-white space-y-6 rounded-md">
            <p class="pt-6 uppercase text-main-blue">Promoções da Semana</p>
            <h2 class="text-text-blue font-bold text-2xl">Ofertas do Mês</h2>
            <Button size="sm">Saiba Mais</Button>
            <img src="/Delivery.png" alt="" />
          </div>
        </div>
        <div
          class="flex flex-col items-center mt-6 bg-main-white space-y-6 rounded-md lg:hidden observe"
        >
          <h2 class="text-text-blue font-bold text-2xl pt-6">Ofertas do Mês</h2>
          <div class="flex items-center">
            <Button class="bg-invisible text-main-blue" size="sm">Saiba Mais</Button>
            <img class="mt-1" src="/arrow-right.svg" />
          </div>
          <img src="/Welcome.png" />
        </div>
      </div>
    </SideContainer>
  </section>
  <section>
    <SideContainer>
      <h2 class="text-text-blue text-center my-14 font-bold text-2xl">Nossos produtos:</h2>
      <router-link :to="{ name: RouteNameEnum.PRODUCTS }">
        <div class="grid grid-cols-2 md:flex md:flex-row gap-4 justify-center observe">
          <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :category="category"
            class="w-full"
          />
        </div>
      </router-link>
    </SideContainer>
  </section>
  <section>
    <SideContainer>
      <h2 class="text-text-blue font-bold text-2xl text-center my-14">
        Por que Escolher nossa loja
      </h2>
      <p class="text-center text-text-gray lg:block">
        Muitas razões pelas quais os clientes nos escolhem em vez de outros comércios
        eletrônicos.<br class="lg:visible" />
        Temos alguns pontos positivos que talvez outros não possam ter.
      </p>
    </SideContainer>
  </section>
  <section class="mt-8">
    <SideContainer>
      <div class="lg:grid lg:grid-cols-2">
        <div class="lg:flex lg:items-center lg:justify-center">
          <img class="hidden lg:block" src="/Finance Accounting Medium.png" />
        </div>
        <div class="w-full flex flex-col flex-wrap gap-4 justify-center md:grid md:grid-cols-2">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
            class="w-full observe"
          />
        </div>
      </div>
      <img class="block md:hidden mx-auto my-11 observe" src="/Finance Accounting.png" />
      <img
        class="hidden md:block lg:hidden mx-auto my-16 observe"
        src="/Finance Accounting Medium.png"
      />
    </SideContainer>
  </section>
  <section>
    <SideContainer>
      <h2 class="text-text-blue font-bold text-2xl text-center mt-14">
        Produtos mais Vendidos da nossa Loja
      </h2>
      <p class="text-center text-text-gray pt-6 font-light">
        Esta seção apresenta os dados relacionados ao produto mais vendido na loja Ehya.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-6 mt-6"></div>
    </SideContainer>
    <NewsletterSection />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SideContainer from '@/primary/components/container/SideContainer.vue'
import { Search } from 'lucide-vue-next'
import Input from '@/primary/components/ui/input/Input.vue'
import Button from '@/primary/components/ui/button/Button.vue'
import CategoryCard from '@/primary/components/interfaces/CategoryCard.vue'
import ServiceCard from '@/primary/components/interfaces/ServiceCard.vue'
import categories from '@/domain/data/categories'
import services from '@/domain/data/services'
import NewsletterSection from '@/primary/components/interfaces/NewsletterSection.vue'
import { RouteNameEnum } from '@/domain/enums/RouteEnum'

onMounted(() => {
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

<style scoped>
.observe {
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity 1s,
    transform 1s;
}

.observe.visible {
  opacity: 1;
  transform: scale(1);
}
</style>
