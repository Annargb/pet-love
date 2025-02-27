<script setup>
import { ref, computed } from 'vue'
import PasswordButton from './PasswordButton.vue'

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    required: true,
  },
  error: String,
  successMessage: String,
  showToggle: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const isVisiblePassword = ref(false)
const inputType = computed(() =>
  props.type === 'password' && isVisiblePassword.value ? 'text' : 'password',
)

const toggleVisibility = () => {
  isVisiblePassword.value = !isVisiblePassword.value
}

const inputClass = computed(() => {
  if (props.error) return 'input-error'
  if (props.successMessage) return 'input-success'
  return 'input-default'
})
</script>

<template>
  <div class="input-container">
    <label class="label">
      <input
        :type="inputType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :class="inputClass"
      />

      <PasswordButton
        v-if="type === 'password'"
        :isVisiblePassword="isVisiblePassword"
        @toggle="toggleVisibility"
      />
    </label>

    <p v-if="error" class="error-message">{{ error }}</p>
    <p v-else-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 295px;

  @media screen and (min-width: 768px) {
    max-width: 424px;
  }
}

.label {
  width: 100%;
  position: relative;
}

input {
  flex: 1;
  width: 100%;
  padding: 12px;
  height: 42px;
  border: 1px solid;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--gray-color);
  outline: none;
  transition: border-color 250ms ease;

  @media screen and (min-width: 768px) {
    padding: 16px;
    height: 52px;
    font-size: 16px;
    line-height: 1.25;
  }
}

.input-default {
  border-color: var(--gray-color-2);
}

.input-error {
  border-color: var(--red);
}

.input-success {
  border-color: var(--green);
}

.error-message {
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: var(--red);
}

.success-message {
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: var(--green);
}
</style>
