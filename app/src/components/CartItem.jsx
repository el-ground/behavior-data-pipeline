import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'gatsby'
import { getFormattedPrice } from '../utils/getFormattedPrice'

const CartItem = ({ id, name, quantity, color, size, itemTotal, price, image }) => {
  const { updateItemQuantity, removeItem, items } = useCart()

  const increment = () => updateItemQuantity(id, quantity + 1)
  const decrement = () => updateItemQuantity(id, quantity - 1)
  const remove = () => removeItem(id)

  const formattedUnitPrice = getFormattedPrice(price)
  const formattedLineTotal = getFormattedPrice(itemTotal)

  return (
    <div key={id} className="md:bg-gainsboro md:rounded-lg flex md:items-center py-0.5 md:p-3.5 md:mb-3">
      <div className="w-3/5 flex flex-grow">
        <div className="flex-shrink-0 w-24 h-24 border border-gainsboro rounded-md overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-center object-cover" />
        </div>
        <div className="flex flex-col">
          <Link to={`/products?id=${id}`}>
            <h4 className="text-slategray font-medium text-sm md:text-base">{name}</h4>
          </Link>
          <h4 className="mt-1 font-thin text-gray-500 text-sm">{`${color} / ${size}`}</h4>
          <button
            className="hidden md:flex font-light text-sm text-indigo-600 hover:text-slategray  items-center focus:outline-none mt-auto"
            onClick={remove}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center ml-auto">
        <button className="text-slategray hover:text-primary focus:outline-none p-1" onClick={increment}>
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>

        <span className="mx-3 md:mx-6 p-1">{quantity}</span>
        <button className="text-slategray hover:text-primary focus:outline-none p-1" onClick={decrement}>
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
      <div className="text-right md:w-1/5 flex flex-col">
        <button
          className="md:hidden font-light text-sm text-indigo-600 hover:text-slategray focus:outline-none mb-2 ml-auto"
          onClick={remove}
        >
          <svg className="fill-current w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
        <p className="font-medium text-slategray">{formattedLineTotal}</p>
        {quantity > 1 && <p className="text-lightgray text-sm">{formattedUnitPrice} each</p>}
      </div>
    </div>
  )
}

export default CartItem
