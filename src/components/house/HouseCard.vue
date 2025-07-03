<template>
   <div class=" house-container">
    <div class="house-card">
      <img src="@/assets/img/img_placeholder_house@3x.png" alt="House" class="house-image" />
       <div class="house-details">
        <h3 class="house-title">Stokvisstraat 132</h3>
        <p class="house-price">€500.000</p>
        <p class="house-location">1011AA Amsterdam</p> 
        <div class="features">
          <div class="feature">
            <img src="@/assets/img/icons/ic_bed@3x.png" alt="Bed" />
            <span>1</span>
          </div>
          <div class="feature">
            <img src="@/assets/img/icons/ic_bath@3x.png" alt="Bath" />
            <span>1</span>
          </div>
          <div class="feature">
            <img src="@/assets/img/icons/ic_size@3x.png" alt="Size" />
            <span>120 m²</span>
          </div>
        </div> 
      </div>


    </div>

    <div class="house-card">
      <img src="@/assets/img/img_placeholder_house@3x.png" alt="House" class="house-image" />
       <div class="house-details">
        <h3 class="house-title">Stokvisstraat 132</h3>
        <p class="house-price">€500.000</p>
        <p class="house-location">1011AA Amsterdam</p> 
        <div class="features">
          <div class="feature">
            <img src="@/assets/img/icons/ic_bed@3x.png" alt="Bed" />
            <span>1</span>
          </div>
          <div class="feature">
            <img src="@/assets/img/icons/ic_bath@3x.png" alt="Bath" />
            <span>1</span>
          </div>
          <div class="feature">
            <img src="@/assets/img/icons/ic_size@3x.png" alt="Size" />
            <span>120 m²</span>
          </div>
        </div>
      </div>


    </div>

   </div>   
</template>

<script>
export default {
  name: "HousesList",
};
</script>

<style scoped>
.house-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  
  width: 100%;
  /* max-width: 100%; */
  margin: 0 auto;
 
}

.house-card {
  display: flex;
  align-items: center;
  width: 800px;
  max-width: 1000px;
  margin-left: 0;
  background-color: var(--color-bg);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 3rem 1rem 1rem; /* More right-side inner space */
  overflow: hidden;
  
}

.house-image {
  width: 120px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1.5rem;
}

.house-details {
  flex: 1;
}

.house-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: var(--h2-desktop);
  font-weight: 600;
  color: var(--color-text);
}

.house-price {
  margin: 4px 0;
  font-size: var(--text-listing);
  font-weight: 500;
  color: var(--color-text);
}

.house-location {
  font-size: var(--text-input);
  color: #888;
  margin-bottom: 0.5rem;
}

.features {
  display: flex;
  gap: 1.5rem;
  font-size: var(--text-input);
  color: var(--color-text);
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.feature img {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .house-container {
    padding: 0 1rem;
  }

  .house-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .house-image {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}


</style>