// ToggleButton.tsx
import { memo } from "react"
import colors from "../data/colors"

const ToggleButton = memo(({ active, emoji, onClick }: {
    active: boolean,
    emoji: string,
    onClick: () => void
}) => {
    return (
        <button onClick={onClick} style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            border: `1px solid ${active ? colors.primary : colors.inputBorder}`,
            background: active ? `${colors.primary}20` : colors.containerBackground,
            fontSize: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.12s ease",
        }}>
            {emoji}
        </button>
    )
})

export default ToggleButton