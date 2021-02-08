<template>
  <div class="component">
    <div>身長：<input v-model="height" v-on:input="onInput">cm</div>
    <div>体重：<input v-model="weight" v-on:input="onInput">kg</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0,
      weight: 0
    }
  },
  methods: {
    onInput() {
      this.$store.dispatch('physical/doSetValue', {
        height: this.height,
        weight: this.weight
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
