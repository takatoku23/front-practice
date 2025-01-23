# React 基礎講座

### トピック

#### JSXの基本

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

---

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

---

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

---

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

---

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

---

#### 練習問題１〜５

演習問題を始める際には、github copilotの**機能をオフ**にすることを推奨します。
