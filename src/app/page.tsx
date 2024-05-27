import Image from 'next/image'
import styles from './page.module.css'

import RnMCard, { RnMCardProps } from '@/RnMCard'
import SecondCard from '@/SecondCard'

/**
 * - Vai su rickandmortyapi.com
 * - Crea dentro home una lista
 * - Questa lista ha almeno 3 oggetti
 * - Gli oggetti hanno le prop di RnmCard
 * - Fai map della lista con le card
 */

const data: RnMCardProps[] = []

export default function Home() {
  return (
    <div>
      {data.map((props) => (
        <RnMCard key={props.name} {...props} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <RnMCard />
      <SecondCard />
    </div>
  )
}
