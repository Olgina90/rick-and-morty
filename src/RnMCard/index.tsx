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
import { RnMCardSectionWrapper } from '@/RnMCardSection/styled'
import RnMCardSection from '@/RnMCardSection'

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
  const isAliveText = status // Prima lettera maiuscola e le altre minuscole
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
            <AliveBadge /> {subtitle}
          </SubTitle>
        </TitleWrapper>

        <RnMCardSection label="Last known location" value={lastLocation} />
        <RnMCardSection label="First seen in" value={firstSeenIn} />
      </CardContent>
    </CardWrapper>
  )
}
