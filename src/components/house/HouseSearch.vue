<template>
    <div class="search-bar">
        <button class="search-button">
          <img src="@/assets/img/icons/ic_search@3x.png" alt="Search" />
        </button>
        <input type="text" placeholder="Search houses..." class="search-input"/>
    </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 500px;
  width: 100%;
  background-color: var(--color-bg-1);
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  
  
  
  }
  .search-input {
  flex: 1;
  border: none;
  background-color: var(--color-bg-1);
  font-size: var(--text-input);
  font-family: var(--font-body);
  padding: 0.5rem 0;
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


</style>