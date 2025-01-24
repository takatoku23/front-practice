// 演習5: 高度な型チャレンジ
// 次の型を完成させてください。

// 問題1: 引数の最後の型を取得する
// 関数 T の戻り値の型を取得する型 `MyReturnType` を作成してください。

// ヒント:
// - 戻り値の型を取得するには、`infer` を使用して型を推論します。
// - https://typescriptbook.jp/reference/type-reuse/infer

// 使用例:
// type Foo = () => number;
// type Bar = () => string;

// 問題2: オブジェクトの特定のキーを省略する型
// オブジェクト T からキー K を省略する型 `OmitKey` を作成してください。

// ヒント:
// - `Exclude` ユーティリティ型を使用して、特定のキーを取り除きます。
// - 構文: `Exclude<keyof T, K>`
// - 残ったキーで新しいオブジェクト型を構築します。

// 使用例:
// type User = { id: number; name: string; age: number };
// type WithoutAge = OmitKey<User, "age">; // { id: number; name: string; }
