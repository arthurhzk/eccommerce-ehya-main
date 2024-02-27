<template>
  <AlertDialog v-model="isOpened">
    <AlertDialogTrigger as-child>
      <Button @click="isOpened = true" variant="outline"> Deixe um comentário </Button>
    </AlertDialogTrigger>
    <AlertDialogContent v-if="isOpened">
      <AlertDialogHeader>
        <AlertDialogTitle class="text-text-blue">Escreva o seu review</AlertDialogTitle>
        <AlertDialogDescription class="space-y-2">
          <div>
            <Label>Nome:</Label>
            <Input v-model:model-value="store.name" type="text" />
          </div>
          <div>
            <Label>Deixe um comentário:</Label>
            <Textarea v-model:model-value="store.review" type="text" />
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel class="text-text-blue" @click="isOpened = false"
          >Cancelar</AlertDialogCancel
        >
        <TheToast
          button-text="OK"
          toast-description="Comentário adicionado com sucesso!"
          @click="addReview"
        />
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/primary/components/ui/alert-dialog'
import { Button } from '@/primary/components/ui/button'
import { ref } from 'vue'
import { Textarea } from '@/primary/components/ui/textarea'
import { Label } from '@/primary/components/ui/label'
import { Input } from '@/primary/components/ui/input'
import useReviewStore from '@/primary/infrastructure/store/review'
import TheToast from '@/primary/components/interfaces/TheToast.vue'

const emit = defineEmits(['addReview'])
const store = useReviewStore()
const isOpened = ref()
const addReview = () => {
  emit('addReview', store.review, store.name)
  isOpened.value = false
}
</script>
