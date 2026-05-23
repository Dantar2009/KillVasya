import { useEffect, useState } from "react"
import deaths from "../data/deaths"

const useRandomDeath = () => {
    const [death, setDeath] = useState<string>(() => deaths[Math.floor(Math.random() * deaths.length)])

    useEffect(() => {
        const interval = setInterval(() => {
            setDeath(deaths[Math.floor(Math.random() * deaths.length)])
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return death
}

export default useRandomDeath