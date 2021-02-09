<template>
  <div class="container">
    <h1>{{ name }} コインロッカー状況</h1>
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
  </div>
</template>
<script>
export default {
  asyncData({ $axios }) {
    // AxiosによるHTTP通信
    return $axios.get('http://localhost:3001/lockerStatus')
    .then(res => { // 通信後の処理
      // 通信結果をlockerStatusに設定
      return { lockerStatus: res.data }
    })
  },
  data() {
    return {
      name: '北山本駅' // data
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
