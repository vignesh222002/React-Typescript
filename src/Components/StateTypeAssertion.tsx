import React, { useEffect, useState } from 'react'

type userAuth = {
    name: String
    email: String
}

function StateTypeAssertion() {
    const [user, setUser] = useState({} as userAuth)
    useEffect(() => {
        console.log(user)
    },[user])
    function handleLogin() {
        setUser({
            name: "Vignesh",
            email: "gta@gmail.com"
        })
    }
    function handleLogout() {
        setUser({} as userAuth)
    }
    return (
        <>
            <h1>User Name is {user.name} and email is {user.email}</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default StateTypeAssertion