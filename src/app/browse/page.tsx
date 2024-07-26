import Image from 'next/image'
import styles from './page.module.css'

import RnMCard, { RnMCardProps } from '@/RnM/Card'
import RnMCardList from '@/RnM/Card/List'
import RnMHeader from '@/RnM/Header'
import { headers } from 'next/headers'
import RnMFilters from '@/RnM/Filters'

export const metadata = {
  title: 'Browse | Rick and Morty Database',
  description:
    'A collection of characters, locations, and episodes from the original "Rick and Morty" Series.',
}

export default async function Browse() {
  const headersList = headers()
  const hostname = headersList.get('x-forwarded-host')

  const response = await fetch(`http://${hostname}/api/cards-data`)
  const { cardsData } = await response.json()
  return (
    <>
      <main>
        <RnMFilters />
        <RnMCardList data={cardsData} />
      </main>
    </>
  )
}
