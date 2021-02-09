<template>
  <div class="container">
    <div>ページ表示日時：{{ new Date() }}</div> <!-- 日時を表示 -->
    <h1>2020年秋冬注目スマホ</h1>
    <!-- vendors配列からリストを表示 -->
    <ul>
      <li v-for="vendor in vendorsData" v-bind:key="vendor.id">
        <nuxt-link v-bind:to="vendor.link">{{ vendor.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // メーカーのリスト
      vendorsData: [
        { id: 1, name: 'Apple', link: '/phones/Apple' },
        { id: 2, name: 'Google', link: '/phones/Google' },
        { id: 3, name: 'Samsung', link: '/phones/Samsung' },
      ]
    }
  }
}
</script>
<style scoped>
.container {
  margin: 10px;
}
</style>
