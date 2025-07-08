<template>
    <div class="create-listing">
        <div class="form-container">
            <div class="form-back">
                <div class="arrow-img">
                    <img src="@/assets/img/icons/ic_back_grey@3x.png" alt="back" />
                </div>
                <div class="back-text">
                    <p>Back to overview</p>
                </div>
            </div>
            <div class="Create-new-title">
                <p>Create new listing</p>
            </div>
            <div class="form-group-1">
                <label for="street-name" class="form-label">Street name*</label>
                <input id="street-name" type="text" placeholder="Enter the street name" />
            </div>
            <div class="form-group-2">
              <div class="house-number">
                <label for="house-number" class="form-label">House number*</label>
                <input id="house-number" type="text" placeholder="Enter house number" />
              </div>
              <div class="addition">
                <label for="addition" class="form-label">Addition (optional)</label>
                <input id="addition" type="text" placeholder="e.g,A" />
              </div>
             </div>
             <div class="form-group-3">
                <label for="postal-code" class="form-label">Postal code*</label>
                <input id="postal-code" type="text" placeholder="e.g.1000 AA" />
            </div>
            <div class="form-group-3">
                <label for="city" class="form-label">City*</label>
                <input id="city" type="text" placeholder="e.g.1000 AA" />
            </div>
            <div class="form-group-3">
                <label for="size" class="form-label">Size*</label>
                <input id="size" type="text" placeholder="e.g." />
            </div>
            <div class="form-group-2">
              <div class="house-number">
                <label for="house-number" class="form-label">House number*</label>
                <input id="house-number" type="text" placeholder="Enter house number" />
              </div>
              <div class="addition">
                <label for="addition" class="form-label">Addition (optional)</label>
                <input id="addition" type="text" placeholder="e.g,A" />
              </div>
             </div>



        </div>
    </div>
</template>

<style scoped>

 .create-listing {
   min-height: calc(100vh - 80px); /* full height minus header if needed */
   margin-top: 64px;               /* aligns just below header */
   display: flex; 
   justify-content: flex-start;    
   align-items: flex-start;  
   padding: 2rem;
   box-sizing: border-box; 
}

  .form-container {
    display: flex; 
    flex-direction: column;
    gap: 1rem;
    margin-left: 15rem; 
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

  .form-back {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .arrow-img img{
    width: 16px;
    height: 16px;
    object-fit: contain;
    display: block;
    

  }

  .back-text p {
   font-size: var(--text-body-desktop);
   font-family: var(--font-body);
   font-weight: var(--weight-bold);
   margin: 0;
   line-height: 1;

  }

  .Create-new-title p {
    font-family: var(--font-heading);
    font-size: var(--h1-desktop);
    font-weight: var(--weight-bold);
  }

  .form-group-1 {
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
  }

  .form-group-1 label {
      font-size: var(--text-body-desktop);
      font-weight: var(--weight-regular);
      font-family: var(--font-body);
  }

  .form-group-2 {
    display: flex;
    flex-direction: row;

  }

  .form-group-3 {
    display: flex;
    flex-direction: column;



  }
      





  

  @media (max-width: 768px) {
  .create-listing {
    padding: 1rem;
  }

  .form-container {
    padding: 1rem;
    max-width: 100%;              /* stretch to full width on small screens */
  }}
</style>