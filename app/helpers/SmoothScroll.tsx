'use client'

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  ReactNode
} from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface SmoothScrollProps {
  children: ReactNode
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const ghostRef = useRef<HTMLDivElement | null>(null)
  const [scrollRange, setScrollRange] = useState<number>(0)
  const [viewportW, setViewportW] = useState<number>(0)

  useLayoutEffect(() => {
    if (scrollRef.current) setScrollRange(scrollRef.current.scrollWidth)
  }, [])

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    if (ghostRef.current) resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div className='hidden sm:block fixed left-0 right-0 will-change-transform'>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className='relative h-screen w-max flex items-end p-12'
        >
          <div className='relative flex gap-2'>{children}</div>
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className='w-screen'
      />
    </>
  )
}

export default SmoothScroll
