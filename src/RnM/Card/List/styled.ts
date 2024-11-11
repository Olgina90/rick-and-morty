'use client'

import styled from 'styled-components'

export const RnMCardListWrapper = styled('div')`
  display: grid;
  max-width: 1200px;
  margin: 16px auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 16px;
  row-gap: 16px;
`

