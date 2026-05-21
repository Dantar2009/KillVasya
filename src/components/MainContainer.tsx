import { memo, useContext } from "react"
import MainContext from "../MainContext"

const MainContainer = memo(({ children }: { children: any }) => {
    const { isMobile } = useContext(MainContext)
    return (
        <div style={{
            width: "100%",
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
        }}>
            <div style={{
                width: isMobile ? "95%" : "40%",
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
            }}>
                {children}
            </div>
        </div>
    )
})

export default MainContainer