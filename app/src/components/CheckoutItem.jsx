import React from 'react'
import { getFormattedPrice } from '../utils/getFormattedPrice'

function CheckoutItem({ id, name, itemTotal, quantity, image }) {
  const formattedTotal = getFormattedPrice(itemTotal)

  return (
    <div key={id} className="flex items-center mb-3">
      <div className="mr-4 relative">
        <img src={image} alt={name} className="h-16 md:h-20 w-16 md:w-20  object-cover" />
        <div className="w-5 h-5 bg-slategray text-white text-xs flex items-center justify-center absolute top-0 right-0 -mt-1 -mr-1 rounded">
          {quantity}
        </div>
      </div>

      <div className="flex-grow mr-4">
        <h4 className="text-slategray text-sm font-medium">{name}</h4>
      </div>
      <div className="text-right">
        <p className="font-medium text-lightgray text-sm">{formattedTotal}</p>
      </div>
    </div>
  )
}

export default CheckoutItem
