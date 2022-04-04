import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice((prev) => ({ ...prev, [name]: value }));
  }

  const onCheckboxClick = (name, checked) => {
    setColumns((prev) => ({ ...prev, [name]: checked }))
  }

  const filterProducts = () => {
    return props.products.filter((product) =>
      product.price >= (price.priceFrom || 0) && product.price <= (price.priceTo === '' ? Infinity : +price.priceTo)
    )
  }

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={filterProducts()}
        columns={columns} />
    </div>
  );
}

export default Search;
