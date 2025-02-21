<script setup>
import { computed } from 'vue'

const props = defineProps({
  animal: {
    type: String,
    required: true,
    validator: (value) => ['dog', 'cat'].includes(value),
  },
})

const src = computed(() => ({
  mobile1x:
    props.animal === 'dog'
      ? '/images/mobile/dog-1-mobile-1x.png'
      : '/images/mobile/cat-1-mobile-1x.png',
  mobile2x:
    props.animal === 'dog'
      ? '/images/mobile/dog-1-mobile-2x.png'
      : '/images/mobile/cat-1-mobile-2x.png',
  tablet1x:
    props.animal === 'dog'
      ? '/images/tablet/dog-1-tablet-1x.png'
      : '/images/tablet/cat-1-tablet-1x.png',
  tablet2x:
    props.animal === 'dog'
      ? '/images/tablet/dog-1-tablet-2x.png'
      : '/images/tablet/cat-1-tablet-2x.png',
  desktop1x:
    props.animal === 'dog'
      ? '/images/desktop/dog-1-desktop-1x.png'
      : '/images/desktop/cat-1-desktop-1x.png',
  desktop2x:
    props.animal === 'dog'
      ? '/images/desktop/dog-1-desktop-2x.png'
      : '/images/desktop/cat-1-desktop-2x.png',
}))

const alt = computed(() => (props.animal === 'dog' ? 'Dog' : 'Cat'))
</script>

<template>
  <div class="pet-container">
    <picture class="block w-full h-auto">
      <source :srcset="`${src.mobile1x} 1x, ${src.mobile2x} 2x`" media="(max-width: 767px)" />

      <source :srcset="`${src.tablet1x} 1x, ${src.tablet2x} 2x`" media="(min-width: 768px)" />

      <source :srcset="`${src.desktop1x} 1x, ${src.desktop2x} 2x`" media="(min-width: 1280px)" />

      <img :src="src.desktop1x" :alt="alt" class="pet" />
    </picture>
  </div>
</template>

<style scoped lang="scss">
.pet-container {
  width: 100%;
  max-width: 375px;
  height: 280px;
  border-radius: 30px;
  background-image: image-set(
    url('/images/mobile/bg-mobile-1x.png') 1x,
    url('/images/mobile/bg-mobile-2x.png') 2x
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: 302px;
    border-radius: 60px;
    background-image: image-set(
      url('/images/tablet/bg-tablet-1x.png') 1x,
      url('/images/tablet/bg-tablet-2x.png') 2x
    );
  }

  @media screen and (min-width: 1280px) {
    max-width: 592px;
    height: 654px;
    background-image: image-set(
      url('/images/desktop/bg-desktop-1x.png') 1x,
      url('/images/desktop/bg-desktop-1x.png') 2x
    );
  }
}

.pet {
  width: 100%;
  height: 100%;
}
</style>
