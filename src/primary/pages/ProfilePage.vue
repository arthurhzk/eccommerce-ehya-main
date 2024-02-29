<template>
  <section>
    <div class="w-1/2 mx-auto">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]"> Invoice </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right"> Amount </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in filterTransactionByUser" :key="invoice.id">
            <TableCell class="font-medium">
              {{ invoice.id.slice(0, 20) }}
            </TableCell>
            <TableCell>{{ invoice.status }}</TableCell>
            <TableCell>{{ invoice.customer_details?.email }}</TableCell>
            <TableCell class="text-right">
              R$ {{ (invoice.amount_total / 100).toFixed(2) }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </section>
</template>

<script setup lang="ts">
import SidebarNav from '@/primary/components/interfaces/SidebarNav.vue'
import SideContainer from '@/primary/components/container/SideContainer.vue'
import useFetchTransactions from '@/primary/infrastructure/composables/useFetchTransactions'
import useUserStore from '@/primary/infrastructure/store/user'
import { onMounted, computed } from 'vue'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/primary/components/ui/table'

const { transactions, fetchTransactions } = useFetchTransactions()
const store = useUserStore()
const filterTransactionByUser = computed(() => {
  return transactions.value.filter(
    (transaction: any) => transaction.customer_details?.email === store.emailValue
  )
})
onMounted(() => {
  fetchTransactions()
  console.log(transactions)
  store.getUser()
})

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card'
  }
]
</script>
