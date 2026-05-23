import type { Room } from "../types"
import colors from "../data/colors"
import { memo, useContext } from "react"
import MainContext from "../MainContext"

const RoomItem = memo(({ id, killer, bodyguard }: Room) => {
    const isFull = killer && bodyguard
    const { joinRoom } = useContext(MainContext)
    
    return (
        <div style={{
            background: colors.roomCardBackground,
            padding: 16,
            borderRadius: 10,
            border: `1px solid ${colors.inputBorder}`,
            boxShadow: `0 2px 8px rgba(0, 0, 0, 0.15)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            transition: "all 0.15s ease",
        }} onClick={() => joinRoom(id)}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minWidth: 0,           // ✅ разрешает сжиматься
                flex: 1,               // ✅ занимает доступное место
                marginRight: 12,       // ✅ отступ до статуса
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>🔪</span>
                    <span style={{
                        color: colors.textPrimary,
                        fontSize: 15,
                        fontWeight: killer ? 600 : 400,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}>
                        {killer?.name || "Ожидание..."}
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>🛡️</span>
                    <span style={{
                        color: colors.textPrimary,
                        fontSize: 15,
                        fontWeight: bodyguard ? 600 : 400,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}>
                        {bodyguard?.name || "Ожидание..."}
                    </span>
                </div>
            </div>

            <div style={{
                color: isFull ? colors.textMuted : colors.primary,
                fontSize: 13,
                fontWeight: 500,
                textAlign: "right",
                whiteSpace: "nowrap",
                flexShrink: 0,
            }}>
                {isFull ? "Идёт игра" : "Войти →"}
            </div>
        </div>
    )
})

export default RoomItem