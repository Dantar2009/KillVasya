import { memo, useEffect, useState } from "react"
import colors from "../data/colors"

const Title = memo(({ text }: { text: string }) => {
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsLoad(true), 300)
    }, [])

    return (
        <h1 style={{
            color: colors.textPrimary,
            opacity: isLoad ? 1 : 0,
            transform: `translateY(${isLoad ? 0 : -15}px)`,
            transition: "0.5s all",
            textAlign: "center",
            margin: "32px 0",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
        }}>
            {text}
        </h1>
    )
})

export default Title