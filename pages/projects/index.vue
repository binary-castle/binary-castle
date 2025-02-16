<script setup lang="ts">

import ProductCard from "~/components/ProductCard.vue";
import type {HomePageResponse} from "~/types/home";
import type {ProductsResponse} from "~/types/product";

const config = useRuntimeConfig();
const apiUrl = config.public.API_BASE_URL;

useHead({
  title: 'Projects - BinaryCastle'
})

const {
  data,
  pending,
  error
} = useFetch<ProductsResponse>(`${apiUrl}/website/projects/?format=json`);
</script>

<template>
  <div class="container my-5">
    <h1>Empower your business <br> with out ready product;</h1>
  </div>

  <div class="container">

    <div class="row">
      <div class="col-md-9">
        <template v-for="product in data?.results">
          <ProductCard :product="product"></ProductCard>
        </template>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Filter</div>
          <div class="card-header bg-white">Programming language</div>
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
          </div>
          <div class="card-header bg-white border-top">Data Base</div>
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>