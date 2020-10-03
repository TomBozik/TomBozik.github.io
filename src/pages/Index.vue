<template>
  <Layout>
    <main>
      <div class="content">
        <div class="txt">
          Na stránke sa pracuje
          <span style="--i:1;">.</span>
          <span style="--i:2;">.</span>
          <span style="--i:3;">.</span>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Domov",
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: auto;
  padding-left: 5vh;
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  justify-content: center;
  color: var(--text-primary);
  overflow: hidden;

  .content {
    padding: 20px;
    width: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 25px;
    font-weight: 700;
  }  
}

@media only screen and (max-width: 600px) {
  main {
    padding-left: 0;
    min-height: 94vh;
    max-height: 94vh;
  }
}


.txt span {
    display: inline-block;
    animation: animate 1.5s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i));
    padding-left: 2px;
}
@keyframes animate {
    0% {
        transform: translateY(0px);
    }
    20% {
        transform: translateY(-20px);
    }
    40%{
        transform: translateY(0px);
    }
}
</style>
