import {  useState } from "react"
import deaths from "../data/deaths"

const useRandomDeath = () => {
    const [death] = useState<string>(() => deaths[Math.floor(Math.random() * deaths.length)])



    return death
}

export default useRandomDeath