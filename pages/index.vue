<template>
  <div>
    <h1>Hello {{name}}!</h1> <!-- nameの表示 …（1） -->
    <input v-model="name"><!-- nameの入力 …（2）-->
  </div>
</template>
<script>
export default {
  data() { // ページに表示するデータの指定 …（3）
    return {
      name: 'World' // nameの初期値 …（4）
    }
  }
}
</script>