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
  