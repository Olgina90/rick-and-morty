'use client'

import Image from 'next/image'
import styled, { css } from 'styled-components'

type CardWrapperProps = {}

export const CardWrapper = styled('div')<CardWrapperProps>`
  display: flex;
  background-color: rgb(60, 62, 68);
  padding: 8px;
  color: white;
  border-radius: 8px;
`

export const CardImage =styled(Image)`

`

export const CardContent = styled('div')``

export const Title = styled('h2')`
  font-size: 4rem;
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
