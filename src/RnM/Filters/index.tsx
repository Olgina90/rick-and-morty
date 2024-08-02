'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChangeEventHandler, useState } from 'react'

type FilterProps = {}

const raceFilterMap = {
  alien: {
    value: 'alien',
    label: 'Alien',
  },
  human: {
    value: 'human',
    label: 'Human',
  },
}

const raceDefaultData = { value: '', label: '-' }
const raceFilterMainData = Object.values(raceFilterMap)
const raceFilterData = [raceDefaultData, ...raceFilterMainData]

function isRaceKey(key: string): key is keyof typeof raceFilterMap {
  return Object.hasOwn(raceFilterMap, key)
}

function getRaceData(key: string | null) {
  if (key !== null && isRaceKey(key)) {
    return raceFilterMap[key]
  }
  return raceDefaultData
}

function Filter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const raceParam = searchParams.get('race')
  const race = getRaceData(raceParam).value

  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value: raceValue } = event.target
    const { pathname, origin } = window.location
    const url = new URL(pathname, origin)
    const entries = Array.from(searchParams.entries())
    for (const [key, value] of entries) {
      // if (key === 'race') {
      //   url.searchParams.append(key, raceValue)
      // } else {
      //   url.searchParams.append(key, value)
      // }
      const newValue = key === 'race' ? raceValue : value
      url.searchParams.append(key, newValue)
    }

    router.push(url.href)
  }

  return (
    <label>
      <span>Choose Race:</span>
      <select name="race" value={race} onChange={changeHandler}>
        {raceFilterData.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function RnMFilters() {
  return <Filter />
}
