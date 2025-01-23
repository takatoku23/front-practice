# React 基礎講座

## JSXの基本

- **説明**:
  JSXは、JavaScript内でHTMLのような構文を記述するための言語拡張です。JSXを使用することで、Reactコンポーネントを直感的かつ効率的に記述できます。JavaScriptとHTMLが統合された形で記述できるため、コードの可読性が向上します。
- **特徴**:

  - **HTMLライクな記法**: JSXはHTMLと同様のタグ構文を使用します。ただし、HTMLとは異なり、JSXはJavaScriptであるため、エラー時に厳密なチェックが行われます。
  - **JavaScript式の埋め込み**: JSX内で `{}` を使用することで、動的なデータや計算結果を埋め込むことが可能です。
  - **コンポーネントの分岐レンダリング**: 条件に応じて異なるコンポーネントをレンダリングできます。
  - **コンパイル**: JSXはブラウザでは直接実行できないため、Babelなどのトランスパイラによって通常のJavaScriptに変換されます。

- **ルール**:

  1. **単一の親要素で囲む**：複数の要素を返す場合は、`<div></div>` や`<></>`などのコンテナでラップします。
     ```jsx
     export const HelloWorld = () => {
       return (
         <div>
           <h1>Hello</h1>
           <p>World</p>
         </div>
       );
     };
     ```
  2. **全てのタグを閉じる**: 開いたタグは必ず閉じる必要があります。HTML5のように省略はできません（例: `<img />`）。
  3. **コンポーネント名はパスカルケースで記述する**: Reactのコンポーネント名は大文字で始め、パスカルケースで記述する必要があります。
  4. **HTMLの`class`属性は`className`として記述する**: Reactでは、JavaScriptの予約語である`class`を避けるために、`className`が使用されます。

- **例1: JavaScript式の埋め込み**:

  ```jsx
  const Name = () => {
    const name = '田中太郎';
    return <p>名前は{name}です。</p>;
  };
  ```

  この例では、`{name}` に動的な変数が埋め込まれます。

- **例2: コンポーネントの分岐レンダリング**:

  ```jsx
  const Login = () => {
    const isLoggedIn = true; // or false

    return (
      <>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</>
    );
  };
  ```

  この例では、`isLoggedIn` の値によって異なる内容が表示されます。

#### コンポーネントの作成と利用

- **説明**:
  コンポーネントはUIを構築するための基本単位であり、再利用可能なコードブロックです。Reactでは、すべてのUIがコンポーネントによって構成されます。

- **ポイント**:
  `reshop-navi-front`のコーディングルールでは、コンポーネントの宣言では以下を採用しています。

  - **トップレベルのコンポーネントでは`export default function`を使用する**
    - プロジェクトの主要なエントリポイントで一貫性を保ちます。
  - **ネストされたコンポーネントでは`export named arrow  function`を使用する**
    - 明確な構造でコンポーネントを作成できます。

- **例: コンポーネントの宣言**:

  ```jsx
  // ネストコンポーネント
  export const Greeting = ({ message }) => {
    return <p>{message}</p>;
  };

  // トップレベルコンポーネント
  export default function App() {
    return (
      <div>
        <Greeting message="Hello from React!" />
      </div>
    );
  }
  ```

- **ポイント**:
  - 明確な構造を持つことで、デバッグやメンテナンスが容易になります。
  - スコープの明確化に役立ち、メンテナンス性が向上します。

#### プロパティ（Props）の利用

- **説明**:
  Propsは親コンポーネントから子コンポーネントにデータを渡すための仕組みです。`vue.js`とは異なり、Reactのpropsは原則読み取り専用で、子コンポーネントでは変更できません。←単一方向のデータフロー
- **特徴**:

  - 動的にデータを渡すことができます。
  - TypeScriptを使用することで、型安全に利用できます。

- **例**:

  ```jsx
  export default function Greeting({ message }) {
    // messageを変更して親に返すことはできない。
    return <p>{message}</p>;
  }

  export default function App() {
    return <Greeting message="Hello, Props!" />;
  }
  ```

