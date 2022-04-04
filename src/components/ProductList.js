import React from 'react'

export const ProductList = ({ products, columns }) => {

  const rows = products.map((product) => (
    <tr key={product.id}>
      {columns.id && <td>{product.id}</td>}
      {columns.name && <td>{product.name}</td>}
      {columns.department && <td>{product.department}</td>}
      {columns.price && <td>{product.price}</td>}
      {columns.currency && <td>{product.currency}</td>}
    </tr>
  ));

  return (
    <div id="product-list">
      <header>
        <strong>{`Product List (${products.length} items)`}</strong>
      </header>
      <table>
        <thead>
          <tr>
            {columns.id && <th>ID</th>}
            {columns.name && <th>Name</th>}
            {columns.department && <th>Department</th>}
            {columns.price && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}
