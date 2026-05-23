// SystemMessage.tsx
import { memo } from "react"
import colors from "../data/colors"

const SystemMessage = memo(({ children }: { children: any }) => {
    return (
        <div style={{
            width: "100%",
            marginBottom: 16,
            marginTop:16,
            display: "flex",
            justifyContent: "center",
        }}>
            <div style={{
                width: "70%",
                background: colors.roomCardBackground,
                border: `1px solid ${colors.inputBorder}`,
                borderRadius: 10,
                padding: 14,
                color: colors.textPrimary,
                fontSize: 14,
                lineHeight: 1.6,
            }}>
                {children}
            </div>
        </div>
    )
})

export default SystemMessage