import { RnMCardProps } from '@/RnM/Card'
import { CharacterData, CharactersResponse } from '@/Types/data'

function getCardProps({
  name,
  status,
  species,
  location,
  origin,
  image,
}: CharacterData): RnMCardProps {
  return {
    name,
    status,
    race: species,
    lastLocation: location.name,
    firstSeenIn: origin.name,
    avatarSrc: image,
  }
}

export async function GET() {
  // const response = await fetch('https://rickandmortyapi.com/api/character')
  // const { info, results }: CharactersResponse = await response.json()
  // const data = results.map(getCardProps)
  // return Response.json({ data })

  return Response.json({ data: [] })
}
