<template>
  <div class="component">
    <div>身長：<input v-model="height" v-on:input="onInput">cm</div>
    <div>体重：<input v-model="weight" v-on:input="onInput">kg</div>
    <pre>{{ payload }}</pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0,
      weight: 0,
      payload: ''
    }
  },
  methods: {
    onInput() {
      // this.$store.dispatch('doSetPhysical', { // 遅延させないアクション
      //   height: this.height,
      //   weight: this.weight
      // })
      this.$store.dispatch('doSetPhysicalDelayed', { // アクション実行
        height: this.height,
        weight: this.weight
      })
      .then(payload => { // アクション実行完了後の処理
        this.payload = JSON.stringify(payload, null, ' ')
      })
    }
  }
}
</script>
<style scoped>
.component {
  background-color: #ccffaa;
  border: 1px solid black;
  padding: 10px;
}
</style>
