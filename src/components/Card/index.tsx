import { PropsWithChildren } from 'react'
import { CardWrapper } from './styled'

type CardProps = PropsWithChildren<{}>

export default function Card({ children }: CardProps) {
  return <CardWrapper>{children}</CardWrapper>
}
