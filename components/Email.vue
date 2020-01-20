<template>
  <div class="side__containeremail">
    <div class="email__wrapper">
      <a class="email__link">
        irishijain96@gmail.com
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.side__containeremail {
  position: fixed;
  width: 40px;
  bottom: 0px;
  left: auto;
  right: 40px;
}

.email__wrapper::after {
  content: '';
  height: 90px;
  margin: 0px auto;
  display: block;
  width: 1px;
  background-color: #000000;
}

.email__link {
  margin: 20px auto;
  padding: 10px;
  writing-mode: vertical-lr;
  color: #987284;
}

@media (max-width: 800px) {
  .side__containeremail {
    display: none;
  }
}
</style>
