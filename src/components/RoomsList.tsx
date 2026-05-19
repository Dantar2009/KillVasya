import { memo, useContext } from "react"
import MainContext from "../MainContext"
import RoomItem from "./RoomItem"
import type { Room } from "../types"
import colors from "../colors"
import CreateRoomButton from "./CreateRoomButton"

const RoomsList = memo(() => {
    const { rooms } = useContext(MainContext)

    const totalRooms = rooms.length
    const waitingRooms = rooms.filter((room: Room) => !room.killer || !room.bodyguard).length

    return (
        <div style={{
            background: colors.roomsListBackground,
            padding: 20,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            border: `1px solid ${colors.inputBorder}`,
            boxShadow: `0 4px 16px rgba(0, 0, 0, 0.25)`,
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 14,
                borderBottom: `1px solid ${colors.inputBorder}`,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                }}>
                    <span style={{
                        color: colors.textPrimary,
                        fontSize: 16,
                        fontWeight: 600,
                    }}>
                        Список комнат
                    </span>
                    <span style={{
                        color: colors.textMuted,
                        fontSize: 13,
                    }}>
                        Открыто: {waitingRooms} из {totalRooms}
                    </span>
                </div>
                <CreateRoomButton />
            </div>

            {rooms.length === 0 ? (
                <div style={{
                    color: colors.textMuted,
                    textAlign: "center",
                    padding: "30px 0",
                    fontSize: 14,
                }}>
                    Нет активных комнат. Создайте первую!
                </div>
            ) : (
                rooms.map((room: Room) => (
                    <RoomItem
                        key={room.id}
                        id={room.id}
                        location={room.location}
                        killer={room.killer}
                        bodyguard={room.bodyguard}
                        killerText={null}
                        bodyguardText={null}
                        killerReady={false}
                        bodyguardReady={false}
                        winner={"nowinner"}
                        aiOtvet={""}
                        
                    />
                ))
            )}
        </div>
    )
})

export default RoomsList