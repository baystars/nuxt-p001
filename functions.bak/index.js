const functions = require("firebase-functions");
// loadNuxtをインポート ...（1）
const { loadNuxt } = require('nuxt');
// Function「nuxtFunc」の定義 ...（2）
exports.nuxtFunc = functions.https.onRequest(async (req, res) => {
  // loadNuxtでNuxtインスタンスを取得 ...（2a）
  const nuxt = await loadNuxt('start');
  // NuxtインスタンスでFunctionのリクエストを処理 ...（2b）
  return nuxt.render(req, res);
});
