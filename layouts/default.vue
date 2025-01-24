<script setup lang="ts">

import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <Navbar/>
  <div style="min-height: 80vh;">
    <slot/>
  </div>

  <Footer/>
</template>

<style scoped>

</style>