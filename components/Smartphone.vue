<template>
  <div class="component">
    <h2>{{ spec.name }}</h2>
    <ul>
      <li>ID：{{ spec.id }}</li>
      <li>会社：{{ spec.vendor }}</li>
    </ul>
    <button v-on:click="onClickButton">この商品を買う</button>
  </div>
</template>
<script>
export default {
  props: ['spec'], // プロパティ
  methods: {
    onClickButton() { // ボタンのイベントハンドラー
      this.$emit('phoneSelected', this.spec) // カスタムイベント発生
    }
  }
}
</script>
<style scoped>
.component {
  border:1px solid black;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffafaf;
}
</style>
