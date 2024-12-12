import styled from '@emotion/styled'
import React from 'react'

export type BoxWrapperProps = Required<Pick<React.CSSProperties, 'margin' | 'padding'>>
export const BoxWrapper = styled.div<BoxWrapperProps>`
  margin: ${({ margin }) => margin};
`