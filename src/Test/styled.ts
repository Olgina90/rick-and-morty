'use client'

import { CSSProperties } from 'react'
import styled from 'styled-components'

export const Wrapper = styled('div')`
  display: flex;
`
export type ItemProps = Pick<
  CSSProperties,
  'flexBasis' | 'flexGrow' | 'flexShrink'
>

export const Item = styled('div')<ItemProps>`
  min-width: 100px;
  min-height: 100px;
  background-color: rgba(135, 135, 135, 0.8);
  margin: 4px;
  padding: 4px;
  flex-basis: ${(props) => props.flexBasis};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
`
