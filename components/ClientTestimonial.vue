<script setup lang="ts">
import type {Testimonial} from "~/types/testimonial";

interface Props {
  testimonial: Testimonial;
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="text-warning mb-2">
        <font-awesome v-for="ratting in testimonial.ratting" icon="fa-solid fa-star"></font-awesome>
        <font-awesome v-for="n in (5 - testimonial.ratting)" icon="fa-regular fa-star"></font-awesome>
      </div>

      <p>{{ testimonial.review }}</p>

      <div class="d-flex align-items-center flex-wrap gap-3">
        <img src="https://placehold.co/60x60" class="img-thumbnail rounded-circle" alt="">
        <div>
          <strong>{{ testimonial.client_name }}</strong>
          <p class="mb-0">{{ testimonial.client_occupation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>