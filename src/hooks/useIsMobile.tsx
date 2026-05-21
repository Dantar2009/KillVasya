import { useLayoutEffect, useState } from "react"


const useIsMobile=()=>{
    const [isMobile,setIsMobile]=useState<boolean>(() => window.innerWidth <= 786)
    const checkIsMobile=()=>setIsMobile(window.innerWidth<=786)
    useLayoutEffect(()=>{
        window.addEventListener("resize", checkIsMobile)
        return ()=>window.removeEventListener("resize",checkIsMobile)
    },[])
    return isMobile
}
export default useIsMobile