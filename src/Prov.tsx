import { useState, useEffect, useRef } from "react"
import MainContext from "./MainContext"
import { useNavigate } from "react-router-dom"
import { io, Socket } from "socket.io-client"

type User = {
    id: number,
    name: string,
    pass: string,
    rating: number
}
type playerInfo={
    name:string,
    rating:number
}
type Room={
    id:string,
    killer:playerInfo|null,
    bodyguard:playerInfo|null,
    killerText:string|null,
    bodyguardText:string|null
}
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

const Prov = ({ children }: { children: any }) => {
    const navigate = useNavigate()
    const socketRef=useRef<Socket|null>(null)
    const [user, setUser] = useState<User | null>(() => {
        const data = localStorage.getItem("user")
        return data ? JSON.parse(data) : null
    })
    const [rooms,setRooms]=useState<Room[]>([])
    const [loginText, setLoginText] = useState<string>('')
    const [passwordText, setPasswordText] = useState<string>('')
    const [loginError, setLoginError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')
    const [modalWindowActivate,setModalWindowActivate]=useState<boolean>(false)
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
        }
        
        const socket = io(`${API_URL}`, {
            query: { name: user?.name, pass: user?.pass }
        })
        socketRef.current = socket
        
        socket.on("roomsList", (rooms) => {
            console.log(rooms)
            setRooms(rooms)
        })
        
        socket.on("openRoom", (roomId) => {
            console.log(`Join to room ${roomId}`)
            navigate(`/room/${roomId}`)
        })
        
        return () => {
            socket.disconnect()
        }
    }, [user,navigate])
    const createRoom=(role:string)=>{
        socketRef.current?.emit("createRoom",{role})
        
    }
    const joinRoom=(roomId:string)=>{
        socketRef.current?.emit("joinRoom",roomId)
    }
    const register = async (name: string, pass: string) => {
        try {
            if (name.trim().length < 4) {
                setLoginError("Логин слишком короткий")
                return
            }
            if (pass.trim().length < 8) {
                setPasswordError("Пароль слишком короткий")
                return
            }
            const response = await fetch(`${API_URL}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, pass })
            })
            const data = await response.json()
            if (data.otvet === "shortName") { setLoginError("Логин слишком короткий"); return }
            if (data.otvet === "shortPass") { setPasswordError("Пароль слишком короткий"); return }
            if (data.otvet === "userRegistered") { setLoginError("Такой пользователь уже зарегистрирован"); return }
            if (data.otvet === "OK") {
                setUser(data.user)
                setLoginError('')
                setPasswordError('')
                setLoginText('')
                setPasswordText('')
                goHome()
            }
        } catch (err) {
            console.error("Ошибка регистрации:", err)
        }
    }
    
    const signIn = async (name: string, pass: string) => {
        try {
            const response = await fetch(`${API_URL}/users/signin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, pass })
            })
            const data = await response.json()
            if (data.otvet === "notFound") { setLoginError("Пользователь не найден"); return }
            if (data.otvet === "wrongPass") { setPasswordError("Неверный пароль"); return }
            if (data.otvet === "OK") {
                setUser(data.user)
                setLoginError('')
                setPasswordError('')
                setLoginText('')
                setPasswordText('')
                goHome()
            }
        } catch (err) {
            console.error("Ошибка входа:", err)
        }
    }
    
    const signOut = () => {
        setUser(null)
        setLoginError('')
        setPasswordError('')
        setLoginText('')
        setPasswordText('')
        localStorage.removeItem("user")
        goHome()  
    }
    
    const goHome = () => {
        setLoginError('')
        setPasswordError('')
        setLoginText('')
        setPasswordText('')
        navigate("/")
    }
    const goRegister = () => {
        setLoginError('')
        setPasswordError('')
        setLoginText('')
        setPasswordText('')
        navigate("/register")
    }
    const goSignin = () => {
        setLoginError('')
        setPasswordError('')
        setLoginText('')
        setPasswordText('')
        navigate("/signin")
    }
    
    return (
        <MainContext.Provider value={{
            user, setUser,
            loginText, setLoginText,
            passwordText, setPasswordText,
            loginError, setLoginError,
            passwordError, setPasswordError,
            register, signIn, signOut,
            goHome, goRegister, goSignin,
            modalWindowActivate,setModalWindowActivate,
            rooms,createRoom,joinRoom
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default Prov