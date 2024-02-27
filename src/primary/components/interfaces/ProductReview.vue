<template>
  <section class="lg:absolute lg:right-20">
    <div class="flex flex-col lg:flex lg:flex-row mt-8 lg:gap-4">
      <h1
        class="text-center lg:text-start text-3xl text-text-blue font-bold leading-10 uppercase mb-8"
      >
        Reviews
      </h1>
      <AlertModal @add-review="addReview" />
    </div>
    <div v-for="review in reviews" :key="review.id">
      <TheAvatar :image="review.image" />
      <h2 class="text-text-blue font-bold text-xl uppercase">
        {{ review.name }}
      </h2>
      <p>{{ review.description }}</p>
      <span class="border-t block h-px mt-5 mb-5 lg:w-1/2" />
    </div>
    <div v-for="(reviews, index) in reviewProduct" :key="index">
      <div class="flex items-center justify-between">
        <h2 class="text-text-blue font-bold text-xl uppercase">
          {{ reviews.name }}
        </h2>
        <DestructiveToast
          @click="removeReview(index)"
          class="border-none"
          toast-description="Review excluído com sucesso!"
        >
          <X />
        </DestructiveToast>
      </div>

      <p>{{ reviews.review }}</p>
      <span class="border-t block h-px mt-5 mb-5" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AlertModal from '@/primary/components/interfaces/AlertModal.vue'
import reviews from '@/domain/data/reviews'
import useReviewStore from '@/primary/infrastructure/store/review'
import { onMounted } from 'vue'
import DestructiveToast from '@/primary/components/interfaces/DestructiveToast.vue'
import TheAvatar from '@/primary/components/interfaces/TheAvatar.vue'
import { X } from 'lucide-vue-next'

const { reviewProduct, addReview, removeReview } = useReviewStore()

onMounted(() => {
  console.log(reviewProduct)
})
</script>
