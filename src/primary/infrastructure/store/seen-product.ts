import { ref } from 'vue'
import { defineStore } from 'pinia'

const useSeenStore = defineStore('seen-product', () => {
  const seenProduct = ref<any | null>([])

  const latestSeenProducts = (product: any) => {
    const findProductById = seenProduct.value.find((item: any) => item.id === product.id)
    if (!findProductById) {
      seenProduct.value.push(product)
    }
  }

  return {
    latestSeenProducts,
    seenProduct
  }
})

export default useSeenStore
