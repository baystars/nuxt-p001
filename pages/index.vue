<template>
  <div class="container">
    <h1>コンポーネントの切り替え表示</h1>
      <button v-on:click="onClickApple">Apple</button>
      <button v-on:click="onClickSamsung">Samsung</button>
      <button v-on:click="onClickSHARP">SHARP</button>
    <div v-bind:is="currentComponent"/><!-- コンポーネント表示 -->
  </div>
</template>
<script>
import Apple from '~/components/Apple'
import Samsung from '~/components/Samsung'
import SHARP from '~/components/SHARP'
export default {
  components: { // コンポーネント
    Apple,
    Samsung,
    SHARP
  },
  data() {
    return {
      currentComponent: 'Apple' // コンポーネント名
    }
  },
  methods: {
    // ボタン押下時にコンポーネント名を変更
    onClickApple() {
      this.currentComponent = 'Apple'
    },
    onClickSamsung() {
      this.currentComponent = 'Samsung'
    },
    onClickSHARP() {
      this.currentComponent = 'SHARP'
    }
  }
}
</script>
<style>
.container {
  margin: 15px;
}
</style>
