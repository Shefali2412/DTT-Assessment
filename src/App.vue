<script setup>
import HeaderNav from "@/components/layout/HeaderNav.vue";
</script>

<template>
  <HeaderNav />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin-top: 64px;
}
@media (max-width: 600px) {
  main {
    margin-top: 96px;
  }
}
</style>
