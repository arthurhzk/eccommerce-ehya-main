import stripe from '@/secondary/lib/stripe'
import { ref } from 'vue'
const useFetchSales = () => {
  const transactions = ref<null | any>([])
  const fetchTransactions = async () => {
    const response = await stripe.checkout.sessions.list({
      limit: 100
    })
    transactions.value = response.data
  }

  return { fetchTransactions, transactions }
}

export default useFetchSales
