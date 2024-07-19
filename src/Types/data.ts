export type CharacterData = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: PlaceData
  location: PlaceData
  image: string
  episode: string[]
  url: string
  created: string
}

type PlaceData = {
  name: string
  url: string
}

type InfoData = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type CharactersResponse = {
  info: InfoData
  results: CharacterData[]
}
