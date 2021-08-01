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

import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

import '../styles/main.css'

const Root = ({ children, location }) => {
  return (
    <>
      <SEO />
      <Banner />

      <Header {...location} />

      <div className="container mx-auto p-6 md:py-12 lg:py-16">{children}</div>

      <Footer />
    </>
  )
}

export default Root
