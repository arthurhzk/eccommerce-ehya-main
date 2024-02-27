<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>{{ props.text }}</AccordionTrigger>
      <AccordionContent>{{ props.description }}</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/primary/components/ui/accordion'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
