<script setup>
import MainHeader from './components/MainHeader.vue'
import AppContainer from './components/AppContainer.vue'
import PetBlock from './components/PetBlock.vue'
import RegistrationForm from './components/RegistrationForm.vue'
</script>

<template>
  <AppContainer>
    <MainHeader />
    <main class="main">
      <PetBlock animal="dog" />
      <RegistrationForm />
    </main>
  </AppContainer>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
}
</style>
