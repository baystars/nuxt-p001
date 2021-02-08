// 基本情報
// ステート
export const state = () => ({
  patientId: '',// ID
  name: '',     // 名前
})
// ミューテーション
export const mutations = {
  setValue(state, payload) {
    state.patientId = payload.patientId;
    state.name = payload.name;
  }
}
// ゲッター
export const getters = {
  nameWithSuffix(state) {
    return function (suffix) {
      return state.name + suffix
    }
  }
}
// アクション
export const actions = {
  doSetValue({ commit }, payload) {
    commit('setValue', payload)
  }
}
