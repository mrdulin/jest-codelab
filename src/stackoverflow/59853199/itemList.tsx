import React, { useState, useEffect } from 'react';
import { fetchItems } from './api';
import { addToSelectList } from './listModule';
import Item from './item';

export default function ItemList() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then((res) => {
      setItems(res.data.items);
    });
  }, [page]);

  function onClickItem(item) {
    addToSelectList(item);
  }

  return (
    <ul>
      {items.map((item: any, index) => (
        <li key={index}>
          <Item
            name={item.name}
            onClick={() => {
              onClickItem(item);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
