// LeaveModal.tsx
import { useContext, useState } from "react"
import colors from "../colors"
import MainContext from "../MainContext"

const LeaveModal = ({ onConfirm, onCancel }: {
    onConfirm: () => void,
    onCancel: () => void
}) => {
    const {isMobile}=useContext(MainContext)
    const [confirmHover, setConfirmHover] = useState(false)
    const [cancelHover, setCancelHover] = useState(false)

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
        }} onClick={onCancel}>
            <div style={{
                background: colors.containerBackground,
                padding: 24,
                borderRadius: 12,
                border: `1px solid ${colors.inputBorder}`,
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4)`,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                width:isMobile?"85%":"20%"
            }} onClick={(e) => e.stopPropagation()}>
                <p style={{
                    color: colors.textPrimary,
                    fontSize: 16,
                    fontWeight: 600,
                    textAlign: "center",
                    margin: "0 0 4px 0",
                }}>
                    Выйти из комнаты?
                </p>
                <p style={{
                    color: colors.textMuted,
                    fontSize: 14,
                    textAlign: "center",
                    margin: 0,
                }}>
                    Если вы выйдете во время раунда, победа будет присуждена сопернику.
                </p>
                <div style={{ display: "flex", gap: 10 }}>
                    <button
                        onClick={onCancel}
                        onMouseEnter={() => setCancelHover(true)}
                        onMouseLeave={() => setCancelHover(false)}
                        style={{
                            flex: 1,
                            background: cancelHover ? colors.inputBackground : "transparent",
                            color: colors.textPrimary,
                            border: `1px solid ${colors.inputBorder}`,
                            borderRadius: 8,
                            padding: "10px 0",
                            fontSize: 14,
                            cursor: "pointer",
                            transition: "all 0.12s ease",
                        }}
                    >
                        Остаться
                    </button>
                    <button
                        onClick={onConfirm}
                        onMouseEnter={() => setConfirmHover(true)}
                        onMouseLeave={() => setConfirmHover(false)}
                        style={{
                            flex: 1,
                            background: confirmHover ? "#c0392b" : colors.textError,
                            color: colors.textOnButton,
                            border: "none",
                            borderRadius: 8,
                            padding: "10px 0",
                            fontSize: 14,
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "all 0.12s ease",
                        }}
                    >
                        Выйти
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeaveModal