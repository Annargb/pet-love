<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'
import icons from '/icons/icons.svg'

const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: false,
  },
})

const logoPaths = computed(() => ({
  mobile1x: props.isHomePage
    ? '/images/mobile/logo-mobile-white-1x.png'
    : '/images/mobile/logo-mobile-1x.png',

  mobile2x: props.isHomePage
    ? '/images/mobile/logo-mobile-white-2x.png'
    : '/images/mobile/logo-mobile-2x.png',

  tablet1x: props.isHomePage
    ? '/images/tablet/logo-universal-white-1x.png'
    : '/images/tablet/logo-universal-1x.png',

  tablet2x: props.isHomePage
    ? '/images/tablet/logo-universal-white-2x.png'
    : '/images/tablet/logo-universal-2x.png',
}))
</script>

<template>
  <header class="header" :class="{ 'header-absolute': props.isHomePage }">
    <router-link to="/">
      <picture>
        <source
          :srcset="`${logoPaths.mobile1x} 1x, ${logoPaths.mobile2x} 2x`"
          media="(max-width: 767px)"
        />
        <source
          :srcset="`${logoPaths.tablet1x} 1x, ${logoPaths.tablet2x} 2x`"
          media="(min-width: 768px)"
        />
        <img :src="logoPaths.mobile1x" alt="Logo" class="logo" />
      </picture>
    </router-link>
    <button type="button" class="burger-btn">
      <svg class="burger-icon">
        <use :href="`${icons}#icon-menu`" width="32" height="32"></use>
      </svg>
    </button>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 20px 0;

  @media screen and (min-width: 768px) {
    padding: 16px 0;
  }
}

.header-absolute {
  position: absolute;
  padding: 18px 20px 18px 20px;
  width: 100%;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    padding: 16px 32px 16px 32px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 64px 16px 64px;
    width: 1216px;
  }
}

.logo {
  width: 76px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 105px;
    height: 28px;
  }
}

.burger-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;

  .burger-icon {
    width: 32px;
    height: 32px;
    fill: red;
  }
}
</style>
