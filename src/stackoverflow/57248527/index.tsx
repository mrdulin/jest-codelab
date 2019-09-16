import React from 'react';

export const Comp = ({ OnItemsUpdate, items, datasource }) => {
  Promise.all(
    items.map(item => {
      return datasource.UpdateItem(item);
    })
  ).then(() => {
    return OnItemsUpdate();
  });

  // not including rest of the component for brevity's sake
  return <div>test</div>;
};
