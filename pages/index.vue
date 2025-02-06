<script setup lang="ts">

import ClientTestimonial from "~/components/ClientTestimonial.vue";
</script>

<template>
  <div class="container home-hero">
    <div class="row my-3">
      <div class="col-md-8">
        <div class="content">
          <h1 class="title">Limitless learning at <br> your fingertips</h1>
          <p>Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you
            acquire new skills.</p>

          <NuxtLink to="/contact" class="btn btn-primary btn-lg">Get Started</NuxtLink>
        </div>
      </div>
      <div class="col-md-4">
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
            <img src="https://placehold.co/64x64" class="rounded-circle mb-3" alt="">
            <h4>Software Development</h4>
            <p>We build custom software solutions tailored to your business needs, ensuring efficiency and scalability.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <img src="https://placehold.co/64x64" class="rounded-circle mb-3" alt="">
            <h4>Web Development</h4>
            <p>Our team develops responsive and high-performance web applications to elevate your online presence.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="service">
            <img src="https://placehold.co/64x64" class="rounded-circle mb-3" alt="">
            <h4>Mobile App Development</h4>
            <p>We create user-friendly mobile apps for iOS and Android, optimized for performance and engagement.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <img src="https://placehold.co/64x64" class="rounded-circle mb-3" alt="">
            <h4>Enterprise Solution</h4>
            <p>We offer ERP and enterprise software solutions to streamline operations and improve productivity.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <img src="https://placehold.co/64x64" class="rounded-circle mb-3" alt="">
            <h4>Software Quality Assurance</h4>
            <p>Our QA services ensure your software is reliable, secure, and performs flawlessly across all platforms.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-3">
          <div class="card-body service">
            <img src="https://placehold.co/64x64" class="rounded-circle mb-3" alt="">
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
      <div class="col-md-4 my-3">
        <ClientTestimonial></ClientTestimonial>
      </div>

      <div class="col-md-4 my-3">
        <ClientTestimonial></ClientTestimonial>

      </div>

      <div class="col-md-4 my-3">
        <ClientTestimonial></ClientTestimonial>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="card py-5 text-center">
      <h1>Let's get started</h1>
      <div class="text-center">
        <button class="btn btn-primary" style="width: 250px">Contact Us</button>
      </div>
      <p>To discuss further about your business needs</p>
    </div>
  </div>
</template>

<style scoped>

</style>