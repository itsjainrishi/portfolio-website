<template>
  <div class="container">
    <div class="main">
      <section class="jobs__container">
        <div v-for="job in jobs" class="job__wrapper columns is-desktop">
          <div class="job__title column is-3">
            <h2 class="title">
              {{ job.attributes.title }} @ {{ job.attributes.company }}
            </h2>
          </div>
          <div class="job__description column">
            <p>{{ job.attributes.time }}</p>
            <div v-html="job.content"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Jobs from '~/content/jobs/index'

export default {
  asyncData() {
    async function asyncImport(job) {
      const jobCont = await import(`~/content/jobs/${job}.md`)
      return {
        attributes: jobCont.attributes,
        content: jobCont.html
      }
    }

    return Promise.all(Jobs.map((job) => asyncImport(job))).then((res) => {
      return {
        jobs: res
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 100px;
}

.main {
  width: 100%;
  padding: 150px 0px;

  .jobs__container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.columns {
  padding: 20px 0;
  align-items: center;

  .column {
    padding: 20px;
  }

  .column.is-3 {
    margin-right: 20px;
  }

  ul {
    font-size: 18px;
    list-style: disclosure-closed;
  }
}

.title {
  font-family: 'Amatic SC', cursive;
  font-size: 40px;
}

.job__description {
  p {
    margin-bottom: 20px;
  }
}
@media (max-width: 800px) {
  .column {
    width: 100%;
  }
  .job__wrapper {
    text-align: center;
    padding: 20px;

    .job__description {
      text-align: left;
    }

    p {
      text-align: center;
    }
  }
  ul {
    padding-left: 40px;
  }
  h2.title {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 50px;
  }
  .main {
    padding: 100px 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 20px;
  }
}
</style>
