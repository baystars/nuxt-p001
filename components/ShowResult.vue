<template>
  <div class="component">
    <div>{{ $store.state.patientId }}：{{ $store.getters.nameWithSuffix("さん") }}</div>
    <h4>身体測定の結果</h4>
    <div>BMI：{{ $store.getters["physical/BMI"].toFixed(2) }}</div>
    <div>（身長：{{ $store.state.physical.height }}cm、体重：{{ $store.state.physical.weight }}kg）</div>
    <h4>血液検査の結果</h4>
    <div>
      γ-GT：{{ $store.state.blood.gammaGT }}
      →{{ $store.getters["blood/isGammaGTNormal"] ? "正常値" : "異常値" }}です。
    </div>
  </div>
</template>
<style scoped>
.component {
  background-color: #aaccff;
  border: 1px solid black;
  padding: 10px;
}
</style>
