import { useState } from "react"
import { baseUrl } from "../components/main/home/home-main/posts-slice/posts-slice"
import { AuthContext } from "./auth-context"

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null)

    async function getToken({email, password}) {
        const res = await fetch(`${baseUrl}/login?login=${email}&password=${password}`,{
            method:"GET",
        })
        if(res.ok) {
            const data = await res.json()
            localStorage.setItem('token', data.token)
            setToken(data.token)
            console.log(token);
        }
    }
    return (
        <AuthContext.Provider value={{token, getToken}} >
            {children}
        </AuthContext.Provider>
    )
}