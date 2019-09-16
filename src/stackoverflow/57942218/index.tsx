import React from 'react';
import ProductListItem from './ProductListItem';
import { connect } from 'react-redux';

const names = ['Seattle', 'Bellevue', 'Tacoma', 'Puyallup'];

export const Body = props => {
  const { products, filteredProducts, search } = props;
  console.log('FILTERED IN BODY', filteredProducts);
  console.log(products);
  return (
    <div className="main">
      {names.map(name => (
        <ProductListItem name={name} data={search ? filteredProducts : products} key={Math.random()} />
      ))}
    </div>
  );
};

const mapStatesToProps = state => {
  return {
    products: state.data.products,
    filteredProducts: state.data.filteredProducts,
    search: state.data.search
  };
};

export default connect(mapStatesToProps)(Body);
