<template>
  <div class="project-wrapper">
    <div class="bar">
      <h2>{{ item.attributes.title }}</h2>
      <i />
    </div>
    <div class="img-container">
      <img
        :data-src="'~/assets/' + item.attributes.image"
        :data-srcset="
          require('~/assets/images/projects/' + item.attributes.image).srcSet
        "
        :alt="item.attributes.title"
        class="lazyload"
        sizes="(max-width: 700px) 100vw, 700px"
      />
    </div>
    <div class="project-content">
      <div v-html="item.content" class="project-description"></div>
      <ul class="tech-list">
        <li v-for="techSkill in item.attributes.tech">
          {{ techSkill }}
        </li>
      </ul>
      <div class="link-wrapper">
        <a :href="item.attributes.github" class="link-github">
          <i class="icon-github" />
        </a>
        <a :href="item.attributes.external" class="link-external">
          <i class="icon-external" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
.project-wrapper {
  position: relative;
  padding: 0;
  margin-bottom: 75px;
  animation-name: fadeInBottom;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 200ms;
}

.bar {
  display: block;
  position: relative;
  height: 24px;
  background-color: #ddd;
  width: 100%;
  color: #6a6a6a;
  z-index: 10;

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
  }

  i {
    height: 12px;
    width: 12px;
    display: inline-block;
    background-color: #ff5f57;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 10px;

    &::before {
      content: ' ';
      position: absolute;
      left: 16px;
      top: 0;
      display: inline-block;
      background-color: #ffbd2e;
      height: 12px;
      width: 12px;
      border-radius: 50%;
    }

    &::after {
      content: ' ';
      position: absolute;
      left: 32px;
      top: 0;
      display: inline-block;
      background-color: #28ca41;
      height: 12px;
      width: 12px;
      border-radius: 50%;
    }
  }
}

.img-container {
  box-shadow: 8px 8px 8px rgb(168, 178, 209);
  margin-bottom: 40px;
}

.project-content {
  position: relative;
  color: rgb(168, 178, 209);
  background-color: rgb(23, 42, 69);
  z-index: 1000;
}

.project-description {
  position: relative;
  padding: 25px 25px 20px 25px;
  border-radius: 3px;
  font-size: 18px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px 10px;

  li {
    margin-left: 25px;
  }
}

.link-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 24px;
}

[class^='link-'],
[class*=' link-'] {
  padding: 10px;
  color: rgb(168, 178, 209);
}

.icon-github {
  &::before {
    content: '\eab0';
  }
}

.icon-external:before {
  content: '\ea7d';
}

[class^='icon-'],
[class*=' icon-'] {
  &:hover {
    color: rgb(100, 255, 218);
  }
}
</style>
