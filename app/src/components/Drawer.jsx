import React, { useEffect, useRef } from 'react'
import Portal from '@reach/portal'

const style = {
  animation: {
    right: 'animate-drawer-right',
  },
  orientation: {
    right: `flex w-8/12 md:w-80 h-full right-0 mx-0 my-0 absolute focus:outline-none `,
  },
  body: `flex-shrink flex-grow px-4 py-6`,
  headerTitle: `font-bold text-xl md:text-3xl text-primary leading-tight`,
  content: `relative flex flex-col bg-white pointer-events-auto leading-loose text-darkgray`,
  header: `items-start justify-between p-4 border-b border-gainsboro`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-hidden`,
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gainsboro`,
}

export const Drawer = ({ children, isOpen, onClose }) => {
  const ref = useRef(null)
  // close drawer on click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!isOpen) return
        onClose()
      }
    }
    window.addEventListener('mousedown', handleOutsideClick)
    return () => window.removeEventListener('mousedown', handleOutsideClick)
  }, [isOpen, ref, onClose])
  // close drawer when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen) return
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keyup', handleEscape)
    return () => document.removeEventListener('keyup', handleEscape)
  }, [isOpen, onClose])
  // hide scrollbar and prevent body from moving when drawer is open
  //put focus on drawer dialogue
  useEffect(() => {
    if (!isOpen) return
    ref.current?.focus()
    const html = document.documentElement
    const scrollbarWidth = window.innerWidth - html.clientWidth
    html.style.overflow = 'hidden'
    html.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      html.style.overflow = ''
      html.style.paddingRight = ''
    }
  }, [isOpen])

  return (
    <Portal>
      {isOpen && (
        <>
          <div className={style.overlay} />
          <div className={style.container}>
            <div aria-modal={true} className={style.orientation.right} ref={ref} role="dialogue" tabIndex={-1}>
              <div className={`${style.animation.right} ${style.content}`}>{children}</div>
            </div>
          </div>
        </>
      )}
    </Portal>
  )
}

export const DrawerHeader = ({ children }) => {
  return (
    <div className={style.header}>
      <h4 className={style.headerTitle}>{children}</h4>
    </div>
  )
}

export const DrawerBody = ({ children }) => {
  return <div className={style.body}>{children}</div>
}
export const DrawerFooter = ({ children }) => {
  return <div className={style.footer}>{children}</div>
}
