<template>
  <div class="container">
    <div class="main">
      <section class="basic__info columns">
        <div class="content column">
          <h1 class="subtitle">
            Hi, I am
          </h1>
          <h2 class="title">
            Rishi Jain
          </h2>
          <div class="description">
            <p>
              A software engineer with experience in Laravel, Jquery, Python,
              Perl and VueJS that strives to build high quality websites and
              applications.
            </p>
          </div>
        </div>
        <div class="avatar column">
          <div class="card">
            <div class="card-image">
              <figure>
                <img src="~/assets/me.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
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

.avatar {
  width: 40%;
  margin-left: 30px;

  .card {
    border-radius: 3px;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.description {
  width: 100%;
  max-width: 500px;
}

@media (max-width: 1024px) {
  .title {
    font-size: 60px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 50px;
  }
  .avatar {
    margin: 60px auto 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 20px;
  }
  .title {
    font-size: 40px;
  }
  .avatar {
    width: 70%;
  }
}
</style>
