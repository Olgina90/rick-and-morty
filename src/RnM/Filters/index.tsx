'use client'
import { useSearchParams } from 'next/navigation'
import { ChangeEventHandler, useState } from 'react'

type FilterProps = {}

const raceFilterMap = {
  alien: {
    value: 'Alien',
    label: 'Alien',
  },
  human: {
    value: 'Human',
    label: 'Human',
  },
}

function isRaceKey(key: string): key is keyof typeof raceFilterMap {
  return Object.hasOwn(raceFilterMap, key)
}

function getRaceData(key: string) {
  if (isRaceKey(key)) {
    return raceFilterMap[key]
  }
  return { value: '', label: '-' }
}

function Filter() {
  const searchParams = useSearchParams()
  const raceParam = searchParams.get('race') || ''
  const race = getRaceData(raceParam).value

  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    alert(event.target.value)
  }

  return (
    <label>
      <span>Choose Race:</span>
      <select name="race" value={race} onChange={changeHandler}>
        <option value="">-</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </label>
  )
}

export default function RnMFilters() {
  return <Filter />
}
