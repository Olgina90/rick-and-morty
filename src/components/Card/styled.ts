import styled from '@emotion/styled'

export type CardWrapperProps = {
  offsetX: number
  offsetY: number
  blur: number
  color: string
}

export const CardWrapper = styled.div<CardWrapperProps>`
  background-color: white;
  border-radius: 20px;
  box-shadow: ${({ offsetX, offsetY, blur, color }) =>
    `${offsetX}px ${offsetY}px ${blur}px ${color}`};
  padding: 8px;
`
