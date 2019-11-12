import React from 'react';

const HeaderBar = (props: any) => {
  const search = e => {
    console.log(e);
  };
  return <div onClick={search}></div>;
};

export default HeaderBar;
