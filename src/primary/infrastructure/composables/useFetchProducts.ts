import stripe from '@/secondary/lib/stripe'
import { ref, computed } from 'vue'

function useFetchProducts() {
  const products = ref<null | any>([])
  const prices = ref<null | any>([])
  const fetchProducts = async () => {
    const response = await stripe.products.list({
      limit: 100
    })
    products.value = response.data
  }

  const fetchPrices = async () => {
    const response = await stripe.prices.list({
      limit: 100
    })
    prices.value = response.data
  }

  const mergeStripeArray = computed(() => {
    const a1 = products
    const a2 = prices
    const a3 = a1.value.map((t1: any) => ({
      ...t1,
      ...a2.value.find((t2: any) => t2.product === t1.id)
    }))
    return a3
  })

  return { fetchProducts, products, fetchPrices, prices, mergeStripeArray }
}

export default useFetchProducts
