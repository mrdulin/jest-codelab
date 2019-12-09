import React from 'react';
import { getProducts } from './api/getProducts';

export class Example extends React.Component {
  state: any = {
    items: [],
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    // @ts-ignore
    const { items } = this.state;
    if (items.length > 0) {
      return;
    }
    try {
      const { result } = await getProducts('/api/product/1');
      this.setState({ items: result });
    } catch (e) {
      // no-op
    }
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
