import { useContext } from "react"
import MainContext from "../MainContext"

const Register = () => {
    const {
        loginText, setLoginText,
        passwordText, setPasswordText,
        loginError, passwordError,
        register, goHome, goSignin
    } = useContext(MainContext)
    
    return (
        <div>
            <h1>Регистрация</h1>
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
            
            <button onClick={() => register(loginText, passwordText)}>Зарегистрироваться</button>
            <button onClick={goSignin}>Вход</button>
            <button onClick={goHome}>На главную</button>
        </div>
    )
}

export default Register