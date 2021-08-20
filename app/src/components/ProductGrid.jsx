import React from 'react'

import Product from './Product'

const ProductGrid = ({ products }) => {
  if (!products) return null

  return <div className="flex flex-wrap -mx-6 px-1.5 md:px-0">{products.map(Product)}</div>
}

export default ProductGrid
