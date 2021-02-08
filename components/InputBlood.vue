<template>
  <div class="component">
    <div>γ-GT：<input v-model="gammaGT" v-on:input="onInput"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gammaGT: 0
    }
  },
  methods: {
    onInput() {
      this.$store.dispatch('blood/doSetValue', {
        gammaGT: this.gammaGT
      })
    }
  }
}
</script>
<style scoped>
.component {
  background-color: #e5d5ff;
  border: 1px solid black;
  padding: 10px;
}
</style>
