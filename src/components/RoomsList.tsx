import { memo, useContext } from "react"
import MainContext from "../MainContext"
import RoomItem from "./RoomItem"
import RatingItem from "./RatingItem"
import type { Room, RatingUser } from "../types"
import colors from "../colors"
import CreateRoomButton from "./CreateRoomButton"
import ToggleButton from "./ToggleListButton"

const RoomsList = memo(() => {
    const { rooms, listState, toggleRooms, toggleCemetery, toggleRating, rating } = useContext(MainContext)

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
                    <span style={{ color: colors.textPrimary, fontSize: 16, fontWeight: 600 }}>
                        {listState === "rooms" ? "Список комнат" : listState === "cemetery" ? "Кладбище" : "Рейтинг"}
                    </span>
                    {listState === "rooms" && (
                        <span style={{ color: colors.textMuted, fontSize: 13 }}>Открыто: {waitingRooms} из {totalRooms}</span>
                    )}
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <ToggleButton emoji="🎮" active={listState === "rooms"} onClick={toggleRooms} />
                    <ToggleButton emoji="🪦" active={listState === "cemetery"} onClick={toggleCemetery} />
                    <ToggleButton emoji="🏆" active={listState === "rating"} onClick={toggleRating} />
                    {listState === "rooms" && <CreateRoomButton />}
                </div>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                maxHeight: 700,
                overflowY: "auto",
            }}>
                {/* Комнаты */}
                {listState === "rooms" && (
                    rooms.length === 0 ? (
                        <div style={{ color: colors.textMuted, textAlign: "center", padding: "30px 0", fontSize: 14 }}>
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
                    )
                )}

                {/* Кладбище */}
                {listState === "cemetery" && (
                    <div style={{ color: colors.textMuted, textAlign: "center", padding: "30px 0", fontSize: 14 }}>
                        Скоро здесь появятся павшие Васы 💀
                    </div>
                )}

                {/* Рейтинг */}
                {listState === "rating" && (
                    rating?.length === 0 ? (
                        <div style={{ color: colors.textMuted, textAlign: "center", padding: "30px 0", fontSize: 14 }}>
                            Пока нет игроков
                        </div>
                    ) : (
                        rating?.map((user: RatingUser, index: number) => (
                            <RatingItem key={user.id} {...user} place={index + 1} />
                        ))
                    )
                )}
            </div>
        </div>
    )
})

export default RoomsList