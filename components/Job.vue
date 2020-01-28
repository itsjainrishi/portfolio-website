<template>
  <article class="timeline-box">
    <div class="timeline-box-inner">
      <div :style="basicStyle" class="timeline-icon">
        <i class="icon-pen2"></i>
      </div>
      <div class="timeline-label">
        <h2>
          {{ item.attributes.title }} @
          <span class="org">{{ item.attributes.company }}</span>
          <span class="time">{{ item.attributes.time }}</span>
        </h2>
        <div v-html="item.content" class="description"></div>
      </div>
    </div>
  </article>
</template>

<script>
import Colors from '~/plugins/colors'

export default {
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    basicStyle() {
      return {
        background: this.randomColor()
      }
    }
  },
  methods: {
    randomColor() {
      let result = ''
      let count = 0
      for (const color in Colors)
        if (Math.random() < 1 / ++count) result = color
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-box {
  position: relative;
  margin-top: 5px;
  margin-left: 30px;
  margin-bottom: 20px;
  clear: both;
}

.timeline-box-inner {
  position: relative;
  margin-left: -20px;
}

.timeline-icon {
  height: 40px;
  width: 40px;
  float: left;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  box-shadow: 0 0 0 5px rgb(100, 255, 218);
}

.icon-pen2 {
  color: white;

  &::before {
    content: '\e906';
  }
}

.timeline-label {
  position: relative;
  background: #f2f3f7;
  padding: 1.5em;
  margin-left: 60px;
  background: rgb(23, 42, 69);
  color: rgb(168, 178, 209);

  h2 {
    font-size: 20px;
    margin: 0 0 30px;

    .time {
      opacity: 0.6;
      font-size: 16px;
    }
    .org {
      color: rgb(100, 255, 218);
    }
  }

  .description {
    /deep/ ul {
      li {
        padding-left: 30px;
        &::before {
          content: '\2023';
          position: absolute;
          left: 30px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
