<template>
    <div class="houses-page">
        <h1>Houses</h1> 
        <HouseCard />
    </div>
</template>

<script>
import HouseCard from '@/components/house/HouseCard.vue';

export default {
  name: 'HousesPage',
  components: {
    HouseCard,
  },
};
</script>

<style scoped>
.houses-page {
  padding: 2rem;
}
</style>


