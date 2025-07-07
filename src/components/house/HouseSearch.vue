<template>
  <div class="search-fixed">
     <div class="search-column">
          <h1 class="search-title">Houses</h1>
     </div>
    <div class="search-bar">
      <button class="search-button" aria-label="Search">
        <img src="@/assets/img/icons/ic_search@3x.png" alt="Search" />
      </button>
      <input type="text" placeholder="Search for a house" class="search-input" />
    </div>
  </div>
  
</template>

<script setup>
import CreateButton from '@/components/house/CreateButton.vue';
</script>


<style scoped>
.search-fixed {
  position: absolute;
  top: 9rem;
  left: clamp(17rem, 8vw, 10rem);
  margin-top: -1rem;
  
}

.search-column {
display: flex;
flex-direction: column;
gap: 2rem; 
}

.search-title {

font-size: var(--h1-desktop);
font-family: var(--font-heading);
font-weight: var(--weight-bold);
color: var(--color-text-primary);
margin-left: -15rem;
transform: translateX(-16px); 
}
.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 500px;
  width: 100%;
  background-color: var(--color-tertiary-1);
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  padding: 0.5rem 1rem;
}

.search-input {
  flex: 1;
  border: none;
  background-color: var(--color-tertiary-1);
  font-size: var(--text-input-desktop);
  font-family: var(--font-body);
  padding: 0.5rem 0;
  padding-right: 12rem;
  outline: none;
}

.search-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.search-button img {
  width: 20px;
  height: 20px;
}

@media (max-width: 600px) {
.search-title {
  font-size: var(--h1-mobile);
  text-align: center;     /* Centers the text content */
  padding: 0 1rem;        /* Minimal horizontal padding */
  margin: 0 auto;         /* Centers the block element itself */
  transform: none;       
}

.search-fixed {
top: 6rem;
left: 0;
width: 100%;
display: flex;
justify-content: center; /* centers the column */
}

.search-column {
width: 100%;
max-width: 95%;
padding: 0 1rem;
}

.search-bar {
width: 100%;
max-width: 100%;
margin: 0 auto;
box-sizing: border-box;      /* Ensures padding doesn’t break layout */
overflow: hidden;     
}
.search-bar {
margin: 0 auto;         /* centers the search bar horizontally */
width: 100%;            /* allows it to fill available space */
max-width: 90%;         /* keeps a slim margin on left/right (you can tweak this) */
}

.search-input {
  font-size: var(--text-input-mobile);
}
}
</style>
