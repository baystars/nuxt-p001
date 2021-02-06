<template>
  <div class="container">
    <h1>{{ $route.params.vendor }}</h1>
    <ul v-if="phoneData[$route.params.vendor]">
      <li v-for="phone in phoneData[$route.params.vendor].phones" v-bind:key="phone.id">
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
            { id: 1, name: 'iPhone 11' },
            { id: 2, name: 'iPhone 11 Pro' },
            { id: 3, name: 'iPhone 11 Pro Max' }
          ]
        }
      }
    }
  }
}
</script>
<style scoped>
.container {
  margin: 10px;
}
</style>
