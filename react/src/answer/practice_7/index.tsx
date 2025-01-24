import { useEffect, useState } from 'react';

const Loading = () => <div>Loading...</div>;

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

export const Answer7 = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData();
      setData(result);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
