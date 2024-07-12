'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const HeaderMain = styled('header')`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
export const HeaderLink = styled(Link)`
  all: unset;
  font-weight: 700;
  font-size: 3.5rem;
`
export const HeaderHeading = styled('h1')`
  all: unset;
`
export const HeaderParagraph = styled('p')`
  margin-top: 0.5rem;
`
export const HeaderButton = styled(Link)`
  margin: 2rem 0;
`
