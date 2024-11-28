import { ChipWrapper } from './styled'

type ChipProps = {
  label: string
}

export default function Chip({ label }: ChipProps) {
  return <ChipWrapper>{label}</ChipWrapper>
}
