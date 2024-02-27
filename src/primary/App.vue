<template>
  <TheNav />

  <RouterView />

  <Toaster />
</template>

<script setup lang="ts">
import TheNav from '@/primary/components/interfaces/TheNav.vue'

import Toaster from '@/primary/components/ui/toast/Toaster.vue'
</script>
