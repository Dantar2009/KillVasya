import { useContext } from "react"
import MainContext from "../MainContext"
import Modal from "../components/Modal"
import RoomsList from "../components/RoomsList"
import Header from "../components/Header"
import Title from "../components/Title"
import MainContainer from "../components/MainContainer"
import DeathText from "../components/DeathText"

const Home = () => {
    const { modalWindowActivate} = useContext(MainContext)
    
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
            <Header />
            <MainContainer>
                <DeathText/>
                <RoomsList />
            </MainContainer>
            {modalWindowActivate && <Modal />}
        </div>
    )
}

export default Home