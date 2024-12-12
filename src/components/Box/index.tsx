import { PropsWithChildren } from 'react'
import { BoxWrapperProps } from './styled'

type BoxProps = PropsWithChildren<BoxWrapperProps>

export default function Box({ children }: BoxProps) {
  return <>{children}</>
}

/**
  1. Usa BoxWrapper
  2. Passa margin e padding dalle props di Box dentro BoxWrapper
  3. Vai su `src\components\Box\index.stories.tsx` e metti i valori che vuoi come margin e padding
*/