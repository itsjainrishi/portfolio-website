<template>
  <div class="container">
    <div class="main">
      <section class="jobs__container">
        <div class="job__wrapper columns is-desktop">
          <div class="job__title column is-3">
            <h2 class="title">
              Technical-Intern @Synopsys
            </h2>
          </div>
          <div class="job__description column">
            <p>January 2018 - January 2019</p>
            <ul>
              <li>
                Automate LVS Tests deployment on Sun Grid Engine for Samsung and
                Global Foundry Projects and to have them run in the shortest
                possible time.
              </li>
              <li>
                Automate Analysis of Test Results to generate a concise report.
              </li>
              <li>
                Automated patching of Design Rules based on user input file.
              </li>
              <li>
                Programming in Python, Perl and Tcl in Unix environment.
              </li>
              <li>
                Workd with Distributed Systems
              </li>
            </ul>
          </div>
        </div>
        <div class="job__wrapper columns is-desktop">
          <div class="job__title column is-3">
            <h2 class="title">
              Intern @Tnine
            </h2>
          </div>
          <div class="job__description column">
            <p>May 2016 - December 2016</p>
            <ul>
              <li>
                Developed Backend for in-house apps and client projects.
              </li>
              <li>
                Worked with Google and Facebook API's
              </li>
              <li>
                Coding in Jquery, Laravel
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
