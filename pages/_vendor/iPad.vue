<template>
  <div class="container">
    <h1>{{ phoneVendor }}（iPad）</h1>
    <ul v-if="phoneData[phoneVendor]">
      <li v-for="phone in phoneData[phoneVendor].phones" v-bind:key="phone.id">
        {{ phone.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phoneData: {
        Apple: {
          phones: [
            { id: 1, name: 'iPad Pro' },
            { id: 2, name: 'iPad Air' },
            { id: 3, name: 'iPad' }
          ]
        }
      }
    }
  },
  computed: {
    phoneVendor() {
      return this.$route.params.vendor
    }
  }
}
</script>
<style scoped>
.container {
  margin: 10px;
}
</style>
