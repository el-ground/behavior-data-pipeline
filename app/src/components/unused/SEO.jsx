// import React from 'react'
// import { graphql, useStaticQuery, withPrefix } from 'gatsby'
// import { Helmet } from 'react-helmet'

// const SEO = ({ children, pageDescription, pageTitle, pageUrl, image }) => {
//   return (
//     <>
//       <Helmet defaultTitle={siteTitle} htmlAttributes={{ lang: 'en' }} titleTemplate={`%s | ${siteTitle}`}>
//         <title>{pageTitle || siteDescription}</title>
//         <meta name="description" content={pageDescription || siteDescription} />

//         <meta property="og:url" content={pageUrl || siteUrl} />
//         <meta property="og:description" content={pageDescription || siteDescription} />
//         <meta property="og:title" content={`${pageTitle || siteDescription} | ${siteTitle}`} />
//         {image && <meta property="og:image" content={withPrefix(image)} />}

//         <meta property="twitter:title" content={`${pageTitle || siteDescription} | ${siteTitle}`} />
//         <meta property="twitter:card" content={image ? 'summary_large_media' : 'summary'} />
//         {image && <meta property="twitter:image" content={withPrefix(image)} />}
//       </Helmet>
//       {children}
//     </>
//   )
// }

// export default SEO
