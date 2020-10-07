<template>
  <Layout>
    <div class="content">
      <div class="txt-container">
        <div class="txt">
          <div class="heading">Tomáš Božik</div>
          <div class="sub-heading">web developer</div>
        </div>
      </div>
      <div class="img-container">
        <g-image src="~/assets/me2.png" class="img"/>
      </div>
    </div>
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

.content{
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 94vh;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.txt-container {
  text-align: center;
  width: 100%;
}

.heading {
  font-size: 2.5rem;
  font-weight: 700;
}

.sub-heading {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.img-container {
  display: flex;
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .content{
    flex-direction: row;
    max-width: 1100px;
    min-height: 100vh;
    margin: auto;
  }
  .txt-container {
    position: relative;
    text-align: center;
    width: 50%;
  }
  .img-container {
    width: 50%;
  }
  .img {
    width: 100%;
  }
  .txt {
    position: absolute;
    right: -100px;
  }
  .heading {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4rem;
  }
  .sub-heading {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: start;
    padding-left: 10px;
  }
}

</style>
