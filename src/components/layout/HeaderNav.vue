<template>
  <header class="nav">
    <div class="nav-inner">
      <img src="@/assets/img/img_logo_dtt@3x.png" alt="DTT logo" class="logo" />
      <nav class="nav-links">
        <RouterLink to="/" active-class="active-link" exact>Houses</RouterLink>
        <RouterLink to="/about" active-class="active-link" exact
          >About</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 var(--side-pad, 2rem);
  border-bottom: 2px solid var(--accent, #ffffff);
  background: #ffffff;
  z-index: 10;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  gap: 2rem;
  padding-left: 7rem;
  
}
.logo {
  height: 32px;
  padding-left: 0;
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-links a {
  font-weight: 600;
  font-family: var(--font-heading);
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;
  color: #000000;
}

.nav-links ::v-deep(.active-link) {
  color:#E8E8E8;
}

/* .nav-links a[aria-current]::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background: var(--accent);
} */
@media (max-width: 600px) {
  .nav {
    height: 56px;
    flex-direction: column;
  }
  .nav-inner {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    gap: 1rem;
  }
}
</style>
