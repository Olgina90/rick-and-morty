import Image from 'next/image'
import styles from './page.module.css'

import RnMCard, { RnMCardProps } from '@/RnM/Card'
import RnMCardList from '@/RnM/Card/List'
import RnMHeader from '@/RnM/Header'

export const metadata = {
  title: 'Rick and Morty Database',
  description:
    'A collection of characters, locations, and episodes from the original "Rick and Morty" Series.',
}

export default async function Home() {
  const response = await fetch('http:localhost:3000/api/cards-data?limit=12')
  const { cardsData } = await response.json()

  return (
    <>
      <RnMHeader />
      <main>
        <RnMCardList data={cardsData} />
      </main>
    </>
  )
}
