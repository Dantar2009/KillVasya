// Game.tsx
import { useContext, useEffect} from "react"
import { useParams } from "react-router-dom"
import MainContext from "../MainContext"
import type { Room } from "../types"
import MainContainer from "../components/MainContainer"
import SystemMessage from "../components/SystemMessage"
import UserMessage from "../components/UserMessage"
import MessageInput from "../components/MessageInput"
import StyledText from "../components/StyledText"
import LeaveModal from "../components/LeaveModal"
import LeaveGameButton from "../components/LeaveGameButton"

import PlayAgainButton from "../components/PlayAgainButton"

const Game = () => {
    const { rooms, user, setUser, leaveRoom, setReady, leaveWindowActivate, toggleLeaveWindow } = useContext(MainContext)
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
            {leaveWindowActivate && (
                <LeaveModal onConfirm={() => leaveRoom(id!)} onCancel={() => toggleLeaveWindow()} />
            )}

            <div style={{ flex: 1, overflowY: "auto", paddingBottom: 12 }}>
                <SystemMessage>
                    <StyledText>Локация: {location||"..."}</StyledText>
                    <StyledText>🔪 {killer?.name || "Ожидание..."} {killer?.rating ? `Рейтинг: ${killer.rating}` : ""}</StyledText>
                    <StyledText>🛡️ {bodyguard?.name || "Ожидание..."} {bodyguard?.rating ? `Рейтинг: ${bodyguard.rating}` : ""}</StyledText>
                    <div style={{height:10}}/>
                    <LeaveGameButton onClick={() => {
                        if (room.winner === "nowinner" && room.location !== null&&killer&&bodyguard) {
                            toggleLeaveWindow()
                        } else {
                            leaveRoom(id!)
                        }
                    }} />
                </SystemMessage>
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
                                <LeaveGameButton onClick={() => leaveRoom(id!)} />
                                <PlayAgainButton onClick={()=>setReady(id!)}/>
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