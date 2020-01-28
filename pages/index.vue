<template>
  <div class="main hero is-fullheight">
    <section class="basic-info hero-body">
      <div class="columns">
        <div class="content column is-half">
          <h1 class="subtitle">
            {{ hero.title }}
          </h1>
          <h2 class="title">
            {{ hero.name }}
          </h2>
          <div class="description">
            <p>
              {{ hero.description }}
            </p>
          </div>
          <div class="social-icons">
            <a :href="hero.instagram">
              <i class="icon-instagram"></i>
            </a>
            <a :href="hero.github">
              <i class="icon-github"></i>
            </a>
            <a :href="hero.linkedin">
              <i class="icon-linkedin"></i>
            </a>
            <a :href="hero.angellist">
              <i class="icon-angellist"></i>
            </a>
          </div>
          <a
            href="mailto:bejainrishi@gmail.com?Subject=Hello"
            target="_top"
            class="contact-btn"
          >
            <button class="btn-mail">Contact</button>
          </a>
        </div>
        <div class="avatar-wrapper column">
          <div class="avatar">
            <img
              :data-src="'~/assets/images/about/' + hero.image"
              :data-srcset="
                require('~/assets/images/about/' + hero.image).srcSet
              "
              class="lazyload"
              sizes="(max-width: 350px) 100vw, 350px"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const heroContent = await import('~/content/hero/index.md')

    return {
      hero: heroContent.attributes
    }
  }
}
</script>

<style scoped lang="scss">
[class^='icon-'],
[class*=' icon-'] {
  color: rgb(168, 178, 209);
  font-size: 20px;

  &:hover {
    color: rgb(100, 255, 218);
  }
}

.columns {
  width: 100%;
}

.column {
  padding: 0;
}

.basic-info {
  .content {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.social-icons {
  margin: 3rem 0;

  a {
    margin-right: 16px;
  }
}

.icon-instagram {
  &::before {
    content: '\ea92';
  }
}

.icon-github {
  &::before {
    content: '\eab0';
  }
}

.icon-linkedin {
  &::before {
    content: '\eac9';
  }
}

.icon-angellist {
  &::before {
    content: '\e900';
  }
}

.avatar-wrapper {
  margin-left: 30px;
  text-align: center;
  max-width: 300px;
  .avatar {
    max-height: 300px;
    margin: auto;
  }
}

img {
  border-radius: 3px;
}

.btn-mail {
  color: rgb(100, 255, 218);
  padding: 15px;
  font-size: 14px;
  background: transparent;
  border: 1px solid rgb(100, 255, 218);
  border-radius: 3px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: rgb(100, 255, 218);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: rgb(168, 178, 209);
  word-spacing: 5px;
  padding-bottom: 15px;
}

.description {
  width: 100%;
  max-width: 500px;
  color: rgb(168, 178, 209);
}

@media (max-width: 1023px) {
  .title {
    font-size: 60px;
  }
  .contact-btn {
    margin-bottom: 50px;
  }
}

@media (max-width: 768px) {
  .avatar {
    margin: 60px auto 0;
  }
  .avatar-wrapper {
    margin: auto;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 40px;
  }
  .avatar {
    width: 70%;
  }
}
</style>
