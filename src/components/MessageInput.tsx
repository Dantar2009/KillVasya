// ChatInput.tsx
import { SendHorizonal } from "lucide-react"
import { memo, useContext } from "react"
import MainContext from "../MainContext"
import colors from "../data/colors"

const MessageInput = memo(({roomId}:{roomId:string}) => {
    const { messageText, setMessageText, sendMessage } = useContext(MainContext)

    return (
        <div style={{
            display: "flex",
            alignItems:"flex-end",
            gap: 10,
            paddingTop: 12,
            borderTop: `1px solid ${colors.inputBorder}`,
            marginBottom:20,
        }}>
            <textarea
                value={messageText}
                maxLength={200}
                onChange={(e) => {
                    setMessageText(e.target.value)
                    e.target.style.height = "auto"
                    const maxHeight = 21 * 5 + 28
                    const newHeight = Math.max(45, Math.min(e.target.scrollHeight, maxHeight))
                    e.target.style.height = newHeight + "px"
                    e.target.style.overflow = e.target.scrollHeight > maxHeight ? "auto" : "hidden"
                }}
                placeholder="Введите сообщение..."
                rows={1}
                style={{
                    flex: 1,
                    resize: "none",
                    padding: "10px 14px",
                    fontSize: 14,
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                    borderRadius: 10,
                    border: `1px solid ${colors.inputBorder}`,
                    background: colors.inputBackground,
                    color: colors.textPrimary,
                    outline: "none",
                    boxSizing: "border-box",
                    minHeight: 45,
                    maxHeight: 133,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: `${colors.textMuted} transparent`,
                }}
            />
            <button
                onClick={() => sendMessage(messageText,roomId)}
                style={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "none",
                    background: colors.primary,
                    flexShrink: 0,
                }}
            >
                <SendHorizonal color={colors.textOnButton} size={18} />
            </button>
        </div>
    )
})

export default MessageInput