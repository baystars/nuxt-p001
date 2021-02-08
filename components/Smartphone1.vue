<template>
  <div class="component">
    <h2>{{ spec.name }}</h2>
    <ul>
      <li>ID：{{ spec.id }}</li>
      <li>会社：{{ spec.vendor }}</li>
      <li>価格：{{ spec.price }}</li>
      <li>5G対応：{{ spec.is5G === true ? 'はい' : 'いいえ' }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['spec']
}
</script>
<style scoped>
.component {
  background-color: #ffafaf;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
