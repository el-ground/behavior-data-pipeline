import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import { CartProvider } from 'react-use-cart'
import { ToastContainer } from 'react-toastify'
import Layout from './src/components/Layout'

import { handleItemAdded, handleItemUpdated, handleItemRemoved } from './src/utils/cart-helpers'

const toastOptions = {
  position: 'top-right',
  draggable: false,
  toastClassName: 'bg-primary text-white text-center px-2 py-3 shadow-none rounded-lg',
  progressClassName: 'h-0',
  closeButton: false,
  autoClose: 2000,
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider onItemAdd={handleItemAdded} onItemUpdate={handleItemUpdated} onItemRemove={handleItemRemoved}>
      {element}
      <ToastContainer {...toastOptions} />
    </CartProvider>
  )
}
