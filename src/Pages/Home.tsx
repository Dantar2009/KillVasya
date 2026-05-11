import { useContext } from "react"
import MainContext from "../MainContext"
import Modal from "../components/Modal"
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
const Home = () => {
    const { user, goRegister, goSignin, signOut,setModalWindowActivate,modalWindowActivate,rooms, joinRoom} = useContext(MainContext)
    
    return (
        <div>
            <h1>Убей Васю</h1>
            <p>Главная страница</p>
            {user ? (
                <>
                    <p>{user.name} (Рейтинг: {user.rating})</p>
                    <button onClick={signOut}>Выход</button>
                </>
            ) : (
                <>
                    <button onClick={goRegister}>Регистрация</button>
                    <button onClick={goSignin}>Вход</button>
                </>
            )}
            <button onClick={()=>setModalWindowActivate(true)}>Создать комнату</button>
            {rooms.map((item:Room)=>
                <div key={item.id}>
                    <p>Killer: {item.killer?.name} Rating: {item.killer?.rating}</p>
                    <p>Bodyguard: {item.bodyguard?.name} Rating: {item.bodyguard?.rating}</p>
                    <button onClick={()=>joinRoom(item.id)}>Присоединиться</button>
                </div>
            )}
            {modalWindowActivate&&(
                <Modal/>
            )}
        </div>
    )
}

export default Home