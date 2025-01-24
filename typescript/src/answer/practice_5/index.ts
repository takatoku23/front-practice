// 問題1: 戻り値の型を取得する
type LastArgType<T> = T extends (...args: [...infer Rest, infer Last]) => any
  ? Last
  : never;

  // 関数の型を定義
type ExampleFunction = (a: number, b: string, c: boolean) => void;

// LastArgType を使用して最後の引数の型を取得
type LastArg = LastArgType<ExampleFunction>;

// type FooReturnType = MyReturnType<Foo>; // number
// type BarReturnType = MyReturnType<Bar>; // string

// 問題2: オブジェクトの特定のキーを省略する型
type OmitKey<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

// 使用例:
type User = { id: number; name: string; age: number };
type WithoutAge = OmitKey<User, "age">; // { id: number; name: string; }
