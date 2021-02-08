<template>
  <div class="container">
    <h1>プロパティに値を直接設定</h1>
    <Smartphone id="1" vendor="Apple" name="iPhone 11" price="74800" is5G="false"/>
    <h1>v-bindで変数を設定</h1>
    <Smartphone
      v-bind:id="phoneId"
      v-bind:vendor="phoneVendor"
      v-bind:name="phoneName"
      v-bind:price="phonePrice"
      v-bind:is5G="phoneIs5G"/>
  </div>
</template>
<script>
import Smartphone from '~/components/Smartphone'
export default {
  components: {
    Smartphone
  },
  data() {
    return {
      phoneId: 2,
      phoneVendor: 'Samsung',
      phoneName: 'Galaxy Note10+ 5G',
      phonePrice: 140000,
      phoneIs5G: true
    }
  }
}
</script>
<style>
.container {
  margin: 10px;
}
</style>
