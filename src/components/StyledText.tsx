// StyledText.tsx
import colors from "../colors"

const StyledText = ({ children }: { children: React.ReactNode }) => {
    return (
        <p style={{
            color: colors.textOnButton,
            fontSize: 15,
            lineHeight: 1.6,
            margin: 0,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
        }}>
            {children}
        </p>
    )
}

export default StyledText