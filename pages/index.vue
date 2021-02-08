<template>
  <div class="container">
    <h1>基本的なコンポーネントの例</h1>
    <Apple/><!-- Appleコンポーネント -->
    <Samsung/><!-- Samsungコンポーネント -->
  </div>
</template>
<script>
// コンポーネントを参照
import Apple from '~/components/Apple'
import Samsung from '~/components/Samsung'
// ページ実装部
export default {
  // 利用するコンポーネントを定義
  components: {
    Apple,
    Samsung
  }
}
</script>
<style scoped>
.container {
  margin: 10px;
}
</style>
