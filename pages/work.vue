<template>
  <div class="container">
    <div class="main">
      <li v-for="project in projects">
        {{ project.title }} <br />
        {{ project.description }}
      </li>
    </div>
  </div>
</template>

<script>
import Projects from '~/content/projects/index'

export default {
  asyncData() {
    async function asyncImport(project) {
      const wholeMD = await import(`~/content/projects/${project}.md`)
      return wholeMD.attributes
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 100px;
}
.links {
  padding-top: 15px;
}
.main {
  width: 100%;
  padding: 150px 0px;

  .basic__info {
    .content {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
