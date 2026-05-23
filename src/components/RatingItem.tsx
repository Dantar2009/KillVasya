import { memo } from "react"
import colors from "../data/colors"
import type { RatingUser } from "../types"

const RatingItem = memo(({ name, rating, place }: RatingUser & { place: number }) => {
    const getMedal = (p: number) => {
        if (p === 1) return "🥇"
        if (p === 2) return "🥈"
        if (p === 3) return "🥉"
        return `#${p}`
    }

    return (
        <div style={{
            background: colors.roomCardBackground,
            padding: 14,
            borderRadius: 10,
            border: `1px solid ${colors.inputBorder}`,
            boxShadow: `0 2px 8px rgba(0, 0, 0, 0.15)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minWidth: 0,
                flex: 1,
            }}>
                <span style={{
                    fontSize: 20,
                    flexShrink: 0,
                    fontWeight: place <= 3 ? 600 : 400,
                }}>
                    {getMedal(place)}
                </span>
                <span style={{
                    color: colors.textPrimary,
                    fontSize: 15,
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}>
                    {name}
                </span>
            </div>

            <span style={{
                color: colors.primary,
                fontSize: 15,
                fontWeight: 600,
                flexShrink: 0,
                marginLeft: 12,
            }}>
                {rating}
            </span>
        </div>
    )
})

export default RatingItem