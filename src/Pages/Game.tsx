import { useContext } from "react"
import { useParams } from "react-router-dom"
import MainContext from "../MainContext"


type playerInfo={
    name:string,
    rating:number
}
type Room={
    id:string,
    killer:playerInfo|null,
    bodyguard:playerInfo|null,
    killerText:string|null,
    bodyguardText:string|null
}
const Game=()=>{
    const {rooms}=useContext(MainContext)
    const {id}=useParams()
    const currentRoom:Room=rooms.find((room:Room)=>room.id===id)
    if(!currentRoom){
        return(
            <div>Комната не найдена</div>
        )
    }
    return(
        <div>
            <input type="text" />
            <button>отправить</button>
            <p>{currentRoom.id}</p>
            <p>{currentRoom.killer?.name}   {currentRoom.killer?.rating} {currentRoom.killerText}</p>
            <p>{currentRoom.bodyguard?.name}  {currentRoom.bodyguard?.rating} {currentRoom.bodyguardText}</p>

        </div>
    )
}
export default Game