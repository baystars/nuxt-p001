<template>
  <div class="container">
    <h1>コインロッカー状況</h1>
    <div>【お気に入りの駅には★がつきます】</div>
    <ul>
      <li>
        <nuxt-link to="detail/1">北山本駅</nuxt-link>
        {{ $store.state.favorites.has(1) ? '★' : '' }}
      </li>
      <li>
        <nuxt-link to="detail/2">山本駅</nuxt-link>
        {{ $store.state.favorites.has(2) ? '★' : '' }}
      </li>
      <li>
        <nuxt-link to="detail/3">南山本駅</nuxt-link>
        {{ $store.state.favorites.has(3) ? '★' : '' }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  fetch({ $axios, store }) { // storeはVuexストアに対応
    // お気に入り情報をAPIから取得
    return $axios.get('http://localhost:3001/favorites')
    .then(res => {
      // 取得データを初期設定するVuexストアのミューテーションを実行
      store.commit('initFavorites', res.data.favorites)
    })
  }
}
</script>
<style>
.container {
  margin: 15px;
}
</style>
