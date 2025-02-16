<script setup lang="ts">

import {useRoute} from 'vue-router'
import {watch, ref} from 'vue'

const openNavbar = ref<boolean>(false);
const route = useRoute();

const toggleNavbar = () => {
  openNavbar.value = !openNavbar.value;
}

// Watch for route changes and close the offcanvas
watch(route, () => {
  openNavbar.value = false;
});


</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-white shadow-sm">
    <div class="container">
      <!-- Brand Logo -->
      <NuxtLink class="navbar-brand fw-bold text-dark" to="/">
        <img src="/assets/img/log-h.svg" width="200px" height="auto" alt="Logo">
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Offcanvas Menu -->
      <div
          class="offcanvas offcanvas-end w-100"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          :class="{'show': openNavbar}"
      >
        <div class="offcanvas-header">
          <div class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="/assets/img/log-h.svg" width="200px" height="auto" alt="Logo">
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" @click="toggleNavbar"
                  aria-label="Close"></button>
        </div>
        <div class="d-none d-md-block">
          <div class="offcanvas-body">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/projects" class="nav-link">Products</NuxtLink>
              </li>
            </ul>

            <div class="d-flex align-items-center">
              <a href="#" class="btn btn-primary get-start px-4">Get Started</a>
            </div>
          </div>
        </div>


        <div class="offcanvas-body d-block d-md-none">
          <div class="col-12  mb-4">
            <h6 class="fw-bold">Primary Pages</h6>
            <nav class="nav flex-column">
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
              <NuxtLink class="nav-link" to="/services">Services</NuxtLink>
              <NuxtLink class="nav-link" to="/projects">Projects</NuxtLink>
              <a class="nav-link" href="#">Open Source</a>
            </nav>
          </div>


          <div class="col-12 mb-4">
            <h6 class="fw-bold">Pages</h6>
            <nav class="nav flex-column">
              <NuxtLink class="nav-link" to="/about">About</NuxtLink>
              <NuxtLink class="nav-link" to="/career">Career</NuxtLink>
              <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
            </nav>
          </div>

          <div class="col-12 mb-4">
            <h6 class="fw-bold">Company</h6>
            <nav class="nav flex-column">
              <NuxtLink class="nav-link" to="/support">Support</NuxtLink>
              <NuxtLink class="nav-link" to="/team">Our Team</NuxtLink>
              <NuxtLink class="nav-link" to="/review">Customer Review</NuxtLink>
              <NuxtLink class="nav-link" to="/gallery">Gallery</NuxtLink>
            </nav>
          </div>

          <div class="text-center">
            <NuxtLink to="/contact" class="btn btn-primary get-start px-4">
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>

</style>