<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="destructive"> Finalizar sessão </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a sair. Você tem certeza de que deseja sair?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction @click="signOut">Finalizar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/primary/components/ui/alert-dialog'
import { Button } from '@/primary/components/ui/button'

const emit = defineEmits(['signOut'])

const signOut = () => {
  emit('signOut')
}
</script>
