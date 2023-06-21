import React from 'react'

type Horizontal = 'left' | 'center' |'right'
type Vertical = 'top' | 'center' | 'bottom'

type Position = {
    position: Exclude<`${Vertical}-${Horizontal}`, 'center-center'> | 'center'
}

function TemplateLiterals({ position }: Position) {
  return (
    <div>Position is - {position}</div>
  )
}

export default TemplateLiterals