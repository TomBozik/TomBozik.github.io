<template>
  <nav>
    <div class="nav-links">
      <div class="menu-item"><g-link to="/">Domov</g-link></div>
      <div class="menu-item"><g-link to="/projects">Projekty</g-link></div>
      <div class="menu-item"><g-link to="/about">O mne</g-link></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
@media only screen and (min-width: 600px) {
  nav {
    padding-left: 3vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    .nav-links {
      display:flex;
      writing-mode: vertical-rl;
      transform:rotate(180deg);
      
      .menu-item {
        margin-top: 20px;
        .active--exact {
          color: var(--text-secondary);;
        }

        a{
          color: var(--text-primary);
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;

          &:hover {
            color: var(--text-secondary);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
	nav {
    position: fixed;
    bottom: 0;
    height: 6vh;
		width: 100vw;

    .nav-links {
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      
      .menu-item {
        width: 100%;
        text-align: center;
        .active--exact {
          color: var(--text-secondary);;
        }
          a{
            color: var(--text-primary);
            text-decoration: none;
            font-size: 18px;
            font-weight: 600;

            &:hover {
              color: var(--text-secondary);
            }
        }
      }
    }
	}
}

a.active--exact.active {
    color: blue;
}
</style>
