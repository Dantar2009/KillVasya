import { useContext } from "react"
import MainContext from "../MainContext"

const Modal=()=>{
    const {setModalWindowActivate,createRoom }=useContext(MainContext)
    return(
        <div style={{
            position:"fixed",
            top:0,
            right:0,
            left:0,
            bottom:0,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div>
                <p>За кого будете играть?</p>
                <button onClick={()=>{
                    createRoom("killer")
                }}>Киллер</button>
                <button onClick={()=>{
                    createRoom("bodyguard")
                }}>Телохранитель</button>
                <button onClick={()=>{setModalWindowActivate(false)}}>Отмена</button>
            </div>
        </div>
    )
}
export default Modal