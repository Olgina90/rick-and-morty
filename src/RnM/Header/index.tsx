import Link from 'next/link'
import {
  HeaderButton,
  HeaderHeading,
  HeaderLink,
  HeaderMain,
  HeaderParagraph,
} from './styled'

export default function RnMHeader() {
  return (
    <HeaderMain>
      <HeaderLink href="/">
        <HeaderHeading>Rick and Morty Database</HeaderHeading>
      </HeaderLink>
      <HeaderParagraph>
        {
          'A collection of characters, locations, and episodes from the original "Rick and Morty" Series.'
        }
      </HeaderParagraph>
      <HeaderButton href="/browse">Browse</HeaderButton>
    </HeaderMain>
  )
}
