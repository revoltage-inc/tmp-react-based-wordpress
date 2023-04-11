import { useEffect } from 'react'

export interface Props {
  children: string
}

export const Title = ({ children }: Props) => {
  useEffect(() => {
    document.title = children
  }, [children])

  return <></>
}
