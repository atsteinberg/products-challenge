import React from 'react'

export const FilterForm = ({ priceFrom, priceTo, onPriceInputChange }) => {

  const handleChange = (e) => {
    onPriceInputChange(e.target.id, +e.target.value);
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..."
        value={priceFrom}
        onChange={handleChange}
      />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..."
        value={priceTo}
        onChange={handleChange}
      />
    </div>
  )
}
