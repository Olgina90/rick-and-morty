import RnMCard, { RnMCardProps } from '@/RnM/Card'
import { RnMCardListWrapper } from './styled'

type RnMCardListProps = {
  data: RnMCardProps[]
}

export default function RnMCardList({ data }: RnMCardListProps) {
  return (
    <RnMCardListWrapper>
      {data.map((props) => (
        <RnMCard key={props.name} {...props} />
      ))}
    </RnMCardListWrapper>
  )
}
