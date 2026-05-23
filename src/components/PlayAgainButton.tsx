// PlayAgainButton.tsx
import { memo, useState } from "react"
import colors from "../data/colors"

const PlayAgainButton = memo(({ onClick }: { onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    return (
        <button
            onClick={() => {
                setIsPressed(true)
                onClick()
                setTimeout(() => setIsPressed(false), 200)
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                flex: 1,
                background: isHovered ? colors.primaryHover : colors.primary,
                color: colors.textOnButton,
                border: "none",
                borderRadius: 8,
                padding: "10px 0",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transform: isPressed ? "scale(0.96)" : "scale(1)",
                transition: "all 0.12s ease",
            }}
        >
            Играть снова
        </button>
    )
})

export default PlayAgainButton