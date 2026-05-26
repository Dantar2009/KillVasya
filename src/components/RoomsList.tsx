import { memo, useContext } from "react"
import MainContext from "../MainContext"
import RoomItem from "./RoomItem"
import RatingItem from "./RatingItem"
import type { Room, RatingUser, Grave } from "../types"
import colors from "../data/colors"
import CreateRoomButton from "./CreateRoomButton"
import ToggleButton from "./ToggleListButton"
import GraveItem from "./GraveItem"

const RoomsList = memo(() => {
    const { rooms, listState, toggleRooms, toggleCemetery, toggleRating, rating, cemetery } = useContext(MainContext)

    const totalRooms = rooms.length
    const waitingRooms = rooms.filter((room: Room) => !room.killer || !room.bodyguard).length

    return (
        <div style={{
            background: colors.roomsListBackground,
            padding: 20,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${colors.inputBorder}`,
            boxShadow: `0 4px 16px rgba(0, 0, 0, 0.25)`,
            marginBottom: 20,
            maxHeight: "80vh",        // ✅ не вылезает
            overflowY: "auto",        // ✅ скролл внутри если надо
        }}>
        
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 14,
                flexShrink: 0,
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
                flex: 1,
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
                    cemetery?.length === 0 ? (
                        <div style={{ color: colors.textMuted, textAlign: "center", padding: "30px 0", fontSize: 14 }}>
                            Пока могил нет. Убейте Васю!
                        </div>
                    ) : (
                        cemetery?.map((grave: Grave) => (
                            <GraveItem key={grave.id} {...grave} />
                        ))
                    )
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