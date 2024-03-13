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
            <Label>Deixe um comentário:</Label>
            <Textarea v-model="review" type="text" />
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

import TheToast from '@/primary/components/interfaces/TheToast.vue'

const review = defineModel<string>('review', { required: true })

const emit = defineEmits(['addReview'])

const isOpened = ref()
const addReview = () => {
  emit('addReview')
  isOpened.value = false
}
</script>
