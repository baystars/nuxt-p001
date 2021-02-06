<template>
  <div class="container">
    <div id="sec0">
      <h1>基本的なデータバインディング</h1>
      <input v-model="url" placeholder="URL" />
      <!--（1）-->
      <a v-bind:href="url" target="_blank">
        <!--（2）-->
        {{ url }}
        <!--（3）-->
      </a>
      へのリンク
    </div>

    <div id="sec1">
      <h1>v-modelディレクティブの修飾子</h1>
      <h3>lazy：変更の確定時のみデータを更新</h3>
      <input v-model.lazy="text1" />
      <div>{{ text1 }}</div>

      <h3>number：入力内容を数字に変換</h3>
      <input v-model.number="number1" />
      <div>{{ number1 }}</div>

      <h3>trim：文字列前後の空白を削除</h3>
      <input v-model.trim="text2" />
      <pre>{{ text2 }}</pre>
    </div>

    <div id="sec2">
      <h1>v-modelディレクティブ</h1>
      <h3>テキストボックス</h3>
      <input v-model="text1" />
      <div>{{ text1 }}</div>

      <h3>複数行テキストボックス</h3>
      <textarea v-model="text3"></textarea>
      <pre>{{ text3 }}</pre>

      <h3>チェックボックス</h3>
      <input type="checkbox" id="checkbox" v-model="checkboxValue" />
      <label for="checkbox">私はNuxt.jsが好き</label>
      <div>{{ checkboxValue }}</div>

      <h3>ラジオボタン</h3>
      <input type="radio" id="radio1" value="vue" v-model="radioValue" />
      <label for="radio1">Vue.js</label>
      <input type="radio" id="radio2" value="angular" v-model="radioValue" />
      <label for="radio2">Angular</label>
      <input type="radio" id="radio3" value="react" v-model="radioValue" />
      <label for="radio3">React</label>
      <div>{{ radioValue }}</div>

      <h3>選択</h3>
      <select v-model="selectValue">
        <option disabled value=""></option>
        <option value="vue">Vue.js</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
      </select>
      <div>{{ selectValue }}</div>

      <h3>複数チェックボックス</h3>
      <input
        type="checkbox"
        id="checkbox1"
        value="vue"
        v-model="checkboxArray"
      />
      <label for="checkbox1">Vue.js</label>
      <input
        type="checkbox"
        id="checkbox2"
        value="angular"
        v-model="checkboxArray"
      />
      <label for="checkbox2">Angular</label>
      <input
        type="checkbox"
        id="checkbox3"
        value="react"
        v-model="checkboxArray"
      />
      <label for="checkbox3">React</label>
      <div>{{ checkboxArray }}</div>

      <h3>複数選択</h3>
      <select v-model="selectArray" multiple>
        <option value="vue">Vue.js</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
      </select>
      <div>{{ selectArray }}</div>
    </div>

    <div id="sec3">
      <h1>v-bindディレクティブ</h1>
      <h3>クラスの設定</h3>
      <input id="checkbox1" type="checkbox" v-model="isChecked" />
      <label for="checkbox1" v-bind:class="{ 'color-red': isChecked }">
        文字を赤色にする
      </label>
      <!-- 算出プロパティを利用した記述
      <label for="checkbox1" v-bind:class="computedClass">
        文字を赤色にする
      </label>
-->

      <h3>スタイルの設定</h3>
      <div>色：<input v-model="fontColor" placeholder="fontColor" /></div>
      <div v-bind:style="{ color: fontColor }">色：{{ fontColor }}</div>
      <!-- 算出プロパティを利用した記述
      <div v-bind:style="computedStyle">
        色：{{ fontColor }}
      </div>
-->
    </div>

    <div id="sec4">
      <h1>v-onディレクティブの修飾子</h1>
      <h3>イベント修飾子の例</h3>
      <form>
        <input
          type="submit"
          v-on:click.prevent="onFormSubmit"
          value="Submitボタン"
        />
      </form>

      <h3>キー修飾子の例</h3>
      <input v-on:keyup.enter="onKeyUpEnter" />
    </div>

    <div id="sec5">
      <h1>v-ifディレクティブ</h1>
      <h3>アンケート</h3>
      <div>あなたはどれが好き？</div>
      <input type="radio" id="radio1" value="ios" v-model="radioValue" />
      <label for="radio1">iOS</label>
      <input type="radio" id="radio2" value="android" v-model="radioValue" />
      <label for="radio2">Android</label>
      <input type="radio" id="radio3" value="other" v-model="radioValue" />
      <label for="radio3">その他</label>

      <h3>コメント</h3>
      <div v-if="radioValue === 'ios'">あなたはiOSが好きなんですね。</div>
      <div v-else-if="radioValue === 'android'">
        あなたはAndroidが好きなんですね。
      </div>
      <div v-else>その他が好きとはマニアックですね。</div>
    </div>

    <div id="sec6">
      <h1>v-forディレクティブ</h1>
      <ul>
        <li v-for="phone in phoneList" v-bind:key="phone.id">
          {{ phone.vendor }}: {{ phone.model }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "https://codezine.jp/", // （4
      text1: "テキスト1",
      number1: 0,
      text2: "テキスト2",
      text3: "複数行\nテキスト",
      checkboxValue: false,
      radioValue: "",
      selectValue: "",
      checkboxArray: [],
      selectArray: [],
      isChecked: true,
      fontColor: "magenta",
      message: "",
      radioValue: "ios",
      phoneList: [
        { id: 1, vendor: "Apple", model: "iPhone XS" },
        { id: 2, vendor: "Apple", model: "iPhone XS Max" },
        { id: 3, vendor: "Apple", model: "iPhone XR" },
        { id: 4, vendor: "HUAWEI", model: "P30 Pro" },
        { id: 5, vendor: "HUAWEI", model: "P30" },
        { id: 6, vendor: "HUAWEI", model: "P30 lite" },
        { id: 7, vendor: "Samsung", model: "Galaxy S10+" },
        { id: 8, vendor: "Samsung", model: "Galaxy S10" },
      ],
    };
  },
  computed: {
    // 算出プロパティ
    computedClass() {
      return { "color-red": this.isChecked }; // this.isCheckedから算出
    },
    computedStyle() {
      return { color: this.fontColor }; // this.fontColorから算出
    },
  },
  methods: {
    onFormSubmit() {
      alert("フォームのSubmitがキャンセルされます。");
    },
    onKeyUpEnter() {
      alert("改行キーが押されました。");
    },
  },
};
</script>

<style>
.container {
  padding: 24px;
}
h1,
h3 {
  margin-bottom: 12px;
}
.color-red {
  color:red
}
</style>
