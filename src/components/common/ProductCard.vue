<script setup lang="ts">
interface Props {
  name: string
  description: string
}
defineProps<Props>()
</script>

<template>
  <article class="product-card">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  overflow-wrap: anywhere;
}
</style>
