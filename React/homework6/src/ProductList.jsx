

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from './store';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <div>Name: {product.name}</div>
          <div>Description: {product.description}</div>
          <div>Price: ${product.price}</div>
          <div>Available: {product.available ? 'Yes' : 'No'}</div>
          <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          <button onClick={() => handleToggleAvailability(product.id)}>Toggle Availability</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
