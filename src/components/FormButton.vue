<script setup></script>

<template>
  <button class="form-button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.form-button {
  font-family: inherit;
  width: 100%;
  height: 42px;
  padding: 12px 0;
  border-radius: 30px;
  border: none;
  background-color: var(--orange);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--white);
  cursor: pointer;
  outline: none;
  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: var(--orange-1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
}
</style>
