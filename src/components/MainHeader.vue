<template>
  <header class="header">
    <picture>
      <source
        srcset="/images/tablet/logo-universal-1x.png 1x, /images/tablet/logo-universal-2x.png 2x"
        media="(min-width: 1280px)"
      />
      <source
        srcset="/images/tablet/logo-universal-1x.png 1x, /images/tablet/logo-universal-2x.png 2x"
        media="(min-width: 768px)"
      />
      <img
        src="/images/mobile/logo-mobile-1x.png"
        srcset="/images/mobile/logo-mobile-2x.png 2x"
        alt="Logo"
        class="logo"
      />
    </picture>
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

.logo {
  width: 76px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 105px;
    height: 28px;
  }
}
</style>
