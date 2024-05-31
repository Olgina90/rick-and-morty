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

const data: RnMCardProps[] = [
  {
    name: 'Blamph',
    isAlive: true,
    race: 'Alien',
    lastLocation: 'Interdimensional Cable',
    firstSeenIn: 'Interdimensional Cable 2: Tempting Fate',
    avatarSrc: 'https://rickandmortyapi.com/api/character/avatar/49.jpeg',
  },
  {
    name: 'Cowboy Rick',
    isAlive: true,
    race: 'Alien',
    lastLocation: 'Citadel of Ricks',
    firstSeenIn: 'Close Rick-counters of the Rick Kind',
    avatarSrc: 'https://rickandmortyapi.com/api/character/avatar/78.jpeg',
  },
  {
    name: 'Tank Top Jerry',
    isAlive: true,
    race: 'Alien',
    lastLocation: 'Jerryboree',
    firstSeenIn: 'Mortynight Run',
    avatarSrc: 'https://rickandmortyapi.com/api/character/avatar/443.jpeg',
  },
  {
    name: 'Josh',
    isAlive: false,
    race: 'Alien',
    lastLocation: 'Tickets Please Guy Nightmare',
    firstSeenIn: 'Never Ricking Morty',
    avatarSrc: 'https://rickandmortyapi.com/api/character/avatar/609.jpeg',
  },
  {
    name: 'Train Cops Instructor',
    isAlive: false,
    race: 'Alien',
    lastLocation: 'Story Train',
    firstSeenIn: 'Never Ricking Morty',
    avatarSrc: 'https://rickandmortyapi.com/api/character/avatar/634.jpeg',
  },
  {
    name: 'Crow Scare',
    isAlive: true,
    race: 'Alien',
    lastLocation: 'Rick and Two Crows Planet',
    firstSeenIn: 'Rickmurai Jack',
    avatarSrc: 'https://rickandmortyapi.com/api/character/avatar/808.jpeg',
  },
]

export default function Home() {
  return (
    <div>
      {data.map((props) => (
        <RnMCard key={props.name} {...props} />
      ))}
    </div>
  )
}

// export default function Home() {
//   return (
//     <div>
//       <RnMCard />
//       <SecondCard />
//     </div>
//   )
// }
