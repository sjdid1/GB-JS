

import React from 'react';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <h1>Product Catalog Management</h1>
      <AddProductForm />
      <h2>Products</h2>
      <ProductList />
    </div>
  );
}

export default App;
