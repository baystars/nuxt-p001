<template>
  <div class="component">
    ID：<input v-model="patientId" v-on:input="onInput">
    氏名：<input v-model="name" v-on:input="onInput">
  </div>
</template>
<script>
export default {
  data() {
    return {
      patientId: '',
      name: ''
    }
  },
  methods: {
    onInput() {
      this.$store.dispatch('doSetValue', {
        patientId: this.patientId,
        name: this.name
      })
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
