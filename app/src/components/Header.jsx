import React from 'react'
import { Link } from 'gatsby'
import { useCart } from 'react-use-cart'
import data from '../res/data'

function Header({ pathname }) {
  const categories = data.categories
  const { isEmpty } = useCart()

  return (
    <header className="px-6 container mx-auto bg-white w-full block flex-grow flex items-center w-auto justify-between">
      <div className="pt-6 w-full">
        <nav className="flex items-center justify-between flex-wrap">
          <svg className="fill-current text-primary w-5" viewBox="0 0 26 44" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="m20.7997 5.86658-5.1998 2.9335-5.1998 2.93312-5.20027 2.9335v5.8665 2.9336 2.933 2.9335 2.9335l5.20027-2.9335 5.1998-2.9335v-2.933-2.9336l-5.1998 2.9336v-5.8666l5.1998-2.9335 5.1998-2.9335v2.9335 2.9335 2.933 2.9336 2.933 2.9335l-5.1998 2.9335-5.1998 2.9331-5.20027 2.9335-5.19983 2.9331 5.19983 2.9335 5.20027-2.9335 5.1998-2.9331 5.1998-2.9335 5.2003-2.9331v-5.867-5.8666-5.8665-2.2501-3.61652-5.86658l-5.2003-2.9335z"
              fillRule="evenodd"
            />
          </svg>

          <ul className="hidden md:mx-auto md:block md:flex-grow md:ml-4">
            <li className="block my-4 md:inline-block md:my-0">
              <Link
                to="/"
                className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium"
              >
                Catalog
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id} className="block my-4 md:inline-block md:my-0">
                <Link
                  className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium"
                  to={`/categories/${category.slug}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <div className="ml-8">
              <Link to="/search" className="text-slategray">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current w-4">
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
                  <svg className="fill-current w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
