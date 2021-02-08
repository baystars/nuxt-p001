<template>
  <div class="component">
    <div>{{ $store.state.name }}さん</div>
    <div>BMI：{{ BMI.toFixed(2) }}</div>
    <div>（身長：{{ $store.state.height }}cm、体重：{{ $store.state.weight }}kg）</div>
  </div>
</template>
<script>
export default {
  computed: {
    BMI() {
      return this.$store.state.weight
             / Math.pow((this.$store.state.height / 100), 2)
    }
  }
}
</script>
<style scoped>
.component {
  background-color: #aaccff;
  border: 1px solid black;
  padding: 10px;
}
</style>
