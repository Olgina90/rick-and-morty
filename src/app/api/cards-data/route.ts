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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Number(searchParams.get('limit')) || null

  const response = await fetch(`https://rickandmortyapi.com/api/character`)
  const { results }: CharactersResponse = await response.json()

  const limitedResults = limit ? results.slice(0, limit) : results
  const cardsData = limitedResults.map(getCardProps)
  return Response.json({ cardsData })
}
