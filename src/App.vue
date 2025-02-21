<script setup>
import MainHeader from './components/MainHeader.vue'
import AppContainer from './components/AppContainer.vue'
import PetBlock from './components/PetBlock.vue'
</script>

<template>
  <AppContainer>
    <MainHeader />
    <main>
      <PetBlock animal="dog" />
    </main>
  </AppContainer>
</template>

<style scoped></style>
