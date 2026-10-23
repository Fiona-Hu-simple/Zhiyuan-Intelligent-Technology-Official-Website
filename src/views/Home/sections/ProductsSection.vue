<script setup lang="ts">
import ProductCard from '@/components/common/ProductCard.vue'
import { products } from '@/data/products'
</script>

<template>
  <section id="products" class="section-placeholder" aria-labelledby="products-title">
    <div class="products-content">
      <header class="products-heading">
        <h2 id="products-title">产品展示</h2>
        <p>此处为产品区块的简短介绍占位文字。</p>
      </header>
      <div class="products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :description="product.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as theme;

.products-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: theme.$container-max-width;
  min-width: 0;
}

.products-heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: theme.$breakpoint-tablet) {
  .products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: theme.$breakpoint-mobile) {
  .products-grid {
    gap: 16px;
  }
}
</style>
