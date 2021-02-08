// 身体測定
// ステート
export const state = () => ({
  height: 0, // 身長
  weight: 0  // 体重
})
// ミューテーション
export const mutations = {
  setValue(state, payload) {
    state.height = payload.height;
    state.weight = payload.weight;
  }
}
// ゲッター
export const getters = {
  BMI(state) {
    return state.weight / (Math.pow(state.height / 100, 2))
  },
}
// アクション
export const actions = {
  doSetValue({ commit }, payload) {
    commit('setValue', payload)
  }
}
