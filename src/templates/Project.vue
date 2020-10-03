<template>
  <Layout>
    <main>
      <div class="content">
        {{$page.project.title}}
        <div v-html="$page.project.content"></div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query ($id: ID!){
    project(id: $id){
      title
      content
    }
  }
</page-query>

<script>
export default {
  name: 'ProjectTemplate',
  metaInfo() {
    return {
      title: this.$page.project.title,
    }
  }
}
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