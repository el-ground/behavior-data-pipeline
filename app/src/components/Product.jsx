import React from 'react'

import { Link } from 'gatsby'
import { getFormattedPrice } from '../utils/getFormattedPrice'

const Product = ({ id, name, brand, category, type, sizes, price, quantity, colors, imgUrl, url }) => {
  const formattedPrice = getFormattedPrice(price)

  return (
    <article key={id} className="p-6 w-full md:w-1/2 lg:w-1/3">
      <Link to={`/products?id=${id}`} className="group no-underline w-full h-full flex">
        <div className="bg-gainsboro rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6 hover:opacity-90">
          <img src={imgUrl} alt={name} title={name} className="w-full h-auto align-middle overflow-hidden" />
          <div className="pt-3 md:pt-6 mb-1 flex justify-between">
            <p className="text-slategray font-bold text-base group-hover:text-primary flex text-left">{name}</p>
            <p className="text-lightgray text-sm flex text-right items-center">{brand}</p>
          </div>
          <div className="mb-1 flex justify-between">
            <p className="text-slategray text-base text-left">{formattedPrice}</p>
            <div className="items-center">
              {colors.map((color) => (
                <div
                  key={`${id}${color}`}
                  className="w-3 h-3 rounded-full inline-block mr-1 border border-black border-opacity-10 "
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Product
