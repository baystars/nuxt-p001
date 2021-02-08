<template>
  <div class="component">
    <div>{{ $store.getters.nameWithSuffix("さん") }}</div>
    <div>BMI：{{ $store.getters.BMI.toFixed(2) }}</div>
    <div>（身長：{{ $store.state.height }}cm、体重：{{ $store.state.weight }}kg）</div>
  </div>
</template>
<style scoped>
.component {
  background-color: #aaccff;
  border: 1px solid black;
  padding: 10px;
}
</style>
