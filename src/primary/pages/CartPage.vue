<template>
  <section>
    <SideContainer>
      <div>
        <div class="flex items-center justify-between md:w-1/2 pt-16 pb-8">
          <h1 class="text-center text-4xl text-text-blue font-bold leading-10">Meu Carrinho</h1>

          <DestructiveToast
            size="sm"
            button-text="Remover tudo"
            toast-description="Todos os produtos foram removidos do carrinho!"
            variant="outline"
            class="bg-invisible text-red-500 border-none rounded-sm"
            @click="store.removeAllProducts"
          />
        </div>
        <span class="border-t block h-px md:w-1/2" />
        <div class="my-10">
          <h2
            v-if="store.purchasedItems.length == 0"
            class="text-text-blue font-bold text-xl text-center lg:text-start"
          >
            Nenhum item no carrinho!
          </h2>

          <CartProduct
            v-else
            @increase="store.addQuantity(cart)"
            @decrease="store.removeQuantity(cart)"
            @remove="store.removeFromCart(cart)"
            v-for="cart in store.purchasedItems"
            :cart="cart"
            :key="cart.id"
          />
          <div class="border rounded-sm mt-4 lg:w-[384px] lg:absolute lg:right-44 lg:top-60">
            <div class="grid grid-cols-2 text-center gap-4">
              <p class="font-light mt-4">Subtotal</p>
              <p class="mt-4">R$ {{ totalPriceCheckout }}</p>
              <p class="font-light">Taxas</p>
              <p>Frete Grátis</p>
            </div>
            <span class="border-t block h-px mt-5 mb-5" />
            <div class="grid grid-cols-2 text-center">
              <p>Total</p>
              <p class="font-bold">R$ {{ totalPriceCheckout }}</p>
            </div>
            <div class="flex justify-center mt-8 mb-4">
              <Button @click="redirect">Finalizar Compra</Button>
            </div>
          </div>
        </div>
      </div>
    </SideContainer>

    <h2
      v-if="seenProduct.length > 0"
      class="text-text-blue font-bold text-xl text-center md:mt-40 mt-8"
    >
      Últimos produtos vistos
    </h2>
    <div class="flex flex-wrap items-center gap-4 justify-center">
      <ProductCard
        @add="store.addToCart(item)"
        v-for="item in seenProduct"
        :key="item.product"
        :product="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SideContainer from '@/primary/components/container/SideContainer.vue'
import Button from '@/primary/components/ui/button/Button.vue'
import CartProduct from '@/primary/components/interfaces/CartProduct.vue'
import { useCartStore } from '@/primary/infrastructure/store/cart'
import ProductCard from '@/primary/components/interfaces/ProductCard.vue'
import useSeenStore from '@/primary/infrastructure/store/seen-product'
import DestructiveToast from '@/primary/components/interfaces/DestructiveToast.vue'
import { loadStripe } from '@stripe/stripe-js'

const store = useCartStore()

const { seenProduct } = useSeenStore()

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
    const lineItems = store.purchasedItems.map((item: any) => ({
      price: item.id,
      quantity: item.transform_quantity
    }))

    stripeInstance.redirectToCheckout({
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
      lineItems,
      mode: 'payment'
    })
  } else {
    console.error('Stripe has not been properly initialized.')
  }
  return { redirect }
}

const totalPriceCheckout = computed(() => {
  let sum = 0
  for (let i = 0; i < store.purchasedItems.length; i++) {
    sum += (store.purchasedItems[i].unit_amount * store.purchasedItems[i].transform_quantity) / 100
  }
  return sum.toFixed(2)
})
</script>
