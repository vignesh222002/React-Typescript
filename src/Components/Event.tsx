import React from 'react'

type eventProps = {
    handler: (event: React.MouseEvent<HTMLButtonElement>) => void
}
function Event({ handler }: eventProps) {
  return (
    <button onClick={handler}></button>
  )
}

export default Event