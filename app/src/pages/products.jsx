import React, { useState, useEffect } from 'react'
import { useCart } from 'react-use-cart'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
// import ReviewsList from '../components/ReviewsList'
import { products } from '../res/data'
import { getFormattedPrice } from '../utils/getFormattedPrice'
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from '../components/Drawer'
import { navigate } from 'gatsby'

const ProductPage = ({ location }) => {
  const params = location.search ? new URLSearchParams(location.search) : null
  const variantId = params && params.get('id')
  if (!products || !variantId) return null

  const product = products.find((product) => {
    return product.id === variantId
  })
  if (!product) return null

  const initialColor = (params && params.get('color')) ?? product.colors[0]

  const initialSize = () => {
    const variantSize = params && params.get('size')
    const sizeIndex = variantSize
      ? product.sizes.findIndex((size) => size.name === variantSize)
      : product.sizes.findIndex((size) => size.inStock)
    return product.sizes[sizeIndex]
  }

  const { addItem } = useCart()

  //   localStorage.setItem('cart', items.toString())
  // }, [items])
  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem('cart')), 'cart')
  // }, [])

  const formattedPrice = getFormattedPrice(product.price)
  const [variantQuantity, setVariantQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(initialColor)
  const [selectedSize, setSelectedSize] = useState(initialSize)

  const [isReviewDrawerOpen, setIsReviewDrawerOpen] = useState(false)
  const toggleReviewDrawer = () => setIsReviewDrawerOpen(!isReviewDrawerOpen)

  const [isSizeDrawerOpen, setIsSizeDrawerOpen] = useState(false)
  const toggleSizeDrawer = () => setIsSizeDrawerOpen(!isSizeDrawerOpen)

  useEffect(() => {
    navigate(`/products?id=${variantId}&color=${selectedColor}&size=${selectedSize.name}`)
  }, [selectedColor, selectedSize])

  return (
    <>
      <div className="lg:flex -mx-6">
        <div className="mb-5 md:mb-8 px-6 lg:w-1/2">
          <div className="w-full overflow-hidden relative bg-gainsboro rounded-lg">
            <img
              className="w-full h-auto overflow-hidden"
              src={product.imgUrl}
              alt={product.name}
              title={product.name}
            />
          </div>
        </div>
        <div className="px-6 md:py-3 lg:w-1/2 flex-col">
          <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-4 text-primary leading-tight">{product.name}</h1>

          <div className="mb-3 md:mb-6 flex justify-between">
            <p className="font-semibold text-2xl text-slategray ">{formattedPrice}</p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightgray text-2xl text-right hover:text-primary"
            >
              {product.brand}
            </a>
          </div>
          {/* Reviews */}
          <div className="mb-6">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={classNames(
                      product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p>
              <a
                href="#"
                onClick={toggleReviewDrawer}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {product.reviewCount} reviews
              </a>
            </div>
          </div>
          {product.description && (
            <div className="mb-4 md:mb-8">
              <p className="leading-loose text-lightgray">{product.description}</p>
            </div>
          )}
          <div className="md:flex md:flex-wrap -mx-3">
            {/* Colors */}
            <div className="md:w-3/4 px-3 mb-6">
              <label className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray" htmlFor="color">
                Color
              </label>
              <RadioGroup id="color" value={selectedColor} onChange={setSelectedColor} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <RadioGroup.Option
                      key={color}
                      style={{ backgroundColor: color }}
                      value={color}
                      className={({ checked }) =>
                        classNames(
                          checked ? 'ring ring-offset-1 ring-indigo-600' : '',
                          '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      <RadioGroup.Label as="p" className="sr-only">
                        {color.name}
                      </RadioGroup.Label>
                      <span
                        aria-hidden="true"
                        className="h-8 w-8 border border-black border-opacity-10 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Quantity */}
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
                  {new Array(5)
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
          {/* Sizes */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h4 className="block text-sm font-bold tracking-widest uppercase mb-2 text-slategray">Size</h4>
              <a
                href="#"
                onClick={toggleSizeDrawer}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Size guide
              </a>
            </div>
            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
              <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
              <div className="grid grid-cols-4 gap-4">
                {product.sizes.map((size) => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={({ active }) =>
                      classNames(
                        size.inStock
                          ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                        active ? 'ring-2 ring-indigo-600' : '',
                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                        {size.inStock ? (
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked ? 'border-indigo-600' : 'border-transparent',
                              'absolute -inset-px rounded-md pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                          >
                            <svg
                              className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </div>
                        )}
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          {/* Add to cart button */}
          <div className="my-10">
            <button
              className="block w-full bg-primary hover:bg-slategray px-4 py-3 rounded-lg text-white text-sm font-bold tracking-widest uppercase focus:outline-none"
              onClick={() =>
                addItem(
                  {
                    // need to have unique id per variant
                    id: `${product.id}&color=${selectedColor}&size=${selectedSize.name}`,
                    price: product.price,
                    image: product.imgUrl,
                    name: product.name,
                    description: product.description,
                    color: selectedColor,
                    size: selectedSize.name,
                    brand: product.brand,
                  },
                  variantQuantity
                )
              }
              disabled={!variantQuantity}
            >
              Add to cart
            </button>
          </div>
          {/* Reviews Drawer */}
          <Drawer isOpen={isReviewDrawerOpen} onClose={toggleReviewDrawer} position="right">
            <DrawerHeader>Reviews</DrawerHeader>
            <DrawerBody>Sorry, this page is still in development...</DrawerBody>
            <DrawerFooter>
              <button
                onClick={toggleReviewDrawer}
                className="bg-primary hover:bg-slategray px-6 py-3 rounded-lg text-white text-sm font-bold"
              >
                Close
              </button>
            </DrawerFooter>
          </Drawer>
          {/*Size Guide Drawer */}
          <Drawer isOpen={isSizeDrawerOpen} onClose={toggleSizeDrawer} position="right">
            <DrawerHeader>Size guide</DrawerHeader>
            <DrawerBody>Sorry, this page is still in development...</DrawerBody>
            <DrawerFooter>
              <button
                onClick={toggleSizeDrawer}
                className="bg-primary hover:bg-slategray px-6 py-3 rounded-lg text-white text-sm font-bold"
              >
                Close
              </button>
            </DrawerFooter>
          </Drawer>
        </div>
      </div>

      {/* {product.reviews ? <ReviewsList productId={product.id} reviews={product.reviews} /> : null} */}
    </>
  )
}

export default ProductPage
