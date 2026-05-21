// Input.tsx
import { useEffect, useRef } from "react"
import colors from "../colors"

const Input = ({ type, placeholder, value, onChange }: {
    type: "text" | "password",
    placeholder: string,
    value: string,
    onChange: (value:string) => void
    }) => {
    const inputRef=useRef<HTMLInputElement>(null)
    useEffect(()=>{
        if(type==="text"){
            inputRef.current?.focus()
        }
    },[])
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            ref={inputRef}
            onChange={(e)=>onChange(e.target.value)}
            style={{
                width: "100%",
                padding: "10px 14px",
                fontSize: 14,
                background: colors.inputBackground,
                color: colors.textPrimary,
                border: `1px solid ${colors.inputBorder}`,
                borderRadius: 8,
                outline: "none",
                boxSizing: "border-box",
            }}
        />
    )
}

export default Input