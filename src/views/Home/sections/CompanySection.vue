<template>
  <section id="company" class="section-placeholder" aria-labelledby="company-title">
    <div class="company-content">
      <h1 id="company-title">智渊智能科技有限公司</h1>
      <h2>中老年人安全监护系统</h2>
      <p>面向居家养老与机构养老的智能安全监护解决方案</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as theme;

.company-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: theme.$container-max-width;
  min-width: 0;
  overflow-wrap: anywhere;
}
</style>
