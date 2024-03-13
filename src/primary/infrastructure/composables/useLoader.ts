import { ref } from 'vue'

function useLoader() {
  const isLoading = ref(false)

  return { isLoading }
}

export default useLoader
