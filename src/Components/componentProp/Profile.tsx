import React from 'react'

export type ProfileProp = {
    name: String
}

function Profile({ name }: ProfileProp) {
  return (
    <div>Private Profile Page, Name is {name}</div>
  )
}

export default Profile