'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const variants = {
  open: { y: 0 },
  closed: { y: '-100%' }
}

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const [showItems, setShowItems] = useState<boolean>(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    document.body.style.overflow = !open ? 'auto' : 'hidden'

    if (open) {
      setTimeout(() => {
        setShowItems(true)
      }, 300)
    } else {
      setShowItems(false)
    }
  }, [open])

  return (
    <>
      <header className='w-full fixed p-6 lg:px-12 lg:py-8 flex items-center justify-between z-50 backdrop-blur-sm'>
        <div className='flex items-center gap-4'>
          <button
            className='flex flex-col gap-2 group cursor-pointer'
            onClick={handleToggle}
            aria-label='toggle-menu-button'
          >
            <div className='menu-icon'>
              <input
                className='menu-icon__checkbox py-4'
                type='checkbox'
                aria-label='toggle-menu-input'
                checked={open}
                onChange={handleToggle}
              />
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>
          <Link href='/' className='font-bold text-white tracking-wider'>
            PHOTOGRAPHY.
          </Link>
        </div>

        {!open && (
          <button className='uppercase text-white slide'>Contact</button>
        )}
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={variants}
            className='fixed bg-black w-full h-screen z-40'
            transition={{
              duration: 0.3
            }}
          >
            <Navbar showItems={showItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
