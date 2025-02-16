<script setup lang="ts">

import ClientTestimonial from "~/components/ClientTestimonial.vue";
import type {HomePageResponse} from "~/types/home";

const {
  data,
  pending,
  error
} = useFetch<HomePageResponse>('http://localhost:8000/website/home-page/?format=json');
</script>

<template>
  <div class="container home-hero">
    <div class="row my-3">
      <div class="col-md-8">
        <div class="content">
          <h1 class="title">Innovative Software Solutions <br> for Your Business</h1>
          <p>Custom ERP, e-Commerce & Ready-to-Use Software – Built to Scale, Designed to Perform.
            Let me know if you want a different style or tone!.</p>

          <NuxtLink to="/contact" class="btn btn-primary btn-lg">Get Started</NuxtLink>
        </div>
      </div>
      <div class="col-md-4 d-none d-md-block">
        Recent projects

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-4">
              <img src="https://placehold.co/250x250" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">Dr Assistant Pro</h5>
                <p class="card-text">Patient and prescription management system</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-4">
              <img src="https://placehold.co/250x250" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">Restulator</h5>
                <p class="card-text">Restaurant Management System</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-4">
              <img src="https://placehold.co/250x250" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">xPOS</h5>
                <p class="card-text">Point of sale solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-5 home-services">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="mb-4 title">Our Services</h1>
      <div>
        <NuxtLink to="/services" class="btn btn-outline-primary">Browser all Services</NuxtLink>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <div class="service-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-braces"
                   viewBox="0 0 16 16">
                <path
                    d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
              </svg>
            </div>

            <h4>Software Development</h4>
            <p>We build custom software solutions tailored to your business needs, ensuring efficiency and
              scalability.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <div class="service-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                   class="bi bi-code-slash" viewBox="0 0 16 16">
                <path
                    d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
              </svg>
            </div>
            <h4>Web Development</h4>
            <p>Our team develops responsive and high-performance web applications to elevate your online presence.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="service">
            <div class="service-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-phone"
                   viewBox="0 0 16 16">
                <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
              </svg>
            </div>
            <h4>Mobile App Development</h4>
            <p>We create user-friendly mobile apps for iOS and Android, optimized for performance and engagement.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <div class="service-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-buildings"
                   viewBox="0 0 16 16">
                <path
                    d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path
                    d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
              </svg>
            </div>
            <h4>Enterprise Solution</h4>
            <p>We offer ERP and enterprise software solutions to streamline operations and improve productivity.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <div class="service-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                   class="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
              </svg>
            </div>
            <h4>Software Quality Assurance</h4>
            <p>Our QA services ensure your software is reliable, secure, and performs flawlessly across all
              platforms.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <div class="service-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-robot"
                   viewBox="0 0 16 16">
                <path
                    d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
                <path
                    d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
              </svg>
            </div>
            <h4>AI / Machine Learning </h4>
            <p>We develop AI-driven solutions, including predictive analytics, automation, and intelligent chatbots.</p>
          </div>
        </div>
      </div>
    </div>


  </div>

  <div class="container my-5">

    <div class="row">
      <div class="col-md-3">
        <h1 class="mb-4 title">Our Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, assumenda consequatur dignissimos dolore eos,
          facilis id ipsa iste laborum maxime, nostrum obcaecati odio placeat praesentium similique tempora tempore
          temporibus velit!</p>
      </div>
      <div class="col-md-9">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>

    <div class="text-center">
      <NuxtLink to="/projects" class="btn btn-primary">See More ...</NuxtLink>
    </div>

  </div>

  <div class="container mb-5">
    <h1 class="mb-4 title">What they say about us</h1>

    <div class="row">
      <div class="col-md-4 my-3" v-for="testimonial in data?.testimonials" :key="testimonial.id">
        <ClientTestimonial :testimonial="testimonial"></ClientTestimonial>
      </div>

    </div>
  </div>

  <div class="container my-5">
    <div class="card py-5 text-center">
      <h1>Let's get started</h1>
      <div class="text-center">
        <NuxtLink to="/contact" class="btn btn-primary" style="width: 250px">
          Contact Us
        </NuxtLink>
      </div>
      <p>To discuss further about your business needs</p>
    </div>
  </div>
</template>

<style scoped>

</style>