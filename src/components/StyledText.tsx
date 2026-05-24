// StyledText.tsx
import { memo } from "react"
import colors from "../data/colors"

const StyledText = memo(({ children }: { children: React.ReactNode }) => {
    return (
        <p style={{
            color: colors.textOnButton,
            fontSize: 17,
            lineHeight: 1.6,
            margin: 0,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
        }}>
            {children}
        </p>
    )
})

export default StyledText