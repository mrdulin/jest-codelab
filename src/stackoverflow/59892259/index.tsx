import React, { useState, FC } from 'react';

export const List: FC<{}> = () => {
  const [data, setData] = useState<number>();
  const getData = (): Promise<any> => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  };

  React.useEffect(() => {
    const func = async () => {
      const data = await getData();
      const value = await data.json();
      setData(value.title);
    };
    func();
  }, []);

  return (
    <div>
      <div data-testid="test">{data}</div>
    </div>
  );
};
