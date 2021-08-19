import React, { useContext } from 'react'
import { useCart } from 'react-use-cart'
import { getFormattedPrice } from '../utils/getFormattedPrice'

import CheckoutItem from './CheckoutItem'
import CheckoutContext from '../context/Checkout'

function CheckoutItemList() {
  const { items, cartTotal } = useCart()
  const { orderTotal, shipping } = useContext(CheckoutContext)

  return (
    <div className="rounded bg-white border-2 border-gainsboro p-3 md:p-6 my-3 md:my-6">
      {items.map(CheckoutItem)}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slategray">Subtotal</span>
        <span className="font-semibold">{getFormattedPrice(cartTotal)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-slategray">Shipping</span>
        <span className="font-semibold">{shipping ? getFormattedPrice(shipping) : '-'}</span>
      </div>
      <hr className="border-b border-gainsboro my-3 w-20" />
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-slategray">Total</span>
        <span className="text-xl font-bold text-primary">{getFormattedPrice(orderTotal)}</span>
      </div>
    </div>
  )
}

export default CheckoutItemList
