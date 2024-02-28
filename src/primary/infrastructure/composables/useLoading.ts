import { ref } from 'vue'

function useLoading() {
  const loading = ref()

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  return { setLoading }
}

export default useLoading
