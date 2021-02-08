<template>
  <div class="component">
    氏名：<input v-model="name" v-on:input="onInput">
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onInput() {
      this.$store.dispatch('doSetName', this.name)
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
