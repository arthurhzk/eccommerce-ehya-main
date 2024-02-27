import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const purchasedItems = ref<any | null>([])

  const addToCart = (product: any) => {
    const findProductById = purchasedItems.value.find((item: any) => item.id === product.id)
    if (!findProductById) {
      if (product.transform_quantity === null) {
        product.transform_quantity = 1
        purchasedItems.value.push(product)
      }
    }
  }

  const addQuantity = (product: any) => {
    const findProductById = purchasedItems.value.find((item: any) => item.id === product.id)
    return findProductById.transform_quantity++
  }

  const removeQuantity = (product: any) => {
    const findProductById = purchasedItems.value.find((item: any) => item.id === product.id)
    if (findProductById.transform_quantity <= 1) {
      return 1
    } else {
      return findProductById.transform_quantity--
    }
  }

  const removeFromCart = (product: any) => {
    purchasedItems.value.splice(purchasedItems.value.indexOf(product), 1)
  }
  const removeAllProducts = () => {
    purchasedItems.value = []
  }

  return {
    purchasedItems,
    addToCart,
    removeFromCart,
    removeAllProducts,
    addQuantity,
    removeQuantity
  }
})
