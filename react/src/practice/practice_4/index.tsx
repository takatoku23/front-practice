// 演習４：リストのレンダリング
// 以下の配列データをリスト形式でレンダリングするコンポーネントを作成してください。各リストアイテムに一意のkeyを設定してください。

export const Practice4 = () => {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];
  return (
    <ul>
      {items.map((item) => (
        <li>
          {item.id}:{item.name}
        </li>
      ))}
    </ul>
  );
};
