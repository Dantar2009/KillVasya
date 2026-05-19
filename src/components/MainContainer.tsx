import { memo, useContext } from "react"
import MainContext from "../MainContext"

const MainContainer = memo(({ children }: { children: any }) => {
    const {isMobile}=useContext(MainContext)
    return (
        <div style={{
            width: "100%",
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems:"center"
        }}>
            <div style={{
                width: isMobile?"95%":"40%",
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
            }}>
                {children}
            </div>
        </div>
    )
})

export default MainContainer