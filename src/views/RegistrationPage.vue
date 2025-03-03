<script setup>
import PetBlock from '../components/PetBlock.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
</script>

<template>
  <div class="registration-wrapper">
    <PetBlock animal="dog" />
    <RegistrationForm @submit="console.log" />
  </div>
</template>

<style scoped lang="scss">
.registration-wrapper {
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
