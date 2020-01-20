<template>
  <div class="container">
    <div class="main">
      <section class="about__container">
        <div class="background__wrapper columns is-desktop">
          <div class="background__title column is-3">
            <h2 class="title">Background</h2>
          </div>
          <div class="background__info column">
            <ul>
              <li>
                <p>
                  I obtained my B.Tech Degree in Computer Science from B.M.L.
                  Munjal University, Gurgaon.
                </p>
              </li>
              <li>
                <p>
                  For the past year I have been working on something of my own
                  in Edtech.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="tech__stack columns is-desktop">
          <div class="tech__title column is-3">
            <h2 class="title">Tech Stack</h2>
          </div>
          <div class="tech__info column">
            <img src="~/assets/sql.svg" />
            <img src="~/assets/mongodb.svg" />
            <img src="~/assets/laravel.svg" />
            <img src="~/assets/vuejs.svg" />
            <img src="~/assets/python.svg" />
          </div>
        </div>
        <div class="interests__wrapper columns is-desktop">
          <div class="interests__title column is-3">
            <h2 class="title">Interests</h2>
          </div>
          <div class="interests__info column">
            <ul>
              <li>
                <p>
                  I like to work with computer vision models.
                </p>
              </li>
              <li>
                <p>
                  Football is my favorite sport to watch. Visca el Barca.
                </p>
              </li>
              <li>
                <p>
                  I enjoy playing multiplayer PC games.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
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

  .about__container {
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
  }
}

.tech__info {
  img {
    max-width: 15%;
    height: auto;
    vertical-align: middle;
    margin-left: 1%;
    margin-right: 1%;
  }
}

.title {
  font-family: 'Amatic SC', cursive;
  font-size: 50px;
}

ul {
  list-style: disc;
}

@media (max-width: 800px) {
  .hero {
    padding: 100px 0;
  }
  .column {
    width: 100%;
  }
  .background__wrapper {
    text-align: center;
    padding: 20px;

    .background__info {
      text-align: left;
    }
  }
  .interests__wrapper {
    text-align: center;
    padding: 20px;

    .interests__info {
      text-align: left;
    }
  }
  .tech__stack {
    text-align: center;
    padding: 20px;
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
