import React from 'react'

import ProductGrid from '../components/ProductGrid'
import { products } from '../res/data'

const CategoriesPage = ({ location }) => {
  const params = location.search ? new URLSearchParams(location.search) : null
  const categoryId = params && params.get('id')

  if (!products || !categoryId) return null

  const categoryProducts = products.filter((product) => {
    return product.category === categoryId
  })

  return (
    <>
      <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary capitalize">{categoryId}</h1>
      <hr className="border-b border-gainsboro w-10" />
      <ProductGrid products={categoryProducts} />
    </>
  )
}

export default CategoriesPage
