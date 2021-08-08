// import React from 'react'

// const Root = () => {
//   return (
//     <div>
//       Hello World!
//     </div>
//   )
// }

// export default Root

import React from 'react'

// import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import SEO from '../components/SEO'
import ProductGrid from '../components/ProductGrid'

import '../styles/main.css'
import { products } from '../res/data'

const Root = ({ children, location }) => {
  return (
    <>
      {/* <SEO /> */}
      {/* <Banner /> */}

      <Header {...location} />

      <div className="container mx-auto p-6 md:py-12 lg:py-16">
        <h1 className="font-bold text-3xl md:text-6xl mb-3 text-primary">Latest</h1>

        <hr className="border-b border-gainsboro w-10" />

        <ProductGrid products={products} />
      </div>

      <Footer />
    </>
  )
}

export default Root
