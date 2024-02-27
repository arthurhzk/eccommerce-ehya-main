import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const useReviewStore = defineStore('review-product', () => {
  const reviewProduct = ref<any | null>([])
  const name = ref('')
  const review = ref('')

  const addReview = () => {
    const newReview = computed(() => {
      return {
        name: name.value,
        review: review.value
      }
    })
    reviewProduct.value.push(newReview.value)
  }

  const removeReview = (index: number) => {
    reviewProduct.value.splice(index, 1)
  }

  return { reviewProduct, addReview, name, review, removeReview }
})

export default useReviewStore
