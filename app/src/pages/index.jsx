import React, { useEffect } from 'react'
import ProductGrid from '../components/ProductGrid'
import { useCart } from 'react-use-cart'

import { products } from '../res/data'

const IndexPage = () => {
  const { setItems, isEmpty } = useCart()

  useEffect(() => {
    if (!isEmpty) return

    const cartItems = JSON.parse(localStorage.getItem('react-use-cart'))
    if (!cartItems.isEmpty) {
      console.log('setting up the cart')
      setItems(cartItems.items)
    }
  }, [])

  return (
    <>
      <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary">Latest</h1>

      <hr className="border-b border-gainsboro w-10" />

      <ProductGrid products={products} />
    </>
  )
}

export default IndexPage
