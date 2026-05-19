import { memo } from "react"
import colors from "../colors"

const UserMessage = memo(({ role, text, isMine }: {
    role: "killer" | "bodyguard",
    text: string,
    isMine: boolean
}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: isMine ? "flex-end" : "flex-start",
            marginBottom: 20,
            paddingLeft: isMine ? 60 : 0,
            paddingRight: isMine ? 0 : 60,
        }}>
            <div style={{
                maxWidth: "70%",
                padding: "10px 14px",
                borderRadius: 10,
                background: role === "killer" ? colors.textError : colors.blue,
                color: colors.textOnButton,
                fontSize: 14,
                lineHeight: 1.5,
                wordBreak: "break-word",
            }}>
                <p style={{
                    margin: "0 0 4px 0",
                    fontSize: 12,
                    opacity: 0.8,
                }}>
                    {role === "killer" ? "🔫 Убийца" : "🛡️ Телохранитель"}
                </p>
                <p style={{ margin: 0, fontSize: 15 }}>{text}</p>
            </div>
        </div>
    )
})

export default UserMessage