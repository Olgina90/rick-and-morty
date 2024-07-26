import Image from 'next/image'
import styles from './page.module.css'
import { headers } from 'next/headers'

import RnMCard, { RnMCardProps } from '@/RnM/Card'
import RnMCardList from '@/RnM/Card/List'
import RnMHeader from '@/RnM/Header'

export const metadata = {
  title: 'Rick and Morty Database',
  description:
    'A collection of characters, locations, and episodes from the original "Rick and Morty" Series.',
}

export default async function Home() {
  const headersList = headers();
  const hostname = headersList.get('x-forwarded-host');


  const response = await fetch(`http://${hostname}/api/cards-data?limit=6`)
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
