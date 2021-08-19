import React, { useContext } from 'react'
import { navigate } from 'gatsby'

import { useCart } from 'react-use-cart'

import PaymentForm from './PaymentForm'
import ShippingForm from './ShippingForm'
import CheckoutContext from '../../context/Checkout'

const CheckoutForm = () => {
  const { checkoutPayment, checkoutSuccess, updateShipping } = useContext(CheckoutContext)

  const { emptyCart } = useCart()

  const orderId = Math.random().toString(36).substring(7)

  const onShippingComplete = (event) => {
    event.preventDefault()
    updateShipping(3000)
    checkoutPayment()
  }
  const onPaymentComplete = (event) => {
    event.preventDefault()
    checkoutSuccess()
    emptyCart()
    navigate('/success', { state: { orderId } })
  }

  return (
    <>
      <ShippingForm onComplete={onShippingComplete} />
      <PaymentForm onComplete={onPaymentComplete} />
    </>
  )
}

export default CheckoutForm
