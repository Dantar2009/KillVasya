    import { useState } from "react"

    const useToggle=(defaultValue:boolean)=>{
        const [toggle,setToggle]=useState<boolean>(defaultValue)
        const toggleOnOff=()=>{
            setToggle(prev=>!prev)
        }
        return [toggle,toggleOnOff] as const
    }
    export default useToggle