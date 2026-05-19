// SignoutButton.tsx
import { memo, useState } from "react"
import colors from "../colors"

const SignoutButton = memo(({ onClick }: { onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? `${colors.textError}20` : "transparent",
                color: colors.textError,
                border: `1px solid ${colors.textError}`,
                borderRadius: 6,
                padding: "7px 16px",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.12s ease",
            }}
        >
            Выйти
        </button>
    )
})

export default SignoutButton