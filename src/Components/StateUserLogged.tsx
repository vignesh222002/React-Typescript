import React, { useState } from 'react'

type userAuth = {
    name: String
    email: String
}

function UserLogged() {
    const[user, setUser] = useState<null | userAuth>(null)
    function handleLogin() {
        setUser({
            name: "",
            email: ""
        })
    }
    function handleLogout() {
        setUser(null)
    }
    return (
        <>
            <button onClick={() => handleLogin()}>login</button>
            <button onClick={() => handleLogout()}>logout</button>
            <div>User </div>
        </>
    )
}

export default UserLogged