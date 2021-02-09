<template>
  <div class="container">
    <h1>
      {{ name }} コインロッカー状況
        {{ $store.state.favorites.has(Number($route.params.id)) ? '★' : '' }}
    </h1>
    <table>
      <tr>
        <th rowspan="2">場所</th>
        <th colspan="3">空き</th>
      </tr>
      <tr>
        <th>Sサイズ</th>
        <th>Mサイズ</th>
        <th>Lサイズ</th>
      </tr>
      <tr v-for="elem in lockerStatus" v-bind:key="elem.id">
        <td>{{ elem.place }}</td>
        <td>{{ elem.availableS ? '〇' : '×' }}</td>
        <td>{{ elem.availableM ? '〇' : '×' }}</td>
        <td>{{ elem.availableL ? '〇' : '×' }}</td>
      </tr>
    </table>
    <a href="#" v-on:click="toggleFavorite">お気に入り切り替え</a>
    <nuxt-link to="/">戻る</nuxt-link>
  </div>
</template>
<script>
export default {
  asyncData({ $axios, params, error }) {
    const stationId = params.id
    return $axios.get(`http://localhost:3001/station/${stationId}`)
    .then(res => {
      return res.data
    }).catch(e => {
      error({ statusCode: 404, message: 'ページが見つかりません' })
    })
  },
  methods: {
    toggleFavorite() {
      // Vuexストアを更新
      this.$store.commit('toggleFavorite', Number(this.$route.params.id))
      // 更新した内容をAPIに送信
      return this.$axios.post('http://localhost:3001/favorites', {
        favorites: Array.from(this.$store.state.favorites)
      })
    }
  }
}
</script>
<style>
.container {
  margin: 15px;
}
table {
  border-collapse: collapse;
  border: 1px solid black;
}
th, td {
  border: 1px solid black;
  text-align: center;
  padding: 10px 20px;
}
</style>