- **ポイント**:
  - Propsはオブジェクトとして渡されます。
  - `reshop-navi-front`では複数のプロパティを受け取る際には分割代入で受け取ることを推奨しています。
  - **例**
    ```jsx
    export const FullName = ({ firstName, lastName }) => {
      return (
        <h1>
          Hello, {firstName} {lastName}!
        </h1>
      );
    };
    ```

#### イベントハンドリング

- **説明**:
  Reactでは、イベントハンドラを使用してユーザーの操作に応答します。
- **特徴**:

  - JavaScriptの標準的なイベントとは若干異なるインターフェースを持ちます。
  - [SyntheticEvent](https://ja.react.dev/reference/react-dom/components/common#react-event-object)を介してクロスブラウザの互換性が提供されます。

- **例**:

  ```jsx
  export default function Button() {
    const handleClick = () => {
      alert('Button clicked!');
    };

    return <button onClick={handleClick}>Click Me</button>;
  }
  ```

- **ポイント**:
  - `onClick` や `onChange` など、React独自のイベント名を使用します。
  - イベントハンドラなどのコールバック関数にはArrow関数を使用します。

#### リストのレンダー

- **説明**:
  配列データをレンダリングする場合、Reactでは`map`メソッドを利用して要素を生成します。
- **特徴**:

  - 各要素には一意の`key`プロパティを設定する必要があります。`key`はReactがどの要素を更新、追加、削除するかを識別するために使用されます。

- **例**:

  ```jsx
  export default function ItemList() {
    const items = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
    ];

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  ```

- **ポイント**:
  - `key`は要素の安定性を確保するために必要です。
  - 配列のインデックスを`key`に使用するのは避けたほうが良い場合があります。特に配列が並び替えられる可能性がある場合は、一意の識別子を使用してください。
  - 生成されるリストが複雑な場合、リストアイテムを別のコンポーネントとして定義することを検討してください。

## 練習問題１〜５

演習問題を始める際には、github copilotの**機能をオフ**にすることを推奨します。

## 代表的なReactフック

Reactフック（Hooks）は、React 16.8で導入された、関数コンポーネントで状態管理やライフサイクル操作を可能にする仕組みです。  
フックを用いると、コンポーネントから様々な React の機能を使えるようになります。組み込みのフックを使うこともできますし、組み合わせて自分だけのものを作ることもできます。

### `useState`フック

#### 概要

`useState`は、Reactで関数コンポーネント内にローカルな状態を追加するための基本的なフックです。　　
状態が変更されると、コンポーネントが再レンダーされ、UIが最新の状態を反映します。

#### 基本的な使い方

#### **構文**

```tsx
const [state, setState] = useState<型>(初期値);
```

- **`state`**: 現在の状態の値。
- **`setState`**: 状態を更新する関数。
- **`初期値`**: 状態の初期値。

#### 例1: カウンター

```tsx
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0); // 初期値を0に設定

  const increment = () => setCount(count + 1); // 状態を更新

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

#### 例2: テキスト入力

```tsx
import { useState } from 'react';

export const TextInput = () => {
  const [text, setText] = useState(''); // 初期値を空文字に設定

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // 状態を更新
      />
      <p>入力内容: {text}</p>
    </div>
  );
};
```

#### 状態の型付け

TypeScriptでは、`useState`に型を明示的に指定できます。

##### 例: 数値型

```tsx
const [count, setCount] = useState<number>(0);
```

##### 例: オブジェクト型

```tsx
type User = {
  name: string;
  age: number;
};

const [user, setUser] = useState<User | null>(null);
```

### `useEffect`フック

#### **概要**

`useEffect`は、関数コンポーネントで副作用（データ取得、DOM操作、イベントリスナーの登録など）を処理するためのフックです。  
Reactのレンダー後に実行されるため、レンダーと副作用を分離できます。

#### 構文

```tsx
useEffect(() => {
  // 副作用の処理
  return () => {
    // クリーンアップ処理（オプション）
  };
}, [依存配列]);
```

- **第一引数**: 実行する副作用の内容。
- **依存配列**: 副作用の実行タイミングを制御。

#### 例1: 初回レンダー時のみ実行

```tsx
import { useEffect, useState } from 'react';

