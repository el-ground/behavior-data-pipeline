import React from 'react'
import { Link, navigate } from 'gatsby'
import { useCart } from 'react-use-cart'
import { getFormattedPrice } from '../utils/getFormattedPrice'

import CartItemList from './CartItemList'

const Cart = () => {
  const { isEmpty, cartTotal } = useCart()
  const formattedSubTotal = getFormattedPrice(cartTotal)

  if (isEmpty)
    return <p className="py-2 md:py-10 leading-loose text-darkgray text-xl font-medium">Your cart is empty</p>

  return (
    <>
      <CartItemList />

      <div className="mt-4 md:mt-6 py-5 md:py-6 border-t-2 border-gainsboro">
        <div className="flex justify-between text-base font-medium text-slategray">
          <p>Subtotal</p>
          <p className="text-lg font-semibold  ">{formattedSubTotal}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6 md:mt-14">
          <Link
            to="/checkout"
            className="bg-primary hover:bg-slategray text-white md:w-72 mx-auto md:mt-8  flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="text-indigo-600 font-medium hover:text-indigo-500"
              onClick={() => navigate(-1)}
            >
              Continue Shopping
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Cart
