'use client'

import Image from 'next/image'
import styled, { css } from 'styled-components'

type CardWrapperProps = {}

export const CardWrapper = styled('div')<CardWrapperProps>`
  display: flex;
  background-color: rgb(60, 62, 68);
  color: white;
  border-radius: 8px;
  margin-bottom: 20px;
`

export const CardImageWrapper = styled('div')`
  box-sizing: border-box;
  flex-shrink: 0;
  flex-basis: initial;
  flex-grow: 0;
`

export const CardContent = styled('div')`
  flex-shrink: 0;
  flex-basis: initial;
  box-sizing: border-box;
  flex-grow: 1;
  padding: 8px;
`

export const Title = styled('h2')`
  font-size: 1.5rem;
`

type CardListItemProps = {
  size?: 'large' | 'medium' | 'small'
}

export const ListItem = styled('li')<CardListItemProps>`
  font-size: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return 0.75
      case 'large':
        return 1.25
      case 'medium':
      default:
        return 1
    }
  }}rem;
`

// export const ListItem = styled('li')<CardListItemProps>`
//   font-size: ${({ size = 'medium' }) => {
//     switch (size) {
//       case 'small':
//         return 0.75
//       case 'large':
//         return 1.25
//       case 'medium':
//       default:
//         return 1
//     }
//   }}rem;
// `
