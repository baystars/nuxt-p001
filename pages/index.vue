<template>
  <div class="container">
    <h1>健康診断</h1>
    <h3>基本情報</h3>
    <InputBasic></InputBasic>
    <h3>身体測定</h3>
    <InputPhysical></InputPhysical>
    <h3>血液検査</h3>
    <InputBlood></InputBlood>
    <h3>診断結果</h3>
    <ShowResult></ShowResult>
  </div>
</template>

<script>
import InputBasic from '~/components/InputBasic'
import InputPhysical from '~/components/InputPhysical'
import InputBlood from '~/components/InputBlood'
import ShowResult from '~/components/ShowResult'
export default {
  components: {
    InputBasic,
    InputPhysical,
    InputBlood,
    ShowResult
  }
}
</script>

<style>
.container {
  margin: 15px;
}
</style>
