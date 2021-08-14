import React, { useState, useEffect } from 'react'
import { useCart } from 'react-use-cart'

// import queryString from 'query-string'
// import { navigate } from '@reach/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import ReviewsList from '../components/ReviewsList'
import { products } from '../res/data'

const ProductPage = ({ location }) => {
  const params = location.search ? new URLSearchParams(location.search) : null
  const variantId = params && params.get('id')

  if (!products || !variantId) return null

  const variant = products.find((product) => {
    return product.id === variantId
  })

  if (!variant) return null

  const { addItem } = useCart()
  const [variantQuantity, setVariantQuantity] = useState(1)
  const formattedPrice = `${variant.price} KRW`

  // const activeVariant = variants.find((variant) => variant.id === activeVariantId)
  // useEffect(() => {
  //   navigate(`?variantId=${activeVariantId}`, { replace: true })
  // }, [activeVariantId])

  return (
    <>
      <div className="lg:flex -mx-6">
        <div className="mb-8 px-6 md:mb-0 lg:w-1/2">
          <div className="w-full overflow-hidden relative bg-gainsboro rounded-lg">
            <img src={variant.imgUrl} alt={variant.name} title={variant.name} />
          </div>
        </div>

        <div className="px-6 md:py-3 lg:w-1/2">
          <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary leading-tight">{variant.name}</h1>

          <div className="mb-6">
            <p className="font-semibold text-2xl text-slategray">{formattedPrice}</p>
          </div>

          {variant.description && (
            <div className="mb-6">
              <p className="leading-loose text-lightgray">{variant.description}</p>
            </div>
          )}
          <div className="md:flex md:flex-wrap -mx-3">
            <div className="md:w-3/4 px-3 mb-6">
              <label className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray" htmlFor="style">
                Style
              </label>
              {/* 
              <div className="relative">
                <select
                  id="style"
                  value={activeVariantId}
                  onChange={({ target: { value } }) => setActiveVariantId(value)}
                  className="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg"
                >
                  {variants.map((variant, index) => (
                    <option key={index} value={variant.id}>
                      {variant.splitName}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slategray">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div> */}
            </div>

            <div className="md:w-1/4 px-3 mb-6">
              <label
                className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray"
                htmlFor="quantity"
              >
                Quantity
              </label>

              <div className="relative">
                <select
                  id="quantity"
                  value={variantQuantity}
                  className="block appearance-none w-full bg-gainsboro border-2 border-gainsboro focus:border-slategray px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray focus:text-slategray rounded-lg"
                  onChange={({ target: { value } }) => setVariantQuantity(parseInt(value))}
                >
                  {new Array(variant.quantity)
                    .fill(0)
                    .map((v, k) => k + 1)
                    .map((i) => ({ value: i, label: i }))
                    .map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slategray">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <button
              className="block w-full bg-primary hover:bg-slategray px-4 py-3 rounded-lg text-white text-sm font-bold tracking-widest uppercase focus:outline-none"
              onClick={() =>
                addItem(
                  {
                    id: variant.id,
                    price: variant.price,
                    image: variant.imgUrl,
                    name: variant.name,
                    description: variant.description,
                  },
                  variantQuantity
                )
              }
              disabled={!variantQuantity}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* {product.reviews ? <ReviewsList productId={product.id} reviews={product.reviews} /> : null} */}
    </>
  )
}

export default ProductPage
