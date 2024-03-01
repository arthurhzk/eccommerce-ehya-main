<template>
  <div class="container py-10 mx-auto">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { columns } from '@/primary/components/payments/columns'
import type { Payment } from '@/domain/types/payment.type'
import DataTable from '@/primary/components/payments/DataTable.vue'
import useFetchTransactions from '@/primary/infrastructure/composables/useFetchTransactions'
const { fetchTransactions, transactions } = useFetchTransactions()
import useUserStore from '@/primary/infrastructure/store/user'
const data = ref<Payment[]>([])
const store = useUserStore()
const filterTransactionByUser = computed(() => {
  return transactions.value.filter(
    (transaction: any) => transaction.customer_details?.email === store.emailValue
  )
})

const rowPurchases = computed(() => {
  return filterTransactionByUser.value.map((transaction: any) => {
    return {
      id: transaction.id.slice(0, 20),
      status: transaction.status,
      email: transaction.customer_details?.email,
      amount: (transaction.amount_total / 100).toFixed(2)
    }
  })
})

async function getData(): Promise<Payment[]> {
  await fetchTransactions()
  return rowPurchases.value
}

onMounted(async () => {
  data.value = await getData()
})
</script>
