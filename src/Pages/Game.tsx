// Game.tsx
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import MainContext from "../MainContext"
import type { Room } from "../types"
import MainContainer from "../components/MainContainer"
import SystemMessage from "../components/SystemMessage"
import colors from "../colors"
import UserMessage from "../components/UserMessage"
import MessageInput from "../components/MessageInput"
import StyledText from "../components/StyledText"

const Game = () => {
    const { rooms, user, setUser, leaveRoom, setReady } = useContext(MainContext)
    const { id } = useParams()
    const room = rooms.find((r: Room) => r.id === id) ?? null
    const role = room?.killer?.name === user?.name ? "killer" : room?.bodyguard?.name === user?.name ? "bodyguard" : null

    useEffect(() => {
        if (!room || !user) return
        const newRating = role === "killer" ? room.killer?.rating : room.bodyguard?.rating
        if (newRating !== undefined && newRating !== user.rating) setUser({ ...user, rating: newRating })
    }, [room])

    if (!room) return <MainContainer><StyledText>Комната не найдена</StyledText></MainContainer>

    const { location, killer, bodyguard, killerText, bodyguardText, winner, aiOtvet, killerReady, bodyguardReady } = room
    const done = winner !== "nowinner"

    return (
        <MainContainer>
            <SystemMessage>
                <StyledText>📍 {location}</StyledText>
                <StyledText>🔫 {killer?.name || "???"} ({killer?.rating})</StyledText>
                <StyledText>🛡️ {bodyguard?.name || "???"} ({bodyguard?.rating})</StyledText>
            </SystemMessage>

            <div style={{ flex: 1, overflowY: "auto", paddingBottom: 12 }}>
                {killerText && <UserMessage role="killer" text={killerText} isMine={role === "killer"} />}
                {bodyguardText && <UserMessage role="bodyguard" text={bodyguardText} isMine={role === "bodyguard"} />}
                {done && (
                    <>
                        <SystemMessage>
                            <StyledText>🏆 {winner}</StyledText>
                            <StyledText>📝 {aiOtvet || "..."}</StyledText>
                        </SystemMessage>
                        <SystemMessage>
                            <StyledText>Киллер: {killerReady ? "Готов" : "Не готов"}</StyledText>
                            <StyledText>Телохранитель: {bodyguardReady ? "Готов" : "Не готов"}</StyledText>
                            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                                <button onClick={() => leaveRoom(id!)} style={{
                                    flex: 1, background: "transparent", color: colors.textError, border: `1px solid ${colors.textError}`,
                                    borderRadius: 8, padding: "10px 0", fontSize: 13, cursor: "pointer",
                                }}>Выйти</button>
                                <button onClick={() => setReady(id!)} style={{
                                    flex: 1, background: colors.primary, color: colors.textOnButton, border: "none",
                                    borderRadius: 8, padding: "10px 0", fontSize: 13, fontWeight: 500, cursor: "pointer",
                                }}>Играть снова</button>
                            </div>
                        </SystemMessage>
                    </>
                )}
            </div>

            <MessageInput roomId={id!} />
        </MainContainer>
    )
}

export default Game