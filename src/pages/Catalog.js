import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SortOptions from '../components/SortOptions';

const productsData = [
  { id: 1, name: 'Product 1', size: 'S', price: 100, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', size: 'M', price: 150, image: 'product2.jpg' },
 
];

const Catalog = ({ addToCart }) => {
  const [sizeFilter, setSizeFilter] = useState('');

  const filteredProducts = productsData.filter(
    (product) => sizeFilter === '' || product.size === sizeFilter
  );

  return (
    <div>
      <SortOptions setSizeFilter={setSizeFilter} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Catalog;