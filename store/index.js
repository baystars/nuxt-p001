// ステート
export const state = () => ({
  name: '',   // 氏名
  height: 0,  // 身長
  weight: 0   // 体重
})
// ミューテーション
export const mutations = {
  // 氏名を更新
  setName(state, name) {
    state.name = name
  },
  // 身長と体重を更新
  setPhysical(state, payload) {
    state.height = payload.height
    state.weight = payload.weight
  }
}
// ゲッター
export const getters = {
  // プロパティスタイル
  BMI(state) {
    return state.weight / (Math.pow(state.height / 100, 2))
  },
  // メソッドスタイル
  nameWithSuffix(state) {
    return function (suffix) {
      return state.name + suffix
    }
  }
}
// アクション
export const actions = {
  // setNameミューテーションを実行
  doSetName(context, name) {
    context.commit('setName', name)
  },
  // setPhysicalミューテーションを実行
  doSetPhysical({ commit }, payload) {
    commit('setPhysical', payload)
  },
  // setPhysicalミューテーションを遅延実行
  doSetPhysicalDelayed({ commit }, payload) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        commit('setPhysical', payload)
        resolve(payload)
      }, 1000)
    })
  }
}
