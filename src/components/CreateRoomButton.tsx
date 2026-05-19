import { useState, useContext, memo } from "react"
import MainContext from "../MainContext"
import colors from "../colors"

const CreateRoomButton = memo(() => {
    const { toggleModal,user,goRegister } = useContext(MainContext)  
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    return (
        <button
            onClick={() => {
                if(!user){
                    goRegister()
                    return
                }
                setIsPressed(true)
                toggleModal()  
                setTimeout(() => setIsPressed(false), 150)
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: 130,
                height: 36,
                background: isHovered ? colors.primaryHover : colors.primary,
                color: colors.textOnButton,
                border: "none",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transform: isPressed ? "scale(0.96)" : "scale(1)",
                transition: "all 0.12s ease",
            }}
        >
            + Создать
        </button>
    )
})

export default CreateRoomButton