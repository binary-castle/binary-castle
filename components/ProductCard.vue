<script setup lang="ts">

import type {Product} from "~/types/product";

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>

  <div class="card product-card shadow-sm mb-4">

    <div class="row g-0">
      <!-- Product Image -->
      <div class="col-md-5 position-relative">
        <div role="button" @click="navigateTo(`projects/${product.slug}`)" class="product-image"
             :style="{'backgroundImage': `url(${product.feature_image})`}"></div>
        <div class="position-absolute w-100 bottom-0 p-2 technologies">
          <p class="mb-0">Technologies: </p>
          <ol class="list list-inline mb-0">
            <li v-for="tech in product.technologies" class="list-inline-item">{{ tech.name }}</li>
          </ol>

        </div>
      </div>

      <!-- Product Details -->
      <div class="col-md-7">
        <div class="card-body">
          <div class="d-flex justify-content-between title-content">
            <NuxtLink :to="`projects/${product.slug}`">
              <h5 class="card-title fw-bold">{{ product.name }}</h5>
            </NuxtLink>
          </div>
          <p class="card-text text-muted small">
            {{ product.short_description }}
          </p>

          <span class="badge bg-danger" v-for="category in product.categories">{{ category.name }}</span>

          <!-- Features -->
          <div class="mt-3">
            <strong>Features:</strong>
            <ul class="row">
              <li class="col-6" v-for="(feature, index) in product.features">{{ feature.title }}</li>
            </ul>
          </div>

          <div class="d-flex gap-2">
            <a v-for="button in product.buttons" :class="button.css_class" :href="button.url"
               target="_blank">{{ button.title }}</a>
          </div>


        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>