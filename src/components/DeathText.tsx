import { memo } from "react"
import useRandomDeath from "../hooks/useRandomDeath"
import colors from "../data/colors"

const DeathText = memo(() => {
    const death = useRandomDeath()

    return (
        <h1 style={{
            color: colors.textPrimary,
            fontSize: 28,
            fontWeight: 700,
            textAlign: "center",
            margin: "24px 0 8px 0",
            letterSpacing: -0.5,
            transition: "opacity 0.4s ease",
            marginBottom:45,
            marginTop:45
        }}>
            💀 {death}
        </h1>
    )
})

export default DeathText