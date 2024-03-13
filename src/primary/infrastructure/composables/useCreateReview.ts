import supabase from '@/secondary/lib/supabase'
import { ref } from 'vue'
function useCreateReview() {
  const reviews = ref<any | null>([])

  const fetchReviews = async () => {
    const response = await supabase.from('reviews').select('*')
    if (response.error) {
      throw new Error(response.error.message)
    }
    reviews.value = response.data
  }

  const createReview = async (id: any, review: any, name: any) => {
    const response = await supabase.from('reviews').insert({
      review: review,
      id: id,
      name: name
    })
    if (response.error) {
      throw new Error(response.error.message)
    }
  }
  return { createReview, fetchReviews, reviews }
}

export default useCreateReview
