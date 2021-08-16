import React, { useEffect } from 'react'
import ProductGrid from '../components/ProductGrid'
import { useCart } from 'react-use-cart'

import { products } from '../res/data'

const IndexPage = () => {
  // const { setItems } = useCart()

  // useEffect(() => {
  //   console.log('start')
  //   // localStorage.setItem('cart', 'afasfg')
  //   const cartItems = localStorage.getItem('cart')
  //   console.log(cartItems, 'startItems')
  //   if (cartItems) {
  //     // setItems(cartItems)
  //     console.log('setItems')
  //   }
  // }, [])

  return (
    <>
      <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary">Latest</h1>

      <hr className="border-b border-gainsboro w-10" />

      <ProductGrid products={products} />
    </>
  )
}

export default IndexPage
