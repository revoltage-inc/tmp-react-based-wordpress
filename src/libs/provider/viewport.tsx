import { createContext, ReactNode, useEffect, useState } from 'react'

const ViewportContext = createContext(null)

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const handleResize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight })

    const element = document.querySelector('head meta[name="viewport"]')

    if (!element) {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'viewport')
      meta.setAttribute(
        'content',
        `width=${size.width > 375 ? 'device-width' : '375'},height=device-height,initial-scale=1.0`
      )
      document.querySelector('head')!.appendChild(meta)
    } else {
      element.setAttribute(
        'content',
        `width=${size.width > 375 ? 'device-width' : '375'},height=device-height,initial-scale=1.0`
      )
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return <ViewportContext.Provider value={null}>{children}</ViewportContext.Provider>
}
