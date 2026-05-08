import { useContext } from "react"
import MainContext from "../MainContext"

const Signin = () => {
    const {
        loginText, setLoginText,
        passwordText, setPasswordText,
        loginError, passwordError,
        signIn, goHome, goRegister
    } = useContext(MainContext)
    
    return (
        <div>
            <h1>Вход</h1>
            <input 
                type="text" 
                placeholder="Логин" 
                value={loginText} 
                onChange={(e) => setLoginText(e.target.value)} 
            />
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            
            <input 
                type="password" 
                placeholder="Пароль" 
                value={passwordText} 
                onChange={(e) => setPasswordText(e.target.value)} 
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            
            <button onClick={() => signIn(loginText, passwordText)}>Войти</button>
            <button onClick={goRegister}>Регистрация</button>
            <button onClick={goHome}>На главную</button>
        </div>
    )
}

export default Signin