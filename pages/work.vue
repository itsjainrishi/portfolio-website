<template>
  <div class="main">
    <section class="projects-container is-flex">
      <h3 class="heading">Some Things I have built</h3>
      <div class="columns is-multiline">
        <ProjectComponent
          v-for="project in projects"
          :item="project"
          class="column is-5 is-offset-1"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Projects from '@/content/projects'
import ProjectComponent from '@/components/Project.vue'

export default {
  components: { ProjectComponent },
  asyncData() {
    async function asyncImport(project) {
      const projInfo = await import(`~/content/projects/${project}.md`)
      return {
        attributes: projInfo.attributes,
        content: projInfo.html
      }
    }

    return Promise.all(Projects.map((project) => asyncImport(project))).then(
      (res) => {
        return {
          projects: res
        }
      }
    )
  }
}
</script>

<style lang="scss" scoped>
.projects-container {
  flex-direction: column;
  position: relative;
}

.columns {
  margin: auto;
}

.column {
  max-width: 40%;
  &:nth-of-type(2n + 1) {
    margin-left: 5.333%;
  }
}

@media (max-width: 768px) {
  .column {
    max-width: 100%;

    &:nth-of-type(2n + 1) {
      margin-left: 0;
    }
  }
}
</style>
