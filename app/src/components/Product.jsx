import React from 'react'

import { Link } from 'gatsby'

const Product = ({ id, name, brand, category, type, sizes, price, quantity, colors, imgUrl, link }) => {
  const formattedPrice = `${price} KRW`

  return (
    <article key={id} className="p-6 w-full md:w-1/2 lg:w-1/3">
      <Link to={`/products?id=${id}`} className="group no-underline w-full h-full flex">
        <div className="bg-gainsboro rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6 hover:bg-opacity-75">
          <img src={imgUrl} alt={name} title={name} className="max-w-full h-auto align-middle" />
          <div className="pt-3 md:pt-6 text-center">
            <p className="text-slategray font-bold text-lg group-hover:text-primary mb-1">{name}</p>
            <p className="text-lightgray text-sm">{formattedPrice}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Product
