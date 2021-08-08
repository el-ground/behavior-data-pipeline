import React from 'react'
// import Img from 'gatsby-image'
// import { StaticImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'
import { convertToSlug } from '../utils/text-to-slug'

// const convertToSlug = (text) => {
//   return text
//     .toLowerCase()
//     .replace(/[^\w ]+/g, '')
//     .replace(/ +/g, '-')
// }

const Product = ({ id, name, brand, category, type, sizes, price, quantity, colors, imgUrl, link }) => {
  const slug = `${convertToSlug(name)}#${id}`
  // console.log(slug, 'slug')
  const formattedPrice = `${price} KRW`
  // console.log(imgUrl, 'url')
  return (
    <article key={id} className="p-6 w-full md:w-1/2 lg:w-1/3">
      <Link to={`/products/${slug}`} className="group no-underline w-full h-full flex">
        <div className="bg-gainsboro rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6">
          {/* TODO: use Gatsby Image instead */}
          <img src={imgUrl} alt={name} title={name} />

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
