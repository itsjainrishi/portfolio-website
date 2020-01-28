<template>
  <nav class="navbar" role="navigation" aria-label="main-navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img src="~/assets/R.svg" width="70" />
      </nuxt-link>

      <a role="button" class="navbar-burger burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        <nuxt-link class="navbar-item" to="/experience">Experience</nuxt-link>
        <nuxt-link class="navbar-item" to="/work">Work</nuxt-link>
        <a class="navbar-item resume" href="/Resume.pdf" download>
          <button class="btn-resume">Resume</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
a {
  color: rgb(168, 178, 209);

  &:hover {
    background: transparent;
    color: rgb(100, 255, 218);
  }

  &.nuxt-link-active,
  &.nuxt-link-exact-active {
    background: transparent;
    color: rgb(100, 255, 218);
  }

  &.resume:focus {
    background: transparent;
    color: rgb(168, 178, 209);
  }
}

.btn-resume {
  color: rgb(100, 255, 218);
  padding: 10px;
  font-size: 14px;
  background: transparent;
  border: 1px solid rgb(100, 255, 218);
  border-radius: 3px;
}

.navbar {
  margin: auto;
  position: fixed;
  width: 100%;
  height: 70px;
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;
  background-color: rgb(10, 25, 47);
  z-index: 9999;
}

svg {
  height: 18px;
  width: 18px;
  height: 3.0625em;
  line-height: 3.0625em;
}

.navbar-item {
  img {
    max-height: 40px;
  }
}
</style>
