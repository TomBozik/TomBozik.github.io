<template>
  <Layout>
    <main>
      <div class="content">
        Projekty
        <div v-for="project in $page.allProject.edges" :key="project.id">
          <a :href="project.node.path">{{project.node.title}}</a>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query{
    allProject {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Projekty",
  },
};
</script>

<style lang="scss">
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