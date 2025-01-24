// Button component
export const Button = ({
  product,
}: {
  product: { name: string; price: number };
}) => {
  const handleClick = () => {
    alert(`${product.name}: ${product.price}`);
  };

  return <button onClick={handleClick}>詳細を見る</button>;
};
