// 演習4: DOMプロパティへのアクセス
// 問題を修正して、型安全で正しいコードにしてください。
const button: HTMLButtonElement | null = document.querySelector('button');
const input: HTMLInputElement | null = document.querySelector('input');

// ボタンがクリックされたら、入力フィールドの値の長さをコンソールに表示します。
// エラーを解消してください。

// 以下のコメントを外して問題を解く
if (button instanceof HTMLButtonElement) {
  button.onclick = () => {
    if (input instanceof HTMLInputElement) {
      console.log(`Input length: ${input.value.length}`);
    }
  };
}
