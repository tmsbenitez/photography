'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { type NavbarProps, type NavLinkProps } from '@/types'
import Link from 'next/link'

const Navbar: React.FC<NavbarProps> = ({ showItems }) => {
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' }
  ]

  return (
    <motion.ul className='flex flex-col px-6 lg:px-12 pt-36 gap-10'>
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          showItems={showItems}
          href={link.href}
          text={link.text}
          index={index}
        />
      ))}
    </motion.ul>
  )
}

export function NavLink({ showItems, href, text, index }: NavLinkProps) {
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 }
  }
  const itemTransition = { duration: 0.3 }
  const staggerDelay = 0.1

  return (
    <motion.li
      variants={itemVariants}
      initial='closed'
      animate={showItems ? 'open' : 'closed'}
      exit='closed'
      transition={{
        ...itemTransition,
        delay: showItems ? index * staggerDelay : 0
      }}
    >
      <Link
        href={href}
        className='text-white text-4xl sm:text-6xl font-serif hover-underline relative'
      >
        {text}
      </Link>
    </motion.li>
  )
}

export default Navbar
