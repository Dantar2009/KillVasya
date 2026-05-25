import { memo } from "react"
import colors from "../data/colors"
import type { Grave } from "../types"

const GraveItem = memo(({ date, epitaph }: Grave) => {
    return (
        <div style={{
            background: colors.roomCardBackground,
            padding: 14,
            borderRadius: 10,
            border: `1px solid ${colors.inputBorder}`,
            boxShadow: `0 2px 8px rgba(0, 0, 0, 0.15)`,
            display: "flex",
            alignItems: "center",
            gap: 12,
        }}>
            <span style={{
                fontSize: 20,
                flexShrink: 0,
            }}>
                🪦
            </span>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: 0,
                flex: 1,
            }}>
                <span style={{
                    color: colors.textMuted,
                    fontSize: 12,
                }}>
                    {date}
                </span>
                <span style={{
                    color: colors.textPrimary,
                    fontSize: 14,
                    fontStyle: "italic",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    wordBreak: "break-word",
                }}>
                    {epitaph}
                </span>
            </div>
        </div>
    )
})

export default GraveItem