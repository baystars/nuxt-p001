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
  asyncData({ $axios, params }) { // パラメーターを含むparamsを記述
    // paramsから、パスに指定されたID番号を取得
    const stationId = params.id
    // ID番号を指定してAPIを呼び出し
    return $axios.get(`http://localhost:3001/station/${stationId}`)
    .then(res => {
      // APIのレスポンスデータを設定
      return res.data
    })
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
