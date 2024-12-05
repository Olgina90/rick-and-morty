import { CardWrapper, CardWrapperProps } from "./styled";

type CardProps = CardWrapperProps

export default function Card({...cardWrapperProps}: CardProps){
    return <CardWrapper {...cardWrapperProps}>Olga</CardWrapper>
}