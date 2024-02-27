<template>
  <section>
    <SideContainer>
      <div v-if="searchProductById">
        <div class="lg:flex lg:justify-around lg:items-center">
          <div class="md:flex lg:w-1/3">
            <swiper :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide v-for="image in searchProductById.images" :key="image.id">
                <img class="w-[300px] h-[300px] mx-auto" :src="image" />
              </swiper-slide>
            </swiper>
          </div>

          <div class="lg:flex lg:flex-col">
            <h1
              class="text-3xl text-text-blue font-bold leading-10 md:text-center uppercase ml-5 mt-6"
            >
              {{ searchProductById.name }}
            </h1>
            <h3 class="text-xl text-text-blue font-bold md:text-center leading-10 uppercase ml-5">
              R$ {{ (searchProductById.unit_amount / 100).toFixed(2) }}
            </h3>

            <div
              class="flex flex-col md:flex md:flex-row md:items-center md:justify-center md:gap-2"
            >
              <TheToast
                button-text="Adicionar ao Carrinho"
                toast-description="Produto adicionado ao carrinho!"
                @click="addToCart(searchProductById)"
                variant="outline"
                class="mt-3"
              />
              <Button @click="redirect" class="mt-3">Comprar agora</Button>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2">
          <h3 class="text-2xl text-text-blue font-bold leading-10 uppercase ml-5 mt-10">
            Descrição
          </h3>
          <TheAccordion text="Detalhes do Produto" :description="searchProductById.description" />
          <TheAccordion
            text="Política de Devolução"
            description="No máximo 30 dias após o recebimento do produto."
          />
        </div>
        <ProductReview />
      </div>
    </SideContainer>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import SideContainer from '@/primary/components/container/SideContainer.vue'
import Button from '@/primary/components/ui/button/Button.vue'
import TheAccordion from '@/primary/components/interfaces/TheAccordion.vue'
import useFetchProducts from '@/primary/infrastructure/composables/useFetchProducts'
import { useRouter } from 'vue-router'
import { onMounted, computed } from 'vue'
import { useCartStore } from '@/primary/infrastructure/store/cart'
import useSeenStore from '@/primary/infrastructure/store/seen-product'
import TheToast from '@/primary/components/interfaces/TheToast.vue'
import { loadStripe } from '@stripe/stripe-js'

import ProductReview from '@/primary/components/interfaces/ProductReview.vue'
const { fetchPrices, fetchProducts, mergeStripeArray } = useFetchProducts()
const { addToCart } = useCartStore()
const modules = [Navigation]

const router = useRouter()
const searchProductById = computed(() => {
  const id = router.currentRoute.value.params.id

  const findProduct = mergeStripeArray.value.find((product: any) => product.product === id)
  return findProduct
})
const { latestSeenProducts } = useSeenStore()

// eslint-disable-next-line vue/no-async-in-computed-properties
const stripe = computed(async () => {
  // eslint-disable-next-line vue/no-async-in-computed-properties
  const response = await loadStripe(
    'pk_test_51OjqQGCFji4mq3F4hgkPYVf65gcT2v08pVXBYGcqYmq6aUATE6m6CnNUjlgjGLfoApudnKFZpTBVOFLOxun2Frr400mbvaBpkY'
  )
  return response
})

const redirect = async () => {
  const stripeInstance = await stripe.value
  if (stripeInstance) {
    stripeInstance.redirectToCheckout({
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      lineItems: [
        {
          price: searchProductById.value.id,
          quantity: 1
        }
      ],
      mode: 'payment'
    })
  } else {
    console.error('Stripe has not been properly initialized.')
  }
  return { redirect }
}

onMounted(async () => {
  await fetchProducts()
  await fetchPrices()
  latestSeenProducts(searchProductById.value)
})
</script>
