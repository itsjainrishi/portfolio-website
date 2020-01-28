<template>
  <div class="main">
    <section class="about-container">
      <div class="education-wrapper is-flex">
        <h3 class="heading">Education</h3>
        <div class="content">
          <div class="columns is-multiline">
            <div v-for="degree in about.education" class="column">
              <DegreeComponent :item="degree" />
            </div>
          </div>
        </div>
      </div>
      <div class="tech-wrapper is-flex">
        <h3 class="heading">Technologies I know</h3>
        <div class="content">
          <ul>
            <li v-for="technology in about.skills">
              {{ technology }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DegreeComponent from '@/components/Degree.vue'

export default {
  components: { DegreeComponent },
  async asyncData() {
    const aboutMe = await import('~/content/about/index.md')

    return {
      about: aboutMe.attributes
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  animation-name: fadeInBottom;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 200ms;
}
.is-flex {
  flex-direction: column;
}

.heading {
  margin-bottom: 1em;
}

.about-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: rgb(168, 178, 209);
}

.education-wrapper {
  margin-bottom: 100px;

  .content {
    .column {
      min-width: 33%;
    }
  }
}

.tech-wrapper {
  ul {
    list-style: none;
    column-count: 2;

    li::before {
      content: '\2023';
      font-size: 18px;
      margin-right: 10px;
      color: rgb(100, 255, 218);
    }
  }
}

@media (max-width: 800px) {
  ul {
    padding-left: 40px;
  }
  h2.title {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .heading {
    text-align: center;
  }
  .education-wrapper {
    .content {
      margin-left: 0;
    }
  }
}
</style>
