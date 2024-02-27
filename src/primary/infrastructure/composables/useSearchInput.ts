import { computed, ref } from 'vue'

function useSearchInput() {
  const search = ref('')

  const searchInput = (product: any) => {
    const search = computed(() => {
      const search = product.filter((item: any) => {
        return item.name.toLowerCase().includes(product.search.toLowerCase())
      })
      return search
    })
    return search
  }

  return { search, searchInput }
}

export default useSearchInput
