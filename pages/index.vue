<template>
  <div class="container">
    <h1>オブジェクトをそのまま設定</h1>
    <Smartphone1 v-bind:spec="phoneSpec"/>
    <h1>オブジェクトのプロパティを設定</h1>
    <Smartphone2 v-bind="phoneSpec"/>
  </div>
</template>
<script>
import Smartphone1 from '~/components/Smartphone1'
import Smartphone2 from '~/components/Smartphone2'
export default {
  components: {
    Smartphone1,
    Smartphone2
  },
  data() {
    return {
      phoneSpec: { // コンポーネントに設定するJavaScriptオブジェクト
        id: 1,
        vendor: 'Samsung',
        name: 'Galaxy Note10+ 5G',
        price: 140000,
        is5G: true
      }
    }
  }
}
</script>
<style>
.container {
  margin: 10px;
}
</style>
