import React from 'react'
import { CardContent, CardImage, CardImageWrapper, CardWrapper } from './styled'
import { Title } from './styled'
import { ListItem } from './styled'
import Image from 'next/image'

export type RnMCardProps = {
  name: string
  isAlive: boolean
  race: string
  lastLocation: string
  firstSeenIn: string
  avatarSrc: string
}

/**
 * Props dentro RnMCardProps:
 * - name => string
 * - isAlive => boolean
 * - race => string
 * - lastLocation => string
 * - firstSeenIn => string
 * - avatarSrc => string
 */

export default function RnMCard({
  name,
  isAlive,
  race,
  lastLocation,
  firstSeenIn,
  avatarSrc,
}: RnMCardProps) {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <Image
          alt="Character's Image"
          src={avatarSrc}
          width={100}
          height={100}
          layout="responsive"
        />
      </CardImageWrapper>

      <CardContent>
        <Title>{name}</Title>
        <ul>
          <ListItem size="small">{isAlive ? 'Alive' : 'Dead'}</ListItem>
          <ListItem size="small">{race}</ListItem>
          <ListItem size="small">{lastLocation}</ListItem>
          <ListItem size="small">{firstSeenIn}</ListItem>
        </ul>
      </CardContent>
    </CardWrapper>
  )
}
