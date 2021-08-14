import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/main.css'

const Layout = ({ location, children }) => {
  return (
    <>
      <Header {...location} />
      <div className="container max-w-screen-xl mx-auto p-6 md:py-12 lg:py-16">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
