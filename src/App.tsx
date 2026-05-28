import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

import Prov from "./Prov"
const Home=lazy(()=>import("./Pages/Home"))
const Info=lazy(()=>import("./Pages/Info"))
const Register=lazy(()=>import("./Pages/Register"))
const Signin=lazy(()=>import("./Pages/Signin"))
const Room=lazy(()=>import("./Pages/Game"))

function App() {
    return (
        <BrowserRouter>
            <Prov>
                <Suspense fallback={
                    <div style={{
                        background: "#0d1117",
                        height: "100dvh",
                        width: "100%",
                    }}>

                    </div>}>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/room/:id" element={<Room/>}/>
                        <Route path="/info" element={<Info/>} />
                    </Routes>
                </Suspense>
            </Prov>
        </BrowserRouter>
    )
}

export default App