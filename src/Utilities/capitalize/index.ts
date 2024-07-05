function transformLetter(letter: string, index: number) {
  return index === 0 ? letter.toUpperCase() : letter.toLowerCase()
}

export default function capitalize(word: string) {
  return word.split('').map(transformLetter).join('')
}
