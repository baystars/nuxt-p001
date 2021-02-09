<template>
  <div class="container">
    <div>ページ表示日時：{{ new Date() }}</div> <!-- 日時を表示 -->
    <h1>メーカー：{{ phoneVendor }}</h1> <!-- メーカーを表示 -->
    <!-- phonesData配列からリストを表示 -->
    <ul>
      <li v-for="phone in phonesData" v-bind:key="phone.id">
        {{ phone.name }}
      </li>
    </ul>
    <nuxt-link to="/">戻る</nuxt-link>
  </div>
</template>
<script>
export default {
  computed: {
    // ルートからメーカーを取得して返却
    phoneVendor() {
      return this.$route.params.vendor;
    },
    // メーカーに対応したデータを返却
    phonesData() {
      if (this.phoneVendor == 'Apple') {
        return [
          { id: 1, name: 'iPhone 12 mini' },
          { id: 2, name: 'iPhone 12' },
          { id: 3, name: 'iPhone 12 Pro' },
          { id: 4, name: 'iPhone 12 Pro Max' },
        ];
      } else if (this.phoneVendor == 'Google') {
        return [
          { id: 1, name: 'Pixel 5' },
          { id: 2, name: 'Pixel 4a (5G)' }
        ];
      } else if (this.phoneVendor == 'Samsung') {
        return [
          { id: 1, name: 'Galaxy Note20 Ultra 5G' },
          { id: 2, name: 'Galaxy A51 5G' },
          { id: 3, name: 'Galaxy Z Fold2 5G' },
          { id: 4, name: 'Galaxy Z Flip 5G' },
        ]
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
