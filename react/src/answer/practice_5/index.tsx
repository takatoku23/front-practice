import { Button } from '@/answer/practice_5/button';

// Main component
export const Answer5 = () => {
  const products = [
    { id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Banana', price: 150 },
    { id: 3, name: 'Cherry', price: 200 },
  ];

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <Button product={product} />
        </div>
      ))}
    </>
  );
};
