<template>
  <Button
    variant="outline"
    @click="
      () => {
        toast({
          description: props.toastDescription,
          variant: 'destructive'
        })
      }
    "
  >
    {{ props.buttonText }}
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@/primary/components/ui/button'
import { useToast } from '@/primary/components/ui/toast/use-toast'

const props = defineProps({
  buttonText: String,
  toastDescription: String
})

const { toast } = useToast()
</script>
