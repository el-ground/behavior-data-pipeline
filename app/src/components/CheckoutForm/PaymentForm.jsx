import React, { useContext, useState } from 'react'
import classnames from 'classnames'

import LoadingSVG from '../../svg/loading.svg'
import PaymentDialog from './PaymentDialog'
import CheckoutContext from '../../context/Checkout'

//TODO(ayan): techinically this is not a form, so will rename and refacor later
const PaymentForm = ({ onComplete }) => {
  const {
    allowPayment,
    error: checkoutError,
    processing: checkoutProcessing,
    success: checkoutSuccess,
  } = useContext(CheckoutContext)
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false)

  return (
    <div className="rounded-lg bg-white border-2 border-gainsboro p-3 md:p-6 my-3 md:my-6">
      <div className="flex items-center justify-between">
        <h3
          className={classnames('text-slategray text-lg md:text-xl font-bold', {
            'mb-6': allowPayment,
          })}
        >
          Pay
        </h3>
        {!allowPayment && (
          <p className="ml-4 text-lightgray text-sm">You must calculate shipping totals before proceeding to payment</p>
        )}
      </div>
      {allowPayment && (
        <>
          <p className="text-gray-600 text-base py-2 mb-2">Please select your payment method</p>
          <div className="mb-5 md:mb-3 flex -mx-2 py-1">
            <div className="px-2">
              <label htmlFor="visa" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="visa" checked />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfW8Limjfb710Fev3aMAGC95GovjnjXRIzOkVl2EPsYAxdl9LshbXPYKWar4nOWzjoDtU&usqp=CAU"
                  className="h-8 ml-3"
                />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="paypal" className="flex items-center cursor-not-allowed">
                <input type="radio" disabled className="form-radio h-5 w-5 text-indigo-500" name="type" id="paypal" />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="kakao" className="flex items-center cursor-not-allowed">
                <input type="radio" disabled className="form-radio h-5 w-5 text-indigo-500" name="type" id="kakao" />
                <img
                  src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/5e604f55017800001.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          {/* TODO(ayan): refactor below */}
          {checkoutError && <p className="text-red">{checkoutError}</p>}
          {checkoutProcessing && 'Please wait. Processing order.'}
          {checkoutSuccess && 'Order successfully received.'}
          <div className="flex items-center justify-center md:justify-end py-1 md:py-0">
            <button
              type="button"
              onClick={() => setIsPaymentDialogOpen(true)}
              className="bg-primary rounded-lg text-white px-3 py-2 h-10 focus:outline-none font-bold"
              disabled={checkoutProcessing}
            >
              {checkoutProcessing ? <LoadingSVG /> : 'Proceed to payment'}
            </button>
          </div>
          <PaymentDialog
            isOpen={isPaymentDialogOpen}
            onClose={() => setIsPaymentDialogOpen(false)}
            onComplete={onComplete}
          />
        </>
      )}
    </div>
  )
}

export default PaymentForm
