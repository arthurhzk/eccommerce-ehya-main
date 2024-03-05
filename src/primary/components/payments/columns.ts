import type { ColumnDef } from '@tanstack/vue-table'
import type { Payment } from '@/domain/types/payment.type'
import { h } from 'vue'
import { ArrowUpDown } from 'lucide-vue-next'
import Button from '@/primary/components/ui/button/Button.vue'
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: () => h('div', 'ID do pagamento'),
    cell: ({ row }) => h('div', row.getValue('id'))
  },

  {
    accessorKey: 'amount',
    header: () => h('div', 'Valor total'),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)

      return h('div', formatted)
    }
  },
  {
    accessorKey: 'created',
    header: () => h('div', 'Data'),
    cell: ({ row }) => h('div', row.getValue('created'))
  },

  {
    accessorKey: 'email',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
        },
        () => ['Email', { class: 'ml-2 h-4 w-4' }]
      )
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email'))
  }
]
