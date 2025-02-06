<script setup lang="ts">
// import {useState} from "#app";

// const theme = useState("theme", () => {
//   // Check localStorage or default to system preference
//   return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
// });

// Update `data-bs-theme` on theme change
// watch(theme, (newTheme) => {
//   document.documentElement.setAttribute("data-bs-theme", newTheme);
//   localStorage.setItem("theme", newTheme);
// });
//
// // Apply theme on page load
// onMounted(() => {
//   document.documentElement.setAttribute("data-bs-theme", theme.value);
// });

</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-white shadow-sm">
    <div class="container">
      <!-- Brand Logo -->
      <NuxtLink class="navbar-brand fw-bold text-dark" to="/">
        <img src="/assets/img/log-h.svg" width="200px" height="auto" alt="">
      </NuxtLink>


      <!-- Mobile Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              Home
            </NuxtLink>
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
  </nav>
</template>

<style scoped>
.mega-menu {
  position: fixed !important;
  top: 50px; /* Positions the menu below the nav item */
  left: 0;
  width: 100vw; /* Full width of the viewport */
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999; /* Ensure the menu is above other content */
  border-top-color: transparent !important;
}


.mega-menu .row {
  flex-wrap: nowrap;
  margin: 0;
}

.dropdown:hover .mega-menu {
  display: block;
}
</style>