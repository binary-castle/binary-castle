<script setup lang="ts">
import {useState} from "#app";

const theme = useState("theme", () => {
  // Check localStorage or default to system preference
  return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
});

// Update `data-bs-theme` on theme change
watch(theme, (newTheme) => {
  document.documentElement.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Apply theme on page load
onMounted(() => {
  document.documentElement.setAttribute("data-bs-theme", theme.value);
});

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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"
               role="button"
               id="megaMenuDropdown"
               data-bs-toggle="dropdown"
               aria-expanded="false">Services</a>

            <div class="dropdown-menu mega-menu rounded-0" aria-labelledby="megaMenuDropdown">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-3">
                      <div class="card-body d-flex gap-4">
                        <img src="https://placehold.co/64x64" alt="">
                        <div>
                          <h4>Software Development</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-3">
                      <div class="card-body d-flex gap-4">
                        <img src="https://placehold.co/64x64" alt="">
                        <div>
                          <h4>Software Development</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-3">
                      <div class="card-body d-flex gap-4">
                        <img src="https://placehold.co/64x64" alt="">
                        <div>
                          <h4>Software Development</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-3">
                      <div class="card-body d-flex gap-4">
                        <img src="https://placehold.co/64x64" alt="">
                        <div>
                          <h4>Software Development</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-3">
                      <div class="card-body d-flex gap-4">
                        <img src="https://placehold.co/64x64" alt="">
                        <div>
                          <h4>Software Development</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-3">
                      <div class="card-body d-flex gap-4">
                        <img src="https://placehold.co/64x64" alt="">
                        <div>
                          <h4>Software Development</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"
               role="button"
               id="megaMenuProjects"
               data-bs-toggle="dropdown"
               aria-expanded="false">Projects</a>

            <div class="dropdown-menu mega-menu rounded-0" aria-labelledby="megaMenuProjects">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-end px-3">Ready To Purchase Projects</h6>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="card" style="width: 18rem;">
                          <img src="https://placehold.co/450x450" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Dr Assistant</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                              of the card's content.</p>
                            <a href="#" class="btn btn-primary">Get it now ↗️</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Dr Assistant</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Dr Assistant Pro</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">xPOS</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="col-md-6">
                    <h6 class="px-3">Open Sources Freeware</h6>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Report builder</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Page builder</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                          </a>
                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Form builder</h5>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="card" style="width: 18rem;">
                          <img src="https://placehold.co/450x450" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Report builder</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                              of the card's content.</p>
                            <a href="#" class="btn btn-primary">Get it now ↗️</a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <!-- Right Side -->
        <div class="d-flex align-items-center">
          <!-- Theme Toggle Icon -->
          <button class="btn  text-dark" @click="theme = theme === 'dark' ? 'light' : 'dark'">
            🌙
          </button>

          <!-- Get Started Button -->
          <a href="#" class="btn btn-primary px-4">Get Started</a>
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