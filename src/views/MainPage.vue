<template class="wrapper">
  <HeaderSection />

  <main>
    <NavBarSection />
    <AboutSection />
    <section class="topics"></section>
    <section class="places"></section>
    <section class="prices"></section>
    <section class="faq"></section>
    <section class="reviews"></section>
  </main>
  <footer></footer>
</template>

<script>
  import HeaderSection from '@/components/sections/HeaderSection';
  import NavBarSection from '@/components/sections/NavBarSection';
  import AboutSection from '@/components/sections/AboutSection.vue';
  export default {
    components: {
      HeaderSection,
      NavBarSection,
      AboutSection,
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';
  main {
    max-width: 2000px;
    margin: 0 auto;
  }
</style>
