import React from 'react'
import { CardWrapper } from "./styled";

type RnMCardProps = {
  
}

/**
 * Homework:
 * 
 * - Inserisci stile ad Olga => font-size: 4rem;
 * - Inserisci stile ai list item (li) => font-size: ${({ size }) => {}}
 * - size puo' essere: 'large', 'medium' o 'small'
 * - Se size non e' specificato allora e' 'medium'
 * - Se size e' 'large' allora il font e' 1.25rem
 * - Se size e' 'medium' allora il font e' 1rem
 * - se il size e' 'small' allora il fonte e' 0.75rem
 * - Sul list item (li) Eta' metti font small
 * - Sul list item (li) Provenienza metti font large
 */

export default function RnMCard({}: RnMCardProps) {
  return (
    <CardWrapper color="yellow">
      <h1>Olga</h1>
      <ul>
        <li>Eta: 33 anni</li>
        <li>Provenienza: Ucraina</li>
      </ul>
    </CardWrapper>
  );
}


