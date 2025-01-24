// 演習3: インターフェースと型エイリアス
// 次の型を完成させてください。

// Todo の状態を表す Union 型を type を使って定義してください。

// 以下のコメントを外して問題を解く
// type TodoStatus = 

interface Todo {
}

// 次の配列が型チェックを通過するようにしてください。
let todos: Todo[] = [
  { id: 1, text: "Learn TypeScript", status: "todo" },
  { id: 2, text: "Build a project", status: "in-progress" },
  { id: 3, text: "Review code", status: "done" },
];
