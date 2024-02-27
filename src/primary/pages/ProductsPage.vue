<template>
  <section>
    <SideContainer>
      <div class="flex items-center justify-between md:justify-around pt-7 lg:pt-0">
        <div v-for="chip in chips" :key="chip.id">
          <img :src="chip.image" />
          <p class="text-sm">{{ chip.title }}</p>
        </div>
      </div>
      <div class="flex flex-col md:flex md:flex-row items-center justify-between">
        <div
          class="md:ml-20 flex flex-col items-center gap-4 mt-10 md:flex md:flex-row md:items-center md:w-1/2 lg:w-1/3"
        >
          <Label>Lista de Produtos</Label>
          <Input v-model="search" placeholder="Pesquise o seu produto..." />
        </div>

        <div class="mt-4 md:mt-10 md:mr-20">
          <Select v-model="filter" @change="filteredProducts">
            <SelectTrigger>
              <SelectValue placeholder="Selecione um filtro" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filtros</SelectLabel>
                <SelectItem value="low"> Maior preço </SelectItem>
                <SelectItem value="high"> Menor preço </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div class="flex items-center justify-center flex-wrap gap-4">
        <h2 class="text-semibold" v-if="filteredProducts.length === 0">
          Nenhum produto encontrado!
        </h2>
        <div v-for="product in filteredProducts" :key="product.product">
          <Transition>
            <ProductCard @add="addToCart(product)" :product="product" />
          </Transition>
        </div>
      </div>
    </SideContainer>
  </section>
</template>

<script setup lang="ts">
import SideContainer from '@/primary/components/container/SideContainer.vue'
import ProductCard from '@/primary/components/interfaces/ProductCard.vue'
import chips from '@/domain/data/chips'
import useFetchProducts from '@/primary/infrastructure/composables/useFetchProducts'
import { useCartStore } from '@/primary/infrastructure/store/cart'
import { onMounted, computed, ref } from 'vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/primary/components/ui/select'
import Input from '@/primary/components/ui/input/Input.vue'
import Label from '@/primary/components/ui/label/Label.vue'

const { fetchProducts, fetchPrices, mergeStripeArray } = useFetchProducts()
const { addToCart } = useCartStore()

const search = ref('')
const filter = ref('')
onMounted(() => {
  fetchProducts()
  fetchPrices()
})

const searchProducts = computed(() => {
  let products = mergeStripeArray.value
  if (search.value.length >= 2) {
    products = products.filter((product: any) =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
    )
  }
  return products
})

const filteredProducts = computed(() => {
  const filtered = [...searchProducts.value]

  if (filter.value === 'low') {
    filtered.sort((a: any, b: any) => b.unit_amount - a.unit_amount)
  } else if (filter.value === 'high') {
    filtered.sort((a: any, b: any) => a.unit_amount - b.unit_amount)
  }

  return filtered
})
</script>
