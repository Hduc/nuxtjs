<template>
  <div>
    <top-header />
    <main id="main" role="main">
      <nuxt />
    </main>
    <bottom-footer />
  </div>
</template>

<script>
import TopHeader from "~/components/header/TopHeader.vue";
import BottomFooter from "~/components/bottom/BottomFooter.vue";

export default {
  components: {
    TopHeader,
    BottomFooter
  }
};
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
</style>