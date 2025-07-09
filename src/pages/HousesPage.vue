<template>
  <div class="houses-page">
    <div class="search-house">
      <HouseSearch />
    </div>
    <!-- <div class="create-button">
      <CreateButton />
    </div> -->
    <HouseCard />
  </div>
</template>

<script>
import HouseCard from '@/components/house/HouseCard.vue';
import HouseSearch from "@/components/house/HouseSearch.vue";
import CreateButton from '@/components/house/CreateButton.vue';

export default {
  name: 'HousesPage',
  components: {
    HouseCard,
    HouseSearch,
    CreateButton
    
    
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



@media (max-width: 600px) {
 

  .create-button {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 2rem 6rem 1rem;

  }

  @media (max-width: 600px) {
  .create-button{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 2rem 3rem 1rem
    margin
    
  }

}

}



</style>


