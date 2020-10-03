<template>
  <Layout>
    <main>
      <div class="content">
        O mne
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "O mne",
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
    max-width: 1100px;
    width: 100%;
    overflow-y: auto;
  }  
}

@media only screen and (max-width: 600px) {
  main {
    padding-left: 0;
    min-height: 94vh;
    max-height: 94vh;
  }
}
</style>