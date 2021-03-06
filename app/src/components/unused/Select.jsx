import React, { forwardRef } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'

const Select = forwardRef(({ disabled, errors = {}, register, name, defaultValue, options, ...rest }, ref) => {
  const selectClass = classNames(
    'block appearance-none w-full bg-gainsboro border-2 px-4 py-3 pr-8 focus:outline-none focus:bg-white text-slategray rounded-lg',
    {
      'cursor-not-allowed opacity-50': disabled,
    }
  )

  return (
    <>
      <div className="relative">
        <select name={name} ref={register} className={selectClass} disabled={disabled} {...rest}>
          {options?.map(({ name, code }) => (
            <option key={code} value={code} selected={code === 'KR' ? true : false}>
              {name}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slategray">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <ErrorMessage as={<p className="mt-2 text-red text-sm" />} name={name} errors={errors} />
    </>
  )
})

export default Select
