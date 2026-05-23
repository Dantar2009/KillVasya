// LoginButton.tsx
import { memo, useState } from "react"
import colors from "../data/colors"

const LoginButton = memo(({ onClick }: { onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false)

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
                fontSize: 13,
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