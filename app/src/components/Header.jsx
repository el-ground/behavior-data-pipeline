import React from 'react'
import { Link } from 'gatsby'
import { useCart } from 'react-use-cart'

import { categories } from '../res/data'

function Header({ location }) {
  const { isEmpty } = useCart()

  return (
    <header className="px-6 container mx-auto bg-white w-full max-w-screen-xl flex-grow flex items-center justify-between">
      <div className="pt-6 w-full">
        <nav className="flex items-center justify-between flex-wrap">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-current text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <ul className="hidden md:mx-auto md:block md:flex-grow md:ml-4">
            <li className="block my-4 md:inline-block md:my-0">
              <Link
                to="/"
                className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium text-lg"
              >
                All
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id} className="block my-4 md:inline-block md:my-0">
                <Link
                  className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium text-lg"
                  to={`/categories?id=${category.id}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <div className="ml-8">
              <Link to="/search" className="text-slategray">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 fill-current">
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </Link>
            </div>

            <div className="ml-8">
              <Link to="/cart" className="flex items-center relative">
                {!isEmpty && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-2 w-2 h-2 bg-primary rounded-full"></span>
                )}

                <span className="text-slategray">
                  <svg className="fill-current w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
