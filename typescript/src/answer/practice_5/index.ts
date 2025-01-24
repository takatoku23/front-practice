// 問題1: 戻り値の型を取得する
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

// 使用例:
type Foo = () => number;
type Bar = () => string;

type FooReturnType = MyReturnType<Foo>; // number
type BarReturnType = MyReturnType<Bar>; // string

// 問題2: オブジェクトの特定のキーを省略する型
type OmitKey<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

// 使用例:
type User = { id: number; name: string; age: number };
type WithoutAge = OmitKey<User, "age">; // { id: number; name: string; }
