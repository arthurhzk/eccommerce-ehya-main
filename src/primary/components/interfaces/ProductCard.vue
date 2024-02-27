<template>
  <div
    class="group my-10 flex w-[300px] h-[400px] max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
  >
    <router-link
      class="relative flex h-60 overflow-hidden"
      :to="{ name: RouteNameEnum.PRODUCTID, params: { id: props.product.product } }"
    >
      <img
        class="absolute top-0 right-0 h-full w-full object-cover"
        :src="props.product.images[0]"
        alt="product image"
      />
    </router-link>
    <div class="mt-4 px-5 pb-5">
      <h5 class="text-xl tracking-tight text-text-blue">{{ props.product.name }}</h5>

      <div class="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span class="text-sm text-text-blue"
            >R$ {{ (props.product.unit_amount / 100).toFixed(2) }}</span
          >
        </p>
      </div>
      <TheToast
        button-text="Adicionar ao Carrinho"
        toast-description="Produto adicionado ao carrinho!"
        @click="addToCart"
        class="mx-auto flex items-center justify-center px-2 py-1 text-sm gap-2"
      >
        <ShoppingCart />
      </TheToast>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import TheToast from '@/primary/components/interfaces/TheToast.vue'
import { RouteNameEnum } from '@/domain/enums/RouteEnum'
const emit = defineEmits(['add'])
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
const addToCart = () => {
  emit('add')
}
</script>
