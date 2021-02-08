// 血液検査
// ステート
export const state = () => ({
  gammaGT: 0 // 肝臓のγ-GT
})
// ミューテーション
export const mutations = {
  setValue(state, payload) {
    state.gammaGT = payload.gammaGT;
  }
}
// ゲッター
export const getters = {
  isGammaGTNormal(state) {
    return state.gammaGT <= 70 // γ-GTの正常値：70以下
  }
}
// アクション
export const actions = {
  doSetValue({ commit }, payload) {
    commit('setValue', payload)
  }
}
