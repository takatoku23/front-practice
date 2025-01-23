// 問題2: useEffectを使ったデータ取得
// 以下の条件を満たすデータ取得コンポーネントを作成してください：

// コンポーネントがマウントされたときにfetchDataからデータを取得します。
// データ取得中は「Loading...」と表示します。
// データ取得後は、取得した内容をリスト形式で表示します。

interface DataItem {
  id: number;
  name: string;
}

const fetchData = () => {
  return new Promise<DataItem[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]);
    }, 1000);
  });
};

export const Practice7 = () => {
  return <>{/* コードをここに書いてください */}</>;
}
