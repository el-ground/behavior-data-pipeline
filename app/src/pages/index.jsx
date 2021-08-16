import React from 'react'
import ProductGrid from '../components/ProductGrid'

import { products } from '../res/data'

const IndexPage = () => {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary">Latest</h1>

      <hr className="border-b border-gainsboro w-10" />

      <ProductGrid products={products} />
    </>
  )
}

export default IndexPage
