<template>
  <div class="main">
    <section class="experience is-flex">
      <h3 class="heading">Work Experience</h3>
      <div class="jobs-container">
        <div class="timeline">
          <job-component
            v-for="(job, index) in jobs"
            :item="job"
            :key="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Jobs from '@/content/jobs'
import JobComponent from '@/components/Job.vue'

export default {
  components: { JobComponent },
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
.experience {
  flex-direction: column;
  position: relative;
}

.timeline {
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    display: block;
    width: 4px;
    background: rgb(100, 255, 218);
    margin-left: 29px;
  }
  &:last-child::after {
    content: '';
    position: absolute;
    bottom: 0px;
    height: 20px;
    width: 20px;
    margin-left: 20px;
    float: left;
    border-radius: 50%;
    line-height: 40px;
    box-shadow: 0 0 0 5px rgb(100, 255, 218);
  }
}

@media (max-width: 768px) {
  .heading {
    text-align: center;
  }
}
</style>
