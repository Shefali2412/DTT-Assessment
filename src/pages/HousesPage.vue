<template>
    <div class="houses-page">
        <HouseSearch />
        <h1>Houses</h1> 
        <HouseCard />
    </div>
</template>

<script>
import HouseCard from '@/components/house/HouseCard.vue';
import HouseSearch from "@/components/house/HouseSearch.vue";

export default {
  name: 'HousesPage',
  components: {
    // HouseCard,
    HouseSearch
  },
};
</script>

<style scoped>
.houses-page {
  
}
</style>


