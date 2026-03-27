import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SlideContainerProps {
  children: ReactNode
  slideKey: string
}

export function SlideContainer({ children, slideKey }: SlideContainerProps) {
  return (
    <motion.div
      key={slideKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex flex-col justify-center overflow-hidden"
    >
      {children}
    </motion.div>
  )
}
