import React, { useContext, useState, useMemo, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import classnames from 'classnames'

const PaymentDialog = ({ isOpen, onClose, onComplete }) => {
  const [isFrontSide, setIsFrontSide] = useState(true)

  const [cardHolder, setCardHolder] = useState('Hong Gildong')
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')
  const [expiryMonth, setExpiryMonth] = useState('MM')
  const [expiryYear, setExpiryYear] = useState('YY')
  const [securityCode, setSecurityCode] = useState('000')

  const formatCardNumber = () => {
    if (cardNumber.length > 20) {
      return
    }
    setCardNumber((cardNumber) => cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '))
  }
  const isValid = useMemo(() => {
    if (cardHolder.length < 4) return false
    if (cardNumber === '' || cardNumber.length !== 20) return false
    if (expiryMonth === '' || expiryMonth === 'MM') return false
    if (expiryYear === '' || expiryYear === 'YY') return false
    if (securityCode.length !== 3 || securityCode === '000') return false
    return true
  }, [cardNumber, cardHolder, expiryYear, expiryMonth, securityCode])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-auto max-w-md mx-auto rounded-xl inline-block md:p-2 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl">
              <header className="flex flex-col justify-center items-center">
                <div
                  className={classnames('relative transition ease-out duration-300', {
                    hidden: !isFrontSide,
                  })}
                >
                  <img
                    className="w-full h-auto"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                    alt="front credit card"
                  />
                  <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                    <p className="number mb-5 sm:text-xl">{cardNumber}</p>
                    <div className="flex flex-row justify-between">
                      <p className="capitalize">{cardHolder}</p>
                      <div className="">
                        <span>{expiryMonth}</span>
                        <span>{expiryMonth && '/'} </span>
                        <span>{expiryYear}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classnames('relative transition ease-out duration-300', {
                    hidden: isFrontSide,
                  })}
                >
                  <img
                    className="w-full h-auto"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                    alt=""
                  />
                  <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12">
                    <div className="border border-white w-16 h-9 flex justify-center items-center">
                      <p>{securityCode}</p>
                    </div>
                  </div>
                </div>
                <ul className="flex">
                  <li className="mx-2">
                    <img
                      className="w-14"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                      alt=""
                    />
                  </li>
                  <li className="ml-5">
                    <img
                      className="w-7"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                      alt=""
                    />
                  </li>
                </ul>
              </header>
              <main className="mt-4 p-4">
                <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
                <div className="">
                  <div className="my-3">
                    <input
                      type="text"
                      required
                      className="block w-full px-5 py-2 rounded-lg bg-white shadow-none placeholder-gray-400 text-gray-700 focus:ring focus:outline-none border-2"
                      placeholder="Card holder"
                      maxLength="22"
                      onChange={(e) => {
                        setCardHolder(e.target.value)
                        setIsFrontSide(true)
                      }}
                    />
                  </div>
                  <div className="my-3">
                    <input
                      type="text"
                      required
                      className="block w-full px-5 py-2 border-2 rounded-lg bg-white shadow-none placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="Card number"
                      maxLength="16"
                      onChange={(e) => {
                        setCardNumber(e.target.value)
                        setIsFrontSide(true)
                        formatCardNumber()
                      }}
                    />
                  </div>
                  <div className="my-3 flex flex-col">
                    <div className="mb-2">
                      <label htmlFor="" className="text-gray-700">
                        Expired
                      </label>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <select
                        name="expiry.month"
                        id="expiry.month"
                        required
                        className="form-select appearance-none block w-full px-5 py-2 border-2 rounded-lg bg-white shadow-none placeholder-gray-400 text-gray-700 focus:ring focus:outline-none bg-select"
                        onChange={(e) => {
                          setExpiryMonth(e.target.value)
                          setIsFrontSide(true)
                        }}
                      >
                        <option value="" selected disabled>
                          MM
                        </option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        name="expiry.year"
                        id="expiry.year"
                        required
                        className="form-select appearance-none block w-full px-5 py-2 border-2 rounded-lg bg-white shadow-none placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        onChange={(e) => {
                          setExpiryYear(e.target.value)
                          setIsFrontSide(true)
                        }}
                      >
                        <option value="" selected disabled>
                          YY
                        </option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                      </select>
                      <input
                        type="text"
                        required
                        className="block w-full col-span-2 px-5 py-2 border-2 rounded-lg bg-white shadow-none placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                        placeholder="Security code"
                        maxLength="3"
                        onChange={(e) => {
                          setSecurityCode(e.target.value)
                          setIsFrontSide(false)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </main>
              <footer className="md:mt-4 p-4">
                <button
                  className={classnames(
                    'w-full bg-primary hover:bg-slategray px-4 py-3 rounded-lg text-white text-sm font-bold tracking-widest uppercase focus:outline-none transition-colors',
                    {
                      'cursor-not-allowed opacity-50': !isValid,
                    }
                  )}
                  disabled={!isValid}
                  onClick={onComplete}
                  type="button"
                >
                  Pay now
                </button>
              </footer>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default PaymentDialog