export const DataFetcher = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((json) => setData(json.message));
  }, []); // 空の依存配列で初回レンダー時のみ実行

  return <p>{data || 'Loading...'}</p>;
};
```

#### 例2: 値の変更時に実行

```tsx
import { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // countが変更されたときに実行

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

#### 例３: クリーンアップ処理

`useEffect`では、コンポーネントのライフサイクルに基づいた副作用の管理が可能です。

特に、コンポーネントがアンマウントされる際や、依存値が変更される前に副作用を解除するクリーンアップ処理を指定することが重要です。

**なぜクリーンアップ処理が必要なのか？**

1. **メモリリークの防止**:
   - イベントリスナーやタイマーを解除しないと、不要な処理が続き、メモリリークの原因となります。
2. **一貫性の確保**:
   - 副作用が依存値に応じて正しく更新され、古い状態に基づく処理が誤って実行されないようにします。

```jsx
import { useEffect, useState } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1); // 1秒ごとにカウントアップ
    }, 1000);

    return () => {
      clearInterval(timer); // クリーンアップ処理でタイマーを解除
      console.log('Timer cleared');
    };
  }, []); // 初回レンダー時のみ実行

  return <p>Seconds elapsed: {seconds}</p>;
};
```

#### **4. よくある間違い**

#### **間違い1: 依存配列の指定漏れ**

副作用が依存する値を正しく指定しないと、予期しない動作が発生します。

##### ダメな例

```tsx
useEffect(() => {
  console.log('Value:', value); // 🔴 valueの変更を監視していない
}, []);
```

##### 良い例

```tsx
useEffect(() => {
  console.log('Value:', value); // 🟢 valueの変更時に実行
}, [value]);
```

#### **間違い2: 不要な再実行**

依存配列に不要な値を含めると、無駄な副作用の実行が発生します。

##### ダメな例

```tsx
useEffect(() => {
  console.log('Unnecessary execution');
}, [Math.random()]); // 🔴 依存配列にランダム値
```

### その他代表的なフックと資料

#### 公式ドキュメント

- [useState公式ドキュメント](https://ja.react.dev/reference/react/useState)
- [useEffect公式ドキュメント](https://ja.react.dev/reference/react/useEffect)

#### その他のフック

| フック名                                                        | 説明                                                                              | 主な用途                                           |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------- |
| [useContext](https://ja.react.dev/reference/react/useContext)   | コンポーネントツリー全体で状態を共有するためのフック。`props`の受け渡しを簡略化。 | グローバルな状態（テーマ、ユーザー情報など）の共有 |
| [useReducer](https://ja.react.dev/reference/react/useReducer)   | 状態を複数のアクションで更新するためのフック。Reduxのような状態管理が可能。       | 複雑な状態管理（フォーム、アプリ全体の状態）       |
| [useMemo](https://ja.react.dev/reference/react/useMemo)         | 計算コストの高い値のメモ化を行うフック。レンダリング間で計算結果を保持。          | パフォーマンスの最適化（重い計算処理のキャッシュ） |
| [useCallback](https://ja.react.dev/reference/react/useCallback) | 関数の再生成を防ぐためのフック。メモ化された関数を提供。                          | コンポーネントの再レンダリングを防止               |
| [useRef](https://ja.react.dev/reference/react/useRef)           | DOM要素や値を参照するためのフック。レンダリングに影響を与えない値を保持。         | DOMへのアクセスやミューテーション                  |

## 副作用とレンダリングのルール

### 副作用の基本ルール

Reactでは、コンポーネントのレンダー中に副作用を実行してはいけません。レンダーは純粋であるべきであり、同じ`props`と`state`に対して常に同じ結果を返す必要があります。

#### 副作用とは？

副作用とは、関数の外部に観察可能な影響を及ぼすコードを指します。Reactでは、次のような操作が副作用と見なされます：

- データの取得（API呼び出しなど）
- DOMの操作（document.titleの変更など）
- イベントリスナーの登録や解除
- 外部ライブラリとの連携

### 副作用はレンダーの外で実行する

**理由**

- **冪等性の維持**: 複数回レンダーされても同じ結果が得られる必要があります。
- **グローバル影響の回避**: DOM操作やブラウザAPIは他のコンポーネントに影響を与える可能性があります。

#### 良い例

副作用を`useEffect`で処理：

```tsx
import { useEffect } from 'react';

export const ProductDetailPage = ({
  product,
}: {
  product: { title: string };
}) => {
  useEffect(() => {
    document.title = product.title; // 副作用はuseEffect内で実行
  }, [product.title]);

  return <h1>{product.title}</h1>;
};
```

#### ダメな例

レンダー中に`document.title`を操作：

```tsx
export const ProductDetailPage = ({
  product,
}: {
  product: { title: string };
}) => {
  document.title = product.title; // 🔴 Bad: レンダー中に副作用を実行

  return <h1>{product.title}</h1>;
};
```

#### ローカルミューテーションは許容される

**理由**
レンダー中にローカルで作成した変数を変更することは、他のコンポーネントやレンダーの結果に影響を与えないため許容されます。

##### 良い例

```tsx
export const FriendList = ({
  friends,
}: {
  friends: { id: number; name: string }[];
}) => {
  const items: JSX.Element[] = [];
  for (const friend of friends) {
    items.push(<li key={friend.id}>{friend.name}</li>);
  }
  return <ul>{items}</ul>;
};
```

##### ダメな例

外部変数をレンダー中に操作：

```tsx
const items: JSX.Element[] = []; // 🔴 Bad: グローバル変数
export const FriendList = ({
  friends,
}: {
  friends: { id: number; name: string }[];
}) => {
  for (const friend of friends) {
    items.push(<li key={friend.id}>{friend.name}</li>);
  }
  return <ul>{items}</ul>;
};
```

### 2.2 不変性の遵守

#### **説明**

状態（`state`）や`props`を直接変更せず、必要があれば新しいオブジェクトや配列を生成して管理します。不変性を保つことで、予測可能性が高まり、バグを防ぎます。

#### 良い例

```tsx
export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1); // 状態を直接変更しない
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

#### ダメな例

```tsx
export const Counter = () => {
  let count = 0; // 状態として管理されていない

  const increment = () => {
    count++; // 状態を直接変更
  };

  return <button onClick={increment}>Count: {count}</button>;
};
```

### Propsは読み取り専用

#### **説明**

`props`は親コンポーネントから渡されるものであり、子コンポーネントで変更してはいけません。`props`を変更すると、Reactの一貫性のあるデータフローが崩れます。

#### 良い例

```tsx
export const Greeting = ({ name }: { name: string }) => {
  return <p>Hello, {name}!</p>;
};

export const App = () => {
  return <Greeting name="John" />;
};
```

#### ダメな例

```tsx
export const Greeting = ({ name }: { name: string }) => {
  name = 'Jane'; // Propsを変更している
  return <p>Hello, {name}!</p>;
};
```

### JSXでコンポーネントを呼び出す

#### **説明**

ReactのコンポーネントはJSX形式で呼び出します。通常の関数として呼び出すと、Reactの再レンダリングサイクルに正しく組み込まれません。

#### 良い例

```tsx
export const Profile = ({ user }: { user: { name: string } }) => {
  return <p>User: {user.name}</p>;
};

export const App = () => {
  return <Profile user={{ name: 'John' }} />;
};
```

#### ダメな例

```tsx
const Profile = ({ user }: { user: { name: string } }) => {
  return <p>User: {user.name}</p>;
};

const userElement = Profile({ user: { name: 'John' } }); // 通常の関数として呼び出している
```

## 演習問題６〜９

演習問題を始める際には、github copilotの**機能をオフ**にすることを推奨します。
