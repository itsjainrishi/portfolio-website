<template>
  <nav class="navbar" role="navigation" aria-label="main-navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
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
        <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        <a class="navbar-item" href="">
          <IconGithub />
        </a>
        <a class="navbar-item" href="">
          <IconInstagram />
        </a>
        <a class="navbar-item" href="">
          <IconLinkedin />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import IconGithub from './icons/Github'
import IconInstagram from './icons/Instagram'
import IconLinkedin from './icons/Linkedin'

export default {
  components: {
    IconGithub,
    IconInstagram,
    IconLinkedin
  }
}
</script>

<style scoped>
.navbar {
  margin: auto;
  position: fixed;
  width: 100%;
}
svg {
  height: 18px;
  width: 18px;
  height: 3.0625em;
  line-height: 3.0625em;
}
</style>
