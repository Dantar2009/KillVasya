import { BrowserRouter, Routes, Route } from "react-router-dom"

import Prov from "./Prov"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Signin from "./Pages/Signin"
import Room from "./Pages/Game"

function App() {
    return (
        <BrowserRouter>
            <Prov>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/room/:id" element={<Room/>}/>
                </Routes>
            </Prov>
        </BrowserRouter>
    )
}

export default App