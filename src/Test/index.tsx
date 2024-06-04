import { Item, ItemProps, Wrapper } from './styled'

function FlexItem(props: ItemProps) {
  const flexBasis = props.flexBasis || 'auto'
  const flexGrow = props.flexGrow || 0
  const flexShrink = props.flexShrink || 1
  return <Item {...props}>{`${flexBasis} | ${flexGrow} | ${flexShrink}`}</Item>
}

export default function Test() {
  return (
    <Wrapper>
      <FlexItem flexShrink={0} />
      <FlexItem flexGrow={2} />
      <FlexItem flexGrow={4} />
    </Wrapper>
  )
}
