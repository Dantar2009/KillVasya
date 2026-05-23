// FormCard.tsx
import { memo } from "react"
import colors from "../data/colors"

const RegOrSigninForm= memo(({ title, children }: {
    title: string,
    children: React.ReactNode
}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100dvh",
        }}>
            <div style={{
                background: colors.containerBackground,
                padding: 30,
                borderRadius: 12,
                border: `1px solid ${colors.inputBorder}`,
                boxShadow: `0 4px 16px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                width: 340,
            }}>
                <h1 style={{
                    color: colors.textPrimary,
                    fontSize: 22,
                    fontWeight: 600,
                    textAlign: "center",
                    margin: "0 0 8px 0",
                }}>
                    {title}
                </h1>
                {children}
            </div>
        </div>
    )
})

export default RegOrSigninForm