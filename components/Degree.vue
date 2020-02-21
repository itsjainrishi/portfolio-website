<template>
  <div class="card">
    <div class="card-content">
      <img src="~/assets/images/grad-cap.png" />
      <h4>{{ item.qualification }}</h4>
      <p>
        I completed my {{ item.qualification }} from
        {{ item.university }} located at {{ item.location }} in {{ item.time }}
      </p>
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

<style lang="scss" scoped>
.card {
  background-color: rgb(23, 42, 69);
  color: rgb(168, 178, 209);
}
.card-content {
  padding: 30px 10px;
  text-align: center;
}
img {
  margin-bottom: 30px;
}
h4 {
  margin-bottom: 20px;
  color: rgb(100, 255, 218);
}
</style>
