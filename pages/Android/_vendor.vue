<template>
  <div class="container">
    <h1>{{ $route.params.vendor }}</h1>
    <ul v-if="phoneData[$route.params.vendor]">
      <li v-for="phone in phoneData[$route.params.vendor].phones"
        v-bind:key="phone.id">
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
        Samsung: {
          phones: [
            { id: 1, name: 'Galaxy Note10+' },
            { id: 2, name: 'Galaxy A20' },
            { id: 3, name: 'Galaxy Fold' }
          ]
        },
        SHARP: {
          phones: [
            { id: 1, name: 'AQUOS sense3' },
            { id: 2, name: 'AQUOS sense3 lite' },
            { id: 3, name: 'AQUOS sense3 plus' },
            { id: 4, name: 'AQUOS zero2' }
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
