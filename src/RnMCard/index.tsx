import React from 'react'
import {
  CardContent,
  CardImageWrapper,
  CardWrapper,
  TitleWrapper,
  SubTitle,
  AliveBadge,
} from './styled'
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
  const isAliveText = isAlive ? 'Alive' : 'Dead'
  const subtitle = `${isAliveText} - ${race}`
  return (
    <CardWrapper>
      <CardImageWrapper>
        <Image
          alt="Character's Image"
          src={avatarSrc}
          layout="fill"
          objectFit="cover"
        />
      </CardImageWrapper>

      <CardContent>
        <TitleWrapper>
          <Title>{name}</Title>
          <SubTitle><AliveBadge /> {subtitle}</SubTitle>
        </TitleWrapper>

        <ul>
          <ListItem size="small">{lastLocation}</ListItem>
          <ListItem size="small">{firstSeenIn}</ListItem>
        </ul>
      </CardContent>
    </CardWrapper>
  )
}
