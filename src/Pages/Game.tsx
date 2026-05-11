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
    bodyguardText:string|null,
    location:string
}
const Game=()=>{
    const {rooms,sendMessage,messageText,setMessageText}=useContext(MainContext)
    const {id}=useParams()
    const currentRoom:Room=rooms.find((room:Room)=>room.id===id)
    if(!currentRoom){
        return(
            <div>Комната не найдена</div>
        )
    }
    return(
        <div>
            <input type="text" value={messageText} onChange={(e)=>setMessageText(e.target.value)}/>
            <button onClick={()=>sendMessage(messageText,currentRoom.id)}>отправить</button>
            <p>{currentRoom.id}</p>
            <p>{currentRoom.killer?.name}   {currentRoom.killer?.rating} {currentRoom.killerText}</p>
            <p>{currentRoom.bodyguard?.name}  {currentRoom.bodyguard?.rating} {currentRoom.bodyguardText}</p>
            <p>Location: {currentRoom.location}</p>

        </div>
    )
}
export default Game