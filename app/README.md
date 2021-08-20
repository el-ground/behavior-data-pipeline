# behavior-data-pipeline

[![Netlify Status](https://api.netlify.com/api/v1/badges/c77a7916-6610-4ec9-a35d-e398deedba56/deploy-status)](https://app.netlify.com/sites/behavior-data-pipeline/deploys)

https://behavior-data-pipeline.netlify.app/

## Description

A deployable demo e-commerce web service implementing Google Analytics 4 with a DOM simulator to generate user behavior data.

## Tech stack

- Gatsby (React)
- TailwindCSS
- Netlify
- etc: react-use-cart, react-toastify, headlessui, reach/portal

## Structure overview

A quick look at the top-level files and directories of this project.

    .
    ├── node_modules
    ├── src
    |   ├── components
    |       ├── CheckoutForm
    |       ├── unused
    |       ├── ...
    |   ├── context
    |   ├── pages
    |   ├── res
    |   ├── styles
    |   ├── svg
    |   ├── utils
    ├── .gitignore
    ├── .prettierrc
    ├── .eslintrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-ssr.js
    ├── yarn.lock
    ├── package.json
    └── README.md

1.  **`/src`**: This directory contains all of the code related to what you see on the front-end of this site.
2.  **`/src/components`**: Contains all custom made components using **tailwindCSS**
3.  **`/src/components/unused`**: Contains third-party components that still have not found their use and were not refactored.
4.  **`/src/context`**: Custom context used for checkout process
5.  **`/src/pages`**: Gatsby uses the files from this directory to build pages (i.e. routes)
6.  **`/src/res`**: Since this project does not use any CMS, all the data (e.g clothing items, categories, etc) used is stored inside res/data.ts file.
7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/). These allow customization/extension of default Gatsby settings affecting the browser. We use it in our project to wrap all page elements in a custom Layout component and to wrap the root element in a CartProvider
8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).
9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/). These allow customization of default Gatsby settings affecting server-side rendering.

## How to install

1. **Install Gatsby CLI.**

   ```shell
   yarn global add gatsby-cli
   ```

2. **Check Gatsby CLI version.**

   ```shell
   gatsby --version
   ```

3. **Run yarn under site directory.**

   ```shell
   yarn
   ```

4. **Start the development server.**

   ```shell
   # Under the site directory, start the development server by running the following
   yarn dev

   # or this
   gatsby develop
   ```

## Progress

1. Create an usable webapp interface which implements

   - [ ] search (wip)
   - [x] item lists page (both home and search results), clicking the item links to the item detail page
   - [x] item detail page, which contains add to cart / purchase button
   - [ ] sign up / login (wip)
   - [x] add to cart
   - [x] begin checkout
   - [x] purchase
   - [ ] add any features of behaviors referenced from [the GA4 documentation](https://support.google.com/analytics/answer/9268036?hl=en&ref_topic=9756175)

2. Create Google Analytics 4 and Google Tag Manager environment
   - [ ] Create GA4 environment
   - [ ] Create Google Tag Manager environemnt
   - [ ] Install Google Tag Manager to the webapp
   - [ ] Let the webapp fire events
   - [ ] Configure triggers, variables, and tags in GTM
   - [ ] Test that data is collected in GA4 correctly
   - [ ] Create Google Cloud Platform environment
   - [ ] Configure GA4 to send data to BigQuery
   - [ ] Test that data is collected in BigQuery correctly
