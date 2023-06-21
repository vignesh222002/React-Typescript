import React from 'react'

type Number = {
    value: number
}
type Positive = Number & {
    isPositive: boolean
    isNegative? : never
    isZero?: never
}
type Negative = Number & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = Number & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberType = Positive | Negative | Zero

function RandomNumber({ value, isPositive, isNegative, isZero }: RandomNumberType) {
  return (
    <div>{value} {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}</div>
  )
}

export default RandomNumber