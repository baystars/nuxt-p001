// ステート
export const state = () => ({
  favorites: new Set() // お気に入り情報
})
// ミューテーション
export const mutations = {
  // お気に入り情報を初期化
  initFavorites(state, favs) {
    // ステートのお気に入りSetを初期化して、お気に入りを代入
    state.favorites = new Set()
    favs.forEach(elem => state.favorites.add(elem));
  },
  // お気に入り切り替え
  toggleFavorite(state, fav) {
    // 現在のお気に入りSetをコピー
    var newFavorites = new Set(state.favorites);
    // コピーしたお気に入りSetに指定したお気に入りがある場合は削除
    if (state.favorites.has(fav)) {
      newFavorites.delete(fav);
    }
    // コピーしたお気に入りSetに指定したお気に入りがない場合は追加
    else {
      newFavorites.add(fav);
    }
    // ステートのお気に入りSetを置き換え
    state.favorites = newFavorites;
  }
}
