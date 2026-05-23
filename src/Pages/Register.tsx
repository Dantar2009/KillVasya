import { useContext } from "react"
import MainContext from "../MainContext"
import Input from "../components/Input"
import RegOrSigninForm from "../components/RegOrSigninForm"
import colors from "../data/colors"

const Register = () => {
    const {
        loginText, setLoginText,
        passwordText, setPasswordText,
        loginError, passwordError,
        register, goHome, goSignin
    } = useContext(MainContext)

    return (
        <RegOrSigninForm title="Регистрация">
            <Input type="text" placeholder="Логин" value={loginText} onChange={(value) => setLoginText(value)} />
            {loginError && <p style={{ color: colors.textError, fontSize: 13, margin: "-8px 0" }}>{loginError}</p>}

            <Input type="password" placeholder="Пароль" value={passwordText} onChange={(value) => setPasswordText(value)} />
            {passwordError && <p style={{ color: colors.textError, fontSize: 13, margin: "-8px 0" }}>{passwordError}</p>}

            <button onClick={() => register(loginText, passwordText)} style={{
                background: colors.primary, color: colors.textOnButton, border: "none",
                borderRadius: 8, padding: "12px 0", fontSize: 15, fontWeight: 500, cursor: "pointer",
            }}>
                Зарегистрироваться
            </button>

            <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
                <button onClick={goSignin} style={{ background: "transparent", color: colors.primary, border: "none", fontSize: 13, cursor: "pointer" }}>Вход</button>
                <button onClick={goHome} style={{ background: "transparent", color: colors.textMuted, border: "none", fontSize: 13, cursor: "pointer" }}>На главную</button>
            </div>
        </RegOrSigninForm>
    )
}

export default Register