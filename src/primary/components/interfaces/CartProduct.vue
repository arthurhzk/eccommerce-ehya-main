<template>
  <section>
    <SideContainer
      ><div class="flex items-center mt-8">
        <img class="w-14 h-16" :src="props.cart.images[0]" />
        <div class="ml-8 space-y-1">
          <h2>{{ props.cart.name }}</h2>
          <div class="flex items-center gap-2">
            <Button @click="increaseProduct" class="w-6 h-6 rounded-[3px]" variant="outline"
              >+</Button
            >
            <p>{{ props.cart.transform_quantity }}</p>
            <Button @click="decreaseProduct" class="w-6 h-6 rounded-[3px]" variant="outline"
              >-</Button
            >
          </div>

          <div class="flex items-center gap-1 text-red-500">
            <LucideTrash class="w-4 h-4" />
            <DestructiveToast
              button-text="Remover"
              toast-description="Produto removido com sucesso!"
              @click="removeProduct"
              class="border-none"
            />
          </div>
          <h2 class="text-xl mt-8 font-semibold">R$ {{ totalEachValue }}</h2>
        </div>
      </div>
    </SideContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SideContainer from '@/primary/components/container/SideContainer.vue'
import { LucideTrash } from 'lucide-vue-next'
import Button from '@/primary/components/ui/button/Button.vue'
import DestructiveToast from '@/primary/components/interfaces/DestructiveToast.vue'
const emit = defineEmits(['remove', 'increase', 'decrease'])

const totalEachValue = computed(() => {
  const value = (props.cart.unit_amount / 100) * props.cart.transform_quantity
  return value.toFixed(2)
})

const props = defineProps({
  cart: {
    type: Object,
    required: true
  }
})
const removeProduct = () => {
  emit('remove')
}

const increaseProduct = () => {
  emit('increase')
}

const decreaseProduct = () => {
  emit('decrease')
}
</script>
