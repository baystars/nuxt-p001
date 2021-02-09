const functions = require('firebase-functions');
// loadNuxtをインポート
const { loadNuxt } = require('nuxt');
// Function「nuxtFunc」の定義
exports.nuxtFunc = functions.https.onRequest(async (req, res) => {
  // loadNuxtでNuxtインスタンスを取得
  const nuxt = await loadNuxt('start');
  // NuxtインスタンスでFunctionのリクエストを処理
  return nuxt.render(req, res);
});
