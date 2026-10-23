<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CompanySection from './sections/CompanySection.vue'
import ProductsSection from './sections/ProductsSection.vue'
import DigitalSection from './sections/DigitalSection.vue'
</script>

<template>
  <div class="home-page">
    <AppHeader />
    <main>
      <CompanySection />
      <ProductsSection />
      <DigitalSection />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.home-page { min-height: 100vh; }
</style>
