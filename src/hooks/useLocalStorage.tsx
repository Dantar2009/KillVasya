import { useEffect, useState } from "react"

const useLocalStorage = <T,>(value: T | null, key: string) => {
    const [state, setState] = useState<T | null>(() => {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : value
    })
    
    useEffect(() => {
        if (state !== null) {
            localStorage.setItem(key, JSON.stringify(state))
        } else {
            localStorage.removeItem(key)  
        }
    }, [state, key])
    
    return [state, setState] as const
}

export default useLocalStorage