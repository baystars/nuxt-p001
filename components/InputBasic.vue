<template>
  <div class="component">
    <!-- テキストボックス -->
    氏名：<input v-model="name" v-on:input="onInput">
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ''  // テキストボックスの入力内容
    }
  },
  methods: {
    onInput() { // テキストボックス変更時の処理
      this.$store.commit('setName', this.name) // ミューテーション
    }
  }
}
</script>
<style scoped>
.component {
  background-color: #ffaacc;
  border: 1px solid black;
  padding: 10px;
}
</style>
