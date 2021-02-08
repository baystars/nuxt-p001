<template>
  <div class="component">
    <h2>{{ name }}</h2>
    <ul>
      <li>ID：{{ id }}</li>
      <li>会社：{{ vendor }}</li>
      <li>価格：{{ price }}</li>
      <li>5G対応：{{ is5G === true ? 'はい' : 'いいえ' }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['id', 'vendor', 'name', 'price', 'is5G'] // プロパティ
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
