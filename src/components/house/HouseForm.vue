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
             <div class="form-group-1">
                <label for="postal-code" class="form-label">Postal code*</label>
                <input id="postal-code" type="text" placeholder="e.g.1000 AA" />
            </div>
            <div class="form-group-1">
                <label for="city" class="form-label">City*</label>
                <input id="city" type="text" placeholder="e.g.1000 AA" />
            </div>
            <div class="form-group-1">
                <label for="price" class="form-label">Upload picture*</label>
                <div class="upload-box">
                  <input type="file" id="upload" class="file-input" accept="image/*"/>
                  <img src="@/assets/img/icons/ic_upload@3x.png" alt="Add" class="plus-icon"/>             
                </div>
            </div>
            <div class="form-group-1">
                <label for="price" class="form-label">Price*</label>
                <input id="price" type="text" placeholder="e.g." />
            </div>
            <div class="form-group-2">
              <div class="house-size">
                <label for="size" class="form-label">Size*</label>
                <input id="size" type="text" placeholder="e.g.60m2" />
              </div>
              <div class="house-garage">
                <label for="garage" class="form-label">Garage</label>
                <select id="garage-select" class="form-select">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
             </div>
             <div class="form-group-2">
              <div class="house-bedrooms">
                <label for="bedrooms" class="form-label">Bedrooms*</label>
                <input id="bedrooms" type="text" placeholder="Enter amount" />
              </div>
              <div class="house-bathrooms">
                <label for="bathrooms" class="form-label">Bathrooms</label>
                <input id="bathrooms" type="text" placeholder="Enter amount" />
              </div>
             </div>
             <div class="form-group-1">
                <label for="construction" class="form-label">Construction*</label>
                <input id="street-name" type="text" placeholder="e.g.1990" />
            </div>
            <div class="form-group-1">
                <label for="description" class="form-label">Description*</label>
                <textarea id="description" placeholder="Enter description"></textarea>
            </div>
            <div class="post-button">
              <button type="submit" class="form-button">
                 Post
              </button>
            </div>



        </div>
    </div>
</template>

<style scoped>

 .create-listing {
   height: 100vh;
   margin-top: 1px;               
   display: flex; 
   justify-content: flex-start;    
   align-items: flex-start;  
   padding: 2rem;
   box-sizing: border-box;
   /* min-height: 100vh; */
   overflow-y: auto;

}

  .form-container {
    display: flex; 
    flex-direction: column;
    gap: 1rem;
    margin-left: 13rem; 
    width: 100%;
    max-width: 500px;
    padding: 2rem;
    overflow-y: visible;
    
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

  .form-label  {
      font-size: var(--text-input-desktop);
      font-weight: var(--weight-bold);
      font-family: var(--font-body);
      color: var(--color-text-secondary)
  }

  input,select,textarea {
  border: none;
  font-family: var(--font-body);
  font-size: var(--text-input-desktop);
  border-radius: 8px;
  padding: 0.75rem 1rem;

  }

  .form-group-2 {
    display: flex;
    flex-direction: row;
    gap: 2rem;

  }

  .form-group-3 {
    display: flex;
    flex-direction: column;
}
    

.upload-box {
  position: relative;
  width: 160px;
  height: 160px;
  border: 2px dashed #C3C8D4;
  border-radius: 8px;
  background-color: #F5F7FA;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.3s ease;
}

.upload-box:hover {
  border-color: #999;
}

.file-input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

.plus-icon {
  width: 28px;
  height: 28px;
  z-index: 0;
  pointer-events: none; 
}

.house-size,
.house-garage {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
}

textarea {
  min-height: 160px;
  font-family: var(--font-body);
  font-size: var(--text-input-desktop);
 }

.post-button {
  display: flex;
  justify-content: flex-end; /* Pushes button to the right */
  margin-top: 1rem;
  }

  .form-button {
  padding: 0.75rem 5rem;
  font-size: var(--button-tab-desktop);
  font-family: var(--font-body);
  font-weight: var(--weight-bold);
  background-color: var(--color-primary);/* Deep navy tone */
  color: var(--color-tertiary-1);
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(228, 200, 200, 0.12); /* Soft elevation */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.form-button:hover {
  background-color: #2f3b5c; /* Slight hover shift */
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .create-listing {
    padding: 1rem;
    margin-top: 0;
    flex-direction: column;
  }

  .form-container {
    margin-left: 0;
    padding: 1rem;
    max-width: 100%;
  }

  .form-group-2 {
    flex-direction: column;
    gap: 1rem; /* stack vertical for mobile */
  }

  .post-button {
    justify-content: center; /* optionally center on small screens */
  }

  .form-button {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem; /* fallback if var isn’t responsive */
  }

  textarea {
    min-height: 180px; /* roomier for mobile typing */
  }

  .upload-box {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
}

</style>