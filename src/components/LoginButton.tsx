// LoginButton.tsx
import { memo, useContext, useState } from "react"
import colors from "../data/colors"
import MainContext from "../MainContext"

const LoginButton = memo(({ onClick }: { onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false)
    const {isMobile}=useContext(MainContext)
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? colors.inputBackground : "transparent",
                color: colors.textPrimary,
                border: `1px solid ${colors.inputBorder}`,
                borderRadius: 6,
                padding: "7px 16px",
                fontSize:isMobile?16: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.12s ease",
            }}
        >
            Вход
        </button>
    )
})

export default LoginButton