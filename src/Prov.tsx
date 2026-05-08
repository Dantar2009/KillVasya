import { useState } from "react"
import MainContext from "./MainContext"
import { useNavigate } from "react-router-dom"

type User = {
    id: number,
    name: string,
    pass: string,
    rating: number
}

const Prov = ({ children }: { children: any }) => {
    const navigate=useNavigate()
    const [user, setUser] = useState<User | null>(null)


    const goHome=()=>{
        navigate("/")
    }
    const goRegister=()=>{
        navigate("/register")
    }
    const goSignin=()=>{
        navigate("/signin")
    }
    return (
        <MainContext.Provider value={{ user, setUser, goHome,goRegister,goSignin }}>
            {children}
        </MainContext.Provider>
    )
}

export default Prov