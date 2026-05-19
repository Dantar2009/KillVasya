import { useContext } from "react"
import MainContext from "../MainContext"
import Modal from "../components/Modal"
import RoomsList from "../components/RoomsList"
import Header from "../components/Header"
import Title from "../components/Title"
import MainContainer from "../components/MainContainer"

const Home = () => {
    const { modalWindowActivate} = useContext(MainContext)
    
    return (
        <div>
            <Header/>
            <MainContainer>
                <Title text="Убей Васю"/>
                <RoomsList/>
            </MainContainer>
            {modalWindowActivate&&(
                <Modal/>
            )}
        </div>
    )
}

export default Home