import React from 'react';

const transport = {
  async getData(list) {
    return [{ id: 1 }];
  }
};

export const MyComponent = ({ text, list, getData = transport.getData }) => {
  const [rows, setRows] = React.useState<any[]>([]);

  React.useEffect(() => {
    console.count('useEffect');
    const fetchData = async () => {
      console.count('fetchData');
      const newRows = await getData(list);
      setRows(newRows);
    };
    fetchData();
  }, [list]);

  if (rows.length === 0) {
    return null;
  }

  return <div>rows count: {rows.length}</div>;
};
