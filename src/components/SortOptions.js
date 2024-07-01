import React from 'react';

const SortOptions = ({ setSizeFilter }) => {
  return (
    <div className="sort-options">
      <label htmlFor="size-filter">Sort by size:</label>
      <select id="size-filter" onChange={(e) => setSizeFilter(e.target.value)}>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
    </div>
  );
};

export default SortOptions;