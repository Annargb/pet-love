<script setup>
import AppContainer from '@/components/AppContainer.vue'
import MainHeader from '@/components/MainHeader.vue'

defineProps({
  isHomePage: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <AppContainer>
    <MainHeader :isHomePage="isHomePage" />
    <main>
      <slot></slot>
    </main>
  </AppContainer>
</template>
