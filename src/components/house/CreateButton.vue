<template>
    <button class="create-button" @click="handleClick">
    <img src="@/assets/img/icons/ic_plus_grey@3x.png" alt="Plus Icon" class="plus-icon" />
    CREATE NEW
  </button>
</template>

<script setup>
function handleClick() {
  console.log("Create New clicked");
}
</script>

<style scoped>
.create-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: var(--font-body);
  background-color: #ff6a00;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.plus-icon {
  width: 16px;
  height: 16px;
  display: block;
}


.create-button:hover {
  background-color: #e55c00;         /* Slightly darker on hover */
}

@media (max-width: 600px) {
  .create-button {
    width: 100%;
    max-width: 240px;
    font-size: 0.8rem;
    align-self: center;
  }
}

</style>

