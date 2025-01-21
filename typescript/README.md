# TypeScript Level 1: 基礎

## はじめに

TypeScriptの基礎を学び、型安全なコードを書くスキルを身につけましょう。この講座では、基本構文から実践的な演習までをカバーします。

---

## **目次**

1. TypeScriptとは？
2. なぜTypeScriptを使うのか？
3. 基本構文
4. 関数と型
5. 型エイリアスとインターフェース
6. 演習問題
7. Advanced TypeScript

---

## **1. TypeScriptとは？**

### TypeScriptの特徴

- JavaScriptに型付けを追加したスーパーセット。
- Microsoftが開発・保守。

### 主な利点

- **型安全性**: コードのバグを事前に検出。
- **開発体験**: エディタ補完やエラー検出の強化。
- **可読性**: 大規模開発に適したコード構造。

### TypeScriptの詳細

1. **静的型付け**

   - JavaScriptの動的型付けとは異なり、コンパイル時に型を検証。
   - エラーを早期に発見可能。

2. **型推論**

   - 明示的な型注釈を必要としない場面でも、TypeScriptが適切な型を推論。

   ```typescript
   let message = "Hello"; // 自動的にstring型と推論
   ```

3. **型定義ファイル**

   - 型定義ファイル（`.d.ts`）を使用して、外部ライブラリの型情報を利用可能。

   ```typescript
   import * as _ from "lodash";
   ```

4. **エコシステム**

   - `DefinitelyTyped`などのコミュニティが提供する膨大な型定義パッケージ。

---

## **2. なぜTypeScriptを使うのか？**

### JavaScriptの課題

- 動的型付け言語であるJavaScriptは、ランタイムエラーが発生しやすい。
- プロジェクトが大規模になると、コードの可読性と保守性が低下する。
- 関数やオブジェクトの仕様を把握するのが難しい。

### TypeScriptの解決策

1. **型安全性**

   - 型を明示することで、予期しない型エラーを防止。
   - 開発中にエラーを検出できるため、バグの修正コストを削減。

2. **自己文書化コード**

   - 型注釈が仕様書のような役割を果たし、コードの可読性が向上。
   - 新しいメンバーのオンボーディングがスムーズに進む。

3. **ツールのサポート**

   - エディタ補完やリファクタリング機能が強化され、生産性が向上。
   - 型情報を基にしたインテリセンスで、開発効率が向上。

4. **大規模開発に最適**

   - モジュール間の依存関係を明確化。
   - チーム全体で一貫したコーディング規約を適用可能。

### 導入の利点

- 長期的な視点でのコスト削減。
- バグが少なく、信頼性の高いソフトウェアの構築。
- 強力なエコシステム（例: 型定義ファイル、コミュニティサポート）。

#### 詳細な理由

TypeScriptを使うことで、特に次のような状況で効果を発揮します。

- チーム開発: 型がドキュメントとして機能し、新しいメンバーも迅速にキャッチアップ可能。
- 複雑なロジック: 型安全性が、エッジケースのエラーを未然に防ぎます。
- ライブラリ開発: 型定義ファイルを通じて、他の開発者が使いやすいインターフェースを提供できます。

---

## **3. 基本構文**

### 変数の型注釈

```typescript
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isDone: boolean = true;
```

### 基本的な型

TypeScriptでは、さまざまなデータ型を使用できます。以下に主な基本型を示します。

#### プリミティブ型

- **string**: テキストデータを表す型。
  ```typescript
  let name: string = "Alice";
  ```
- **number**: 数値データを表す型。
  ```typescript
  let age: number = 30;
  ```
- **boolean**: 真偽値を表す型。
  ```typescript
  let isAdmin: boolean = true;
  ```

#### 特殊な型

- **`undefined`**: 値が設定されていない状態を表します。
  ```typescript
  let notAssigned: undefined = undefined;
  ```
- **`null`**: 値が存在しないことを明示的に示します。
  ```typescript
  let emptyValue: null = null;
  ```
- **`never`**: 決して値を返さない型。
  ```typescript
  function throwError(message: string): never {
      throw new Error(message);
  }
  ```

---

### 配列とオブジェクト

#### 配列

TypeScriptでは、配列の要素の型を指定することができます。

```typescript
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

#### オブジェクト

オブジェクトの型注釈を使用して、プロパティの構造を定義します。

```typescript
let person: { name: string; age: number } = { name: "Alice", age: 25 };
```

#### オプショナルプロパティ

- プロパティが必須ではない場合、`?` を使用してオプショナルプロパティを定義します。

```typescript
interface User {
    id: number;
    name?: string; // オプション
}

let user1: User = { id: 1 };
let user2: User = { id: 2, name: "Alice" };
```

```typescript
let numbers: number[] = [1, 2, 3];
let person: { name: string; age: number } = { name: "Alice", age: 25 };
```

---

## **4. 関数と型**

### 基本的な関数

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

### アロー関数

アロー関数は、より簡潔な構文で関数を定義できます。特に無名関数を使う場合や、コンパクトな表現が求められる場合に便利です。

#### 基本例

```typescript
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};
```

#### 短縮形

式が1行で収まる場合は、`return` を省略できます。

```typescript
const add = (a: number, b: number): number => a + b;
```

#### コールバック関数

アロー関数はコールバック関数でもよく使用されます。

```typescript
const numbers = [1, 2, 3];
const squared = numbers.map((num: number) => num * num);
console.log(squared); // [1, 4, 9]
```

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

---

## **5. Union型**

### Union型とは？

- 複数の型のいずれかを受け取ることができる型を定義します。
- 柔軟性が向上し、型安全性を維持したまま異なるデータ型を扱うことが可能です。

#### 基本例

```typescript
let id: number | string;
id = 123;  // OK
id = "ABC";  // OK
id = true;  // エラー: 'boolean'型は許容されていません
```

#### Union型を使う関数

```typescript
function printId(id: number | string): void {
    if (typeof id === "string") {
        console.log(`ID (string): ${id.toUpperCase()}`);
    } else {
        console.log(`ID (number): ${id.toFixed(2)}`);
    }
}
```

#### 型ガード

- Union型を使う際、`typeof` や `instanceof` を用いて型を絞り込むことができます。

```typescript
function describe(value: string | Date): string {
    if (value instanceof Date) {
        return `The date is ${value.toISOString()}`;
    } else {
        return `The string is ${value}`;
    }
}
```

---

## **5. 型エイリアスとインターフェース**

### 型エイリアス

```typescript
type User = { id: number; name: string };
let user: User = { id: 1, name: "Alice" };
```

### インターフェース

```typescript
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
```

---

## **6. 演習問題**

演習問題を始める際には、github copilotの**機能をオフ**にすることを推奨します。

