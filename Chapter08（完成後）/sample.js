/***********************************************
  グローバル変数
************************************************/

// カードの山（配列）
// 自分のカード（配列）
// 相手のカード（配列）
// 勝敗決定フラグ（論理型）

/***********************************************
  イベントハンドラの割り当て
************************************************/

// ページの読み込みが完了したとき実行する関数を登録
window.addEventListener("load", 初期表示);

// 「カードを引く」ボタンを押したとき実行する関数を登録
document.querySelector("#pick").addEventListener("click", カードを引く);

// 「勝負する！」ボタンを押したとき実行する関数を登録
document.querySelector("#judge").addEventListener("click", 勝負する);

// 「もう1回遊ぶ」ボタンを押したとき実行する関数を登録
document.querySelector("#reset").addEventListener("click", もう1回遊ぶ);

/***********************************************
  イベントハンドラ
************************************************/

// ページの読み込みが完了したとき実行する関数
function 初期表示() {
  // シャッフル
  // 自分がカードを引く
  // 相手がカードを引く
  // 画面を更新する
}

// 「カードを引く」ボタンを押したとき実行する関数
function カードを引く() {
  if (勝敗が未決定) {
    // 自分がカードを引く
    // 相手がカードを引く
    // 画面を更新する
  }
}

// 「勝負する！」ボタンを押したとき実行する関数
function 勝負する() {
  if (勝敗が未決定) {
    // 勝敗を判定する
    // 勝敗を画面に表示する
    // 勝敗決定フラグを「決定」に変更
  }
}

// 「もう1回遊ぶ」ボタンを押したとき実行する関数
function もう1回遊ぶ() {
  // 画面を初期表示に戻す
  // reloadメソッドでページを再読み込みする
}

/***********************************************
  ゲーム関数
************************************************/

// カードの山をシャッフルする関数
function シャッフル() {
  for (100回繰り返す) {
    // カードの山からランダムに選んだ2枚を入れ替える
  }
}

// 自分がカードを引く関数
function 自分がカードを引く() {
  if (自分のカードの枚数が4枚以下) {
    // カードの山（配列）から1枚取り出す
    // 取り出した1枚を自分のカード（配列）に追加する
  }
}

// 相手がカードを引く関数
function 相手がカードを引く() {
  if (相手のカードの枚数が4枚以下) {
    if (考える) {
      // カードの山（配列）から1枚取り出す
      // 取り出した1枚を相手のカード（配列）に追加する
    }
  }
}

// カードを引くかどうか考える関数
function 考える() {
  // 引くか引かないかを戻り値で返す
}

// 画面の表示を更新する関数
function 画面を更新する() {
  // 自分のカードを表示する
  for (iを5回繰り返す) {
    if (自分のカードの枚数がiより大きい) {
      // 表面の画像を表示する
    } else {
      // 裏面の画像を表示する
    }
  }
  // 相手のカードを表示する
  for (iを5回繰り返す) {
    if (相手のカードの枚数がiより大きい) {
      // 表面の画像を表示する
    } else {
      // 裏面の画像を表示する
    }
  }
  // カードの合計を再計算する
}

// 勝敗を判定する関数
function 勝敗を判定する() {
  // 自分のカードの合計を求める
  // 相手のカードの合計を求める
  // 勝敗のパターン表に当てはめて勝敗を決める
  // 勝敗を呼び出し元に返す
}

/***********************************************
  デバッグ関数
************************************************/

function debug() {
  console.log("カードの山", カードの山);
  console.log("自分のカード", 自分のカード);
  console.log("相手のカード", 相手のカード);
  console.log("勝敗決定フラグ", 勝敗決定フラグ);
}
