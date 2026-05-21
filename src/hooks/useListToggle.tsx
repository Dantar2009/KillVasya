import { useState } from "react"

const useListToggle=(listType?:"cemetery"|"rooms"|"rating")=>{
    const [listState,setListState]=useState<"cemetery"|"rooms"|"rating">(listType||"rooms")
    const toggleRooms = () => setListState("rooms")
    const toggleCemetery = () => setListState("cemetery")
    const toggleRating = () => setListState("rating")
    return [listState,toggleRooms,toggleCemetery,toggleRating] as const
}
export default useListToggle