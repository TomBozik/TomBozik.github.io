<template>
  <Layout>
    <main>
      <div class="content">
        {{ $page.project.title }}
        <div v-html="$page.project.content"></div>

        Funkcie:
        <div class="functions">
          <div v-for="func in $page.project.functions" :key="func.id">
            {{ func }}
          </div>
        </div>

        Stack:
        <div class="stack">
          <div v-for="s in $page.project.stack" :key="s.id">
            {{ s }}
          </div>
        </div>

        <div class="gallery">
          <div v-for="image in $page.project.images" :key="image.id">
            <a :href="image.image.src" target="_blank"
              ><g-image :src="image.preview.src" class="preview-img"
            /></a>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query ($id: ID!){
    project(id: $id){
      title
      content
      functions
      stack
      cover (width: 703, height: 498, quality: 80, fit:cover)
      images {
        preview: image (width: 608, height: 430, fit: cover)
        image
      }
    }
  }
</page-query>

<script>
export default {
  name: "ProjectTemplate",
  metaInfo() {
    return {
      title: this.$page.project.title,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: auto;
  padding-left: 5vh;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  color: var(--text-primary);

  .content {
    padding: 20px;
    max-width: 1100px;
    width: 100%;
  }
}

.preview-img {
  filter: grayscale(100%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.1s ease-out;

  &:hover {
    filter: grayscale(0%);
    transform: translateY(-5px);
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}

@media only screen and (max-width: 600px) {
  main {
    padding-left: 0;
    margin-bottom: 6vh;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }
}
</style>
