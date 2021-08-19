import React, { useContext } from 'react'
import classnames from 'classnames'

import CheckoutContext from '../../context/Checkout'
import { countries } from '../../res/data'

const ShippingForm = ({ onComplete }) => {
  const { allowPayment, processing, checkoutProcessing, updateShipping } = useContext(CheckoutContext)

  const disableInput = allowPayment || processing

  const inputStyleClass =
    'appearance-none bg-gainsboro border-2 px-4 py-3 pr-8 focus:outline-none focus:bg-white text-black w-full rounded-lg'
  const selectStyleClass =
    'block appearance-none w-full bg-gainsboro border-2 px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray rounded-lg form-select'

  return (
    <form onSubmit={onComplete}>
      <div className="rounded-lg bg-white border-2 border-gainsboro p-3 md:p-6 my-3 md:my-6">
        <h3 className="text-slategray text-lg md:text-xl font-bold mb-6">Shipping</h3>
        <div className="mb-3 md:mb-6">
          <input
            className={inputStyleClass}
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
            aria-label="Name"
          />
        </div>

        <div className="md:flex -mx-3">
          <div className="md:w-1/2 mb-3 md:mb-6 px-3">
            <input
              className={inputStyleClass}
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              aria-label="Email"
            />
          </div>

          <div className="md:w-1/2 mb-3 md:mb-6 px-3">
            <input
              className={inputStyleClass}
              id="phone"
              name="phone"
              type="tel"
              pattern="[0-9,-,+]*"
              required
              placeholder="Contact no."
              aria-label="Phone"
            />
          </div>
        </div>

        <div className="mb-3 md:mb-6">
          <input
            className={inputStyleClass}
            id="shipping.address1"
            name="shipping.address1"
            type="text"
            required
            placeholder="Address line 1"
            aria-label="shipping.address1"
          />
        </div>

        <div className="mb-3 md:mb-6">
          <input
            className={inputStyleClass}
            id="shipping.address2"
            name="shipping.address2 "
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            aria-label="shipping.address2"
          />
        </div>

        <div className="md:flex -mx-3">
          <div className="md:w-1/2 mb-3 md:mb-6 px-3">
            <input
              className={inputStyleClass}
              id="shipping.city"
              name="shipping.city "
              type="text"
              required
              placeholder="City"
              aria-label="shipping.city"
            />
          </div>

          <div className="md:w-1/2 mb-3 md:mb-6 px-3">
            <select name="shipping.country" className={selectStyleClass}>
              {countries?.map(({ name, code }) => (
                <option key={code} value={code} selected={code === 'KR' ? true : false}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:flex -mx-3">
          <div className="md:w-1/2 mb-3 md:mb-6 px-3">
            <input
              className={inputStyleClass}
              id="shipping.zip"
              name="shipping.city "
              type="text"
              pattern="[0-9]*"
              required
              placeholder="ZIP / Postcode"
              aria-label="shipping.zip"
            />
          </div>
        </div>

        {!allowPayment && (
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className={classnames('bg-primary rounded-lg text-white px-3 py-2 h-10 focus:outline-none font-bold', {
                'cursor-not-allowed opacity-50': disableInput,
              })}
              disabled={disableInput}
            >
              {'Calculate shipping'}
            </button>
          </div>
        )}
      </div>
    </form>
  )
}

export default ShippingForm
