<template>
  <header class="Header">
    <div class="container">
      <h1 class="Header__Title">Nuxt i18n</h1>
      <nav class="Header__Menu">
        <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>{{ $t('links.home') }}</NuxtLink>
        <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact>{{ $t('links.about') }}</NuxtLink>
        <NuxtLink
          v-if="$i18n.locale === 'en'"
          :to="`/vn` + $route.fullPath"
          class="Header__Link"
          active-class="none"
          exact
        >{{ $t('links.vietnamese') }}</NuxtLink>
        <NuxtLink
          v-else
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          class="Header__Link"
          active-class="none"
          exact
        >{{ $t('links.english') }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.top-header {
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
}

.top-header__logo {
  text-align: center;
  position: absolute;
  left: 50%;

  img {
    position: relative;
    max-height: 60px;
    left: -50%;
    top: -15px;
  }
}

.top-header__second-navi {
  text-align: right;
}
</style>