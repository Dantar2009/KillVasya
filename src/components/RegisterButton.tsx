// RegisterButton.tsx
import { memo, useState } from "react"
import colors from "../colors"

const RegisterButton = memo(({ onClick }: { onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? colors.primaryHover : colors.primary,
                color: colors.textOnButton,
                border: "none",
                borderRadius: 6,
                padding: "7px 16px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.12s ease",
            }}
        >
            Регистрация
        </button>
    )
})

export default RegisterButton