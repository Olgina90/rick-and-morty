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
import RnMCardSection from '@/RnM/Card/Section'
import capitalize from '@/Utilities/capitalize'

export type RnMCardProps = {
  name: string
  status: string
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
  status,
  race,
  lastLocation,
  firstSeenIn,
  avatarSrc,
}: RnMCardProps) {
  const isAliveText = capitalize(status)
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
          <SubTitle>
            <AliveBadge status={status.toLowerCase()} /> {subtitle}
          </SubTitle>
        </TitleWrapper>

        <RnMCardSection label="Last known location" value={lastLocation} />
        <RnMCardSection label="First seen in" value={firstSeenIn} />
      </CardContent>
    </CardWrapper>
  )
}
