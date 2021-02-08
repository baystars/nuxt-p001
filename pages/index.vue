<template>
  <div class="container">
    <h1>カスタムイベント</h1>
    <div v-for="phone in phones" v-bind:key="phone.key">
      <Smartphone v-bind:spec="phone" v-on:phoneSelected="onPhoneSelected"/>
    </div>
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
      phones: [
        {
          id: 1,
          vendor: 'Samsung',
          name: 'Galaxy A20'
        },
        {
          id: 2,
          vendor: 'SHARP',
          name: 'AQUOS sense3'
        },
        {
          id: 3,
          vendor: 'OPPO',
          name: 'Reno A'
        }
      ]
    }
  },
  methods: {
    onPhoneSelected(event) {
      alert(`${event.vendor} ${event.name}を購入します。`)
    }
  }
}
</script>
<style>
.container {
  margin: 10px;
}
</style>
