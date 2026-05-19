import { memo } from "react"
import colors from "../colors"

const ModalButton = memo(({ type, onClick, children }: {
    type: "killer" | "bodyguard" | "cancel",
    onClick: () => void,
    children: string
}) => {
    const bg = type === "killer" ? colors.textError : type === "bodyguard" ? colors.blue : "transparent"
    const color = type === "cancel" ? colors.textMuted : colors.textOnButton
    const border = type === "cancel" ? `1px solid ${colors.inputBorder}` : "none"

    return (
        <button onClick={onClick} style={{ background: bg, color, border, borderRadius: 8, padding: "10px 0", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>
            {children}
        </button>
    )
})
export default ModalButton