<template>
  <nav>
    <div class="nav-links">
      <div class="menu-item"><g-link to="/">Domov</g-link></div>
      <div class="menu-item"><g-link to="/project">Projekty</g-link></div>
      <div class="menu-item"><g-link to="/about">O mne</g-link></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>

nav {
  position: fixed;
  bottom: 0;
  height: 6vh;
  width: 100vw;
  background: black;
  z-index: 10;
}

.nav-links {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

}

.menu-item {
  width: 100%;
  text-align: center;
  .active--exact {
    color: var(--text-secondary);
  }

}

a {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    color: var(--text-secondary);
  }
}

@media only screen and (min-width: 700px) {
   nav {
    padding-left: 2vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 0vh;
    justify-content: center;
  }

  .nav-links {
    display: flex;
    writing-mode: vertical-rl;
    justify-content: center;
    transform: rotate(180deg);
  }

  .menu-item {
    margin-top: 20px;
    .active--exact {
      color: var(--text-secondary);
    }
  }

  a {
    font-size: 16px;
    display: inline-block;  // safari ...
    white-space: nowrap;    // safari ...
  }

}

</style>
