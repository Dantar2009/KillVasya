import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import MainContext from "./MainContext"
import { useNavigate } from "react-router-dom"
import { io, Socket } from "socket.io-client"
import useLocalStorage from "./hooks/useLocalStorage"
import useIsMobile from "./hooks/useIsMobile"
import useToggle from "./hooks/useToggle"
import type { RatingUser, Room, User } from "./types"
import useListToggle from "./hooks/useListToggle"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

const Prov = ({ children }: { children: any }) => {
    const navigate = useNavigate()
    const socketRef = useRef<Socket | null>(null)
    const [user, setUser] = useLocalStorage<User>(null, "user")
    const [rooms, setRooms] = useState<Room[]>([])
    const [loginText, setLoginText] = useState<string>('')
    const [passwordText, setPasswordText] = useState<string>('')
    const [loginError, setLoginError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')
    const [messageText, setMessageText] = useState<string>("")
    const [modalWindowActivate, toggleModal] = useToggle(false)
    const isMobile = useIsMobile()
    const [leaveWindowActivate, toggleLeaveWindow]=useToggle(false)
    const [listState,toggleRooms,toggleCemetery,toggleRating]=useListToggle("rooms")
    const [rating,setRating]=useState<RatingUser[]>([])
    const goHome = () => {
    setLoginError('')
    setPasswordError('')
    setLoginText('')
    setPasswordText('')
    setMessageText('')
    if (modalWindowActivate) toggleModal()
    if (leaveWindowActivate) toggleLeaveWindow()
    navigate("/")
    }
    
    const goRegister = useCallback(() => {
        setLoginError('')
        setPasswordError('')
        setLoginText('')
        setPasswordText('')
        setMessageText('')
        if (modalWindowActivate) toggleModal()
        if (leaveWindowActivate) toggleLeaveWindow()
        navigate("/register")
    }, [leaveWindowActivate, modalWindowActivate, navigate, toggleLeaveWindow, toggleModal])

    const goSignin = () => {
        setLoginError('')
        setPasswordError('')
        setLoginText('')
        setPasswordText('')
        setMessageText('')
        if (modalWindowActivate) toggleModal()
        if (leaveWindowActivate) toggleLeaveWindow()
        navigate("/signin")
    }
    useEffect(() => {
        const socket = io(`${API_URL}`, {
            query: { name: user?.name, pass: user?.pass }
        })
        socketRef.current = socket

        socket.on("roomsList", (rooms: Room[]) => {
            setRooms(rooms)
        })

        socket.on("ratingUpdate", (newRating: number) => {
            if (user) {
                setUser({ ...user, rating: newRating })
            }
        })
        socket.on("openRoom",(roomId:string)=>{
            navigate(`/room/${roomId}`)
        })
        socket.on("updateRatings",(rating:RatingUser[])=>{
            console.log(rating)
            setRating(rating)
        })
        return () => {
            socket.disconnect()
        }
    }, [user, navigate,setUser])

    const createRoom = useCallback((role: string) => {
        if (!user) {
            goRegister()
            return
        }
        socketRef.current?.emit("createRoom", { role })
    },[user,goRegister])

    const joinRoom = useCallback((roomId: string) => {
        navigate(`/room/${roomId}`)
        socketRef.current?.emit("joinRoom", roomId)
    },[navigate])

    const sendMessage = useCallback((messageText: string, roomId: string) => {
        if (!user) {
            goRegister()
            return
        }
        if (messageText.trim().length === 0) return
        socketRef.current?.emit("sendMessage", { messageText, roomId })
        setMessageText("")  
    },[user,goRegister])

    const setReady = (roomId: string) => {
        socketRef.current?.emit("ready", roomId)
    }

    const leaveRoom = (roomId: string) => {
        socketRef.current?.emit("leaveRoom", roomId)
        goHome()
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
        setMessageText('')  // ✅ сброс текста при выходе
        goHome()
    }

    const contextValue = useMemo(() => ({
        user, setUser,
        loginText, setLoginText,
        passwordText, setPasswordText,
        loginError, setLoginError,
        passwordError, setPasswordError,
        register, signIn, signOut,
        goHome, goRegister, goSignin,
        modalWindowActivate, toggleModal,
        rooms, createRoom, joinRoom, sendMessage,
        messageText, setMessageText, leaveRoom,
        setReady, isMobile,leaveWindowActivate, toggleLeaveWindow,
        listState,toggleRooms,toggleCemetery,toggleRating,rating
    }), [
        user, rooms, loginText, passwordText,
        loginError, passwordError, messageText,
        modalWindowActivate, isMobile,leaveWindowActivate,
        listState,rating
    ])
    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}

export default Prov