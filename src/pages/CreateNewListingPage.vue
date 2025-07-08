<template>
  <div class="create-listing-page">
    <HouseForm />
  </div>
</template>

<script setup>
import HouseForm from '@/components/house/HouseForm.vue'; 
</script>

<style>
.create-listing-page {
  background-image: url("@/assets/img/img_background@3x.png"); /* Path to your image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
