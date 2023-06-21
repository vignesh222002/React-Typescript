import React from 'react'
import Login from './Login'
import { ProfileProp } from './Profile'

type ComponentPageProp = {
    isLogged: Boolean
    Component: React.ComponentType<ProfileProp>
}

function ComponentPropPage({ isLogged, Component }: ComponentPageProp) {
    if (isLogged) return <Component name="Vignesh" />
    else return <Login />
}

export default ComponentPropPage