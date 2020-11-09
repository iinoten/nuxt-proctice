<template>
  <div>
    <TheHeader />
    <main class="contents">
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
  .contents {
    max-width: 500px;
    padding: 40px 10px;
    margin: 0 auto;
  }
</style>