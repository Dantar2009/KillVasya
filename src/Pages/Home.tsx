import { useContext } from "react"
import MainContext from "../MainContext"

const Home = () => {
    const { user, goRegister, goSignin, signOut } = useContext(MainContext)
    
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
        </div>
    )
}

export default Home