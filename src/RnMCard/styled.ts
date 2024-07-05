'use client'

import Image from 'next/image'
import styled, { css } from 'styled-components'

type CardWrapperProps = {}

export const CardWrapper = styled('div')<CardWrapperProps>`
  display: flex;
  background-color: rgb(60, 62, 68);
  color: white;
  border-radius: 8px;
  overflow: hidden;
`

export const CardImageWrapper = styled('div')`
  position: relative;
  box-sizing: border-box;
  flex-basis: 0;
  flex-grow: 1;
`

export const CardContent = styled('div')`
  flex-basis: 0;
  box-sizing: border-box;
  flex-grow: 2;
  padding: 16px;
`

export const Title = styled('h2')`
  font-size: 1.75rem;
  margin: 0;
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

export const TitleWrapper = styled('div')``

export const SubTitle = styled('span')``

const BADGE_SIZE = 0.5625

type AliveBadgeProps = {
  status: string
}

export const AliveBadge = styled('span')<AliveBadgeProps>`
  display: inline-block;
  background-color: ${({ status }) => {
    switch (status) {
      case 'alive':
        return 'green'
      case 'dead':
        return 'red'
      default:
        return 'grey'
    }
  }};
  width: ${BADGE_SIZE}rem;
  height: ${BADGE_SIZE}rem;
  border-radius: 100%;
  margin-right: 4px;
`
