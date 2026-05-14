import { useContext } from "react"
import { useParams } from "react-router-dom"
import MainContext from "../MainContext"

type playerInfo = {
    name: string,
    rating: number
}

type Room = {
    id: string,
    killer: playerInfo | null,
    bodyguard: playerInfo | null,
    killerText: string | null,
    bodyguardText: string | null,
    location: string,
    winner: "killer" | "bodyguard" | "nowinner",
    aiOtvet: string
}

const Game = () => {
    const { rooms, sendMessage, messageText, setMessageText,leaveRoom } = useContext(MainContext)
    const { id } = useParams()
    const currentRoom:Room|null|undefined = rooms.find((room: Room) => room.id === id)

    if (!currentRoom) {
        return <div>Комната не найдена</div>
    }

    return (
        <div>
            <button onClick={()=>leaveRoom(currentRoom.id)}>Выйти</button>
            <p>📍 Локация: {currentRoom.location}</p>
            <hr />
            <p>🔫 Убийца: {currentRoom.killer?.name || "Ожидание..."} (Рейтинг: {currentRoom.killer?.rating})</p>
            <p>💀 План убийства: {currentRoom.killerText || "Ожидание..."}</p>
            <hr />
            <p>🛡️ Телохранитель: {currentRoom.bodyguard?.name || "Ожидание..."} (Рейтинг: {currentRoom.bodyguard?.rating})</p>
            <p>💪 План спасения: {currentRoom.bodyguardText || "Ожидание..."}</p>
            <hr />
            <p>🏆 Победитель: {currentRoom.winner === "nowinner" ? "Ещё не решено" : currentRoom.winner}</p>
            <p>📝 Вердикт ИИ: {currentRoom.aiOtvet || "Ожидание..."}</p>
            <hr />
            <input
                type="text"
                placeholder="Твой текст..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
            />
            <button onClick={() => sendMessage(messageText, currentRoom.id)}>Отправить</button>
        </div>
    )
}

export default Game