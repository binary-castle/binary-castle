<script setup lang="ts">

</script>

<template>
  <div class="card product-card shadow-sm mb-4">
    <div class="row g-0">
      <!-- Product Image -->
      <div class="col-md-5 position-relative">
        <div
            style="height: 400px; background-image: url('https://placehold.co/450x450'); background-position: center; background-size: cover; background-repeat: no-repeat"></div>
        <div class="position-absolute w-100 bottom-0 p-2">
          <p class="mb-0">Technologies: </p>
          <ol class="list list-inline mb-0">
            <li class="list-inline-item">Laravel</li>
            <li class="list-inline-item">Vue</li>
            <li class="list-inline-item">MySQL</li>
            <li class="list-inline-item">MySQL</li>
          </ol>

        </div>
      </div>

      <!-- Product Details -->
      <div class="col-md-7">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fw-bold">Dr Assistant Pro</h5>
          </div>
          <p class="card-text text-muted small">
            Patient and prescription management system
          </p>

          <span class="badge bg-danger">Medical</span>

          <!-- Features -->
          <div class="mt-3">
            <strong>Features:</strong>
            <ul class="row">
              <li class="col-6">Dynamic roles and permissions</li>
              <li class="col-6">Easy to write prescription builder</li>
              <li class="col-6">Drag n Drop Prescription Designer</li>
              <li class="col-6">Easy Appointment from Web and dashboard</li>
              <li class="col-6">Drag n Drop page builder with SEO meta support</li>
              <li class="col-6">Standalone and linked invoice manager</li>
            </ul>
          </div>

          <div class="d-flex gap-2">
            <button class="btn btn-primary">Buy Now</button>
            <button class="btn btn-secondary">Demo</button>
            <button class="btn btn-info">Doc</button>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>