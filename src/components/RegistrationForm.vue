<script setup>
import { ref } from 'vue'
import FormInput from './FormInput.vue'
import FormButton from './FormButton.vue'

const name = ref('')
const nameError = ref(null)
const nameSuccess = ref(null)

const email = ref('')
const emailError = ref(null)
const emailSuccess = ref(null)

const password = ref('')
const passwordError = ref(null)
const passwordSuccess = ref(null)

const confirmPassword = ref('')
const confirmPasswordError = ref(null)
const confirmPasswordSuccess = ref(null)
</script>

<template>
  <div class="register-wrapper">
    <h1 class="register-title">Registration</h1>
    <p class="register-text">Thank you for your interest in our platform.</p>
    <form class="register-form">
      <div class="input-wrapper">
        <FormInput
          v-model="name"
          type="text"
          placeholder="Name"
          :error="nameError"
          :successMessage="nameSuccess"
        />

        <FormInput
          v-model="email"
          type="email"
          placeholder="Email"
          :error="emailError"
          :successMessage="emailSuccess"
        />

        <FormInput
          v-model="password"
          type="password"
          placeholder="Password"
          :error="passwordError"
          :successMessage="passwordSuccess"
        />

        <FormInput
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm password"
          :error="confirmPasswordError"
          :successMessage="confirmPasswordSuccess"
        />
      </div>
      <FormButton>Registration</FormButton>
    </form>
    <p class="register-footnote">Already have an account? Login</p>
  </div>
</template>

<style scoped lang="scss">
.register-wrapper {
  width: 100%;
  max-width: 335px;
  height: 422px;
  padding: 27px 20px;
  border-radius: 30px;
  background-color: var(--white);

  @media screen and (min-width: 768px) {
    max-width: 704px;
    width: 704px;
    height: 560px;
    padding: 30px 140px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 592px;
    width: 592px;
    height: 654px;
    padding: 77px 84px;
  }
}

.register-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: 54px;
  }
}

.register-text {
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 18px;
    line-height: 1.22;
  }
}

.register-form {
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 34px;
  }
}

.register-footnote {
  margin-top: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: var(--gray-color);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.43;
  }
}
</style>
