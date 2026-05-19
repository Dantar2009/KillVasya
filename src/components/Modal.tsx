import { memo, useContext } from "react"
import MainContext from "../MainContext"
import colors from "../colors"
import ModalButton from "./ModalButton"

const Modal = memo(() => {
    const { toggleModal, createRoom } = useContext(MainContext)

    const handleCreate = (role: string) => {
        createRoom(role)
        toggleModal()
    }

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
        }} onClick={() => toggleModal()}>
            <div style={{
                background: colors.containerBackground,
                padding: 24,
                borderRadius: 12,
                border: `1px solid ${colors.inputBorder}`,
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4)`,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minWidth: 280,
            }} onClick={(e) => e.stopPropagation()}>
                <span style={{
                    color: colors.textPrimary,
                    fontSize: 16,
                    fontWeight: 600,
                    textAlign: "center",
                    marginBottom: 4,
                }}>
                    За кого будете играть?
                </span>

                <ModalButton type="killer" onClick={() => handleCreate("killer")}>
                    🔪 Киллер
                </ModalButton>

                <ModalButton type="bodyguard" onClick={() => handleCreate("bodyguard")}>
                    🛡️ Телохранитель
                </ModalButton>

                <ModalButton type="cancel" onClick={() => toggleModal()}>
                    Отмена
                </ModalButton>
            </div>
        </div>
    )
})

export default Modal