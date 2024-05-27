import React from 'react'
import { CardContent, CardImage, CardWrapper } from './styled'
import { Title } from './styled'
import { ListItem } from './styled'
import Image from 'next/image'

export type RnMCardProps = {}

/**
 * Props dentro RnMCardProps:
 * - name => string
 * - isAlive => boolean
 * - race => string
 * - lastLocation => string
 * - firstSeenIn => string
 * - avatarSrc => string
 */

export default function RnMCard({}: RnMCardProps) {
  return (
    <CardWrapper>
      <CardImage
        alt="Character's Image"
        src="https://rickandmortyapi.com/api/character/avatar/220.jpeg"
        width={100}
        height={100}
      />
      <CardContent>
        <Title>Olga</Title>
        <ul>
          <ListItem size="small">Eta: 33 anni</ListItem>
          <ListItem size="large">Provenienza: Ucraina</ListItem>
        </ul>
      </CardContent>
    </CardWrapper>
  )
}
