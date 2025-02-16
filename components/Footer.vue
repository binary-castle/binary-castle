<script setup lang="ts">

</script>

<template>
  <!-- Footer -->
  <footer class="footer mt-auto">
    <div class="container">
      <div class="row">
        <!-- Left Column -->
        <div class="col-lg-4 footer-logo">
          <img src="/assets/img/logo-v.svg" alt="" height="100px" width="auto">
        </div>

        <!-- Links Column -->
        <div class="col-lg-8">
          <div class="row">
            <div class="col-6 col-md-4">
              <h6 class="fw-bold">Primary Pages</h6>
              <nav class="nav flex-column">
                <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                <NuxtLink class="nav-link" to="/services">Services</NuxtLink>
                <NuxtLink class="nav-link" to="/projects">Projects</NuxtLink>
                <a class="nav-link" href="#">Open Source</a>
              </nav>
            </div>
            <div class="col-6 col-md-4">
              <h6 class="fw-bold">Pages</h6>
              <nav class="nav flex-column">
                <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                <NuxtLink class="nav-link" to="/career">Career</NuxtLink>
                <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
              </nav>
            </div>
            <div class="col-md-4">
              <h6 class="fw-bold">Company</h6>
              <nav class="nav flex-column">
                <NuxtLink class="nav-link" to="/support">Support</NuxtLink>
                <NuxtLink class="nav-link" to="/team">Our Team</NuxtLink>
                <NuxtLink class="nav-link" to="/review">Customer Review</NuxtLink>
                <NuxtLink class="nav-link" to="/gallery">Gallery</NuxtLink>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <!-- Footer Bottom -->
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-muted">© 2025 BinaryCastle. All rights reserved.</p>
        <div class="social-icons">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-dribbble"></i></a>
          <a href="#"><i class="bi bi-github"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #fff;
  padding: 40px 0;
  margin-top: auto;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05);
}

.footer .nav-link {
  color: #6c757d;
  padding: 2px 0;
}

.footer .nav-link:hover {
  color: #000;
}

.footer .social-icons a {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right: 8px;
  color: #333;
  font-size: 18px;
}

.footer .social-icons a:hover {
  background: #005eff;
  color: #fff;
  border-color: #005eff;
}
</style>