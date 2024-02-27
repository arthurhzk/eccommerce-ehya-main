import { computed } from 'vue'

function useSumTotalPrice() {
  const sumTotalPrice = (product: any) => {
    const sumTotal = computed(() => {
      const total = product.reduce((acc: any, item: any) => acc + item.unit_amount / 100, 0)
      return total
    })
    return sumTotal
  }

  return { sumTotalPrice }
}

export default useSumTotalPrice
