// Header.tsx
import { memo, useContext } from "react";
import MainContext from "../MainContext";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import SignoutButton from "./SignoutButton";
import InfoIcon from "./InfoIcon";
import colors from "../data/colors";

const Header = memo(() => {
    const { user, signOut, goRegister, goSignin, isMobile } = useContext(MainContext);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 24px",
            background: colors.headerBackground,
            borderBottom: `1px solid ${colors.headerBorder}`,
        }}>
            {/* Слева — иконка правил */}
            <InfoIcon/>

            {/* Справа — пользователь или кнопки входа */}
            <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: 10 }}>
                {user ? (
                    <>
                        <SignoutButton onClick={signOut} />
                        <span style={{ color: colors.textPrimary, fontSize: isMobile ? 17 : 14 }}>
                            {user.name}
                            <span style={{ color: colors.textMuted, marginLeft: 6 }}>
                                ({user.rating})
                            </span>
                        </span>
                    </>
                ) : (
                    <>
                        <RegisterButton onClick={goRegister} />
                        <LoginButton onClick={goSignin} />
                    </>
                )}
            </div>
        </div>
    );
});

export default Header;