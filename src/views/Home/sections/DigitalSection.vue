<template>
  <section id="digital" class="section-placeholder" aria-label="数字化服务与资质">
    <div class="digital-grid">
      <article class="digital-panel">
        <h2>小程序</h2>
        <p>此处为企业小程序服务的简短介绍占位文字。</p>
      </article>
      <article class="digital-panel">
        <h2>后台管理</h2>
        <p>此处为后台管理系统的简短介绍占位文字。</p>
      </article>
      <article class="digital-panel">
        <h2>资质证书</h2>
        <p>此处为企业资质证书的简短介绍占位文字。</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as theme;

.digital-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  max-width: theme.$container-max-width;
  min-width: 0;
}

.digital-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  overflow-wrap: anywhere;
}

@media (max-width: theme.$breakpoint-mobile) {
  .digital-grid {
    gap: 12px;
  }
}
</style>
