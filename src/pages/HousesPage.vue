<template>
    <div class="houses-page">
        <HouseSearch />
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--color-bg-1);
  min-height: 100vh;
  padding: 2rem 2rem 0 7rem; 
  padding-left: px;
}
</style>


