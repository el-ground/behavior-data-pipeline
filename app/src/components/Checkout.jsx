import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import { navigate } from 'gatsby'

import { CheckoutProvider } from '../context/Checkout'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutItemList from './CheckoutItemList'

const Checkout = () => {
  const { isEmpty } = useCart()

  useEffect(() => {
    if (isEmpty) {
      const navigateTimer = setTimeout(() => {
        navigate(`/cart`)
      }, 3000)

      return () => clearTimeout(navigateTimer)
    }
  }, [isEmpty])

  if (isEmpty)
    return <p className="py-2 md:py-10 leading-loose text-darkgray text-xl font-medium">Your cart is empty</p>

  return (
    <CheckoutProvider>
      <div className="lg:flex -mx-4">
        <div className="lg:w-2/5 px-4 order-last">
          <div className="lg:sticky lg:top-0">
            <CheckoutItemList />
          </div>
        </div>
        <div className="lg:w-3/5 px-4 order-first">
          <CheckoutForm />
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default Checkout
