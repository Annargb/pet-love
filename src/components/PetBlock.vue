<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  animal: {
    type: String,
    required: true,
    validator: (value) => ['dog', 'cat'].includes(value),
  },
})

const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const showInfo = computed(() => windowWidth.value >= 768)

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

const iconSrc = computed(() => ({
  img1x:
    props.animal === 'dog'
      ? './images/universal/dog-icon-1x.png'
      : './images/universal/cat-icon-1x.png',
  img2x:
    props.animal === 'dog'
      ? './images/universal/dog-icon-2x.png'
      : './images/universal/cat-icon-2x.png',
}))

const petInfo = computed(() => ({
  name: props.animal === 'dog' ? 'Rich' : 'Jack',
  birthday: props.animal === 'dog' ? '21.09.2020' : '18.10.2021',
  description:
    props.animal === 'dog'
      ? 'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!'
      : 'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.',
}))
</script>

<template>
  <div class="pet-container">
    <picture>
      <source :srcset="`${src.mobile1x} 1x, ${src.mobile2x} 2x`" media="(max-width: 767px)" />

      <source
        :srcset="`${src.tablet1x} 1x, ${src.tablet2x} 2x`"
        media="(min-width: 768px) and (max-width: 1279px)"
      />

      <source :srcset="`${src.desktop1x} 1x, ${src.desktop2x} 2x`" media="(min-width: 1280px)" />

      <img :src="src.desktop1x" :alt="alt" class="pet" />
    </picture>
    <div class="pet-info" v-if="showInfo">
      <div class="icon-base">
        <picture>
          <source :srcset="`${iconSrc.img1x} 1x, ${iconSrc.img2x} 2x`" />
          <img :src="iconSrc.img1x" alt="Animal Icon" class="pet-icon" />
        </picture>
      </div>
      <div class="pet-info-container">
        <div class="pet-name-container">
          <h2 class="pet-name">{{ petInfo.name }}</h2>
          <p class="pet-birthday">
            Birthday: <span class="birthday">{{ petInfo.birthday }}</span>
          </p>
        </div>
        <p class="pet-description">{{ petInfo.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pet-container {
  position: relative;
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
      url('/images/desktop/bg-desktop-2x.png') 2x
    );
  }
}

.pet {
  position: absolute;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    left: 250px;
    width: 364px;
    height: 302px;
  }

  @media screen and (min-width: 1280px) {
    top: 22px;
    left: 36px;
    width: 536px;
    height: 632px;
  }
}

.pet-info {
  position: absolute;
  top: 149px;
  left: 32px;
  display: flex;
  gap: 8px;
  width: 294px;
  height: 121px;
  padding: 16px;
  border-radius: 20px;
  background-color: var(--white);

  @media screen and (min-width: 1280px) {
    top: 436px;
    left: 61px;
  }
}

.icon-base {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--light-orange);

  .pet-icon {
    width: 32px;
    height: 32px;
  }
}

.pet-info-container {
  width: 194px;
  height: 84px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pet-name-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pet-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--orange);
}

.pet-birthday {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--gray-color);

  .birthday {
    color: var(--text-color);
  }
}

.pet-description {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--gray-color-1);
}
</style>
