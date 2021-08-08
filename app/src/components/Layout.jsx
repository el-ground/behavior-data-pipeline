import React from 'react'

import '../styles/main.css'

import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'
// import SEO from './SEO';

const Layout = ({ children, location }) => {
  return (
    <>
      {/* <SEO /> */}
      <Banner />

      <Header {...location} />

      <div className="container mx-auto p-6 md:py-12 lg:py-16">{children}</div>

      <Footer />
    </>
  )
}

export default Layout
