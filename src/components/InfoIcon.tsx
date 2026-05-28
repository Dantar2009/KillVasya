import { memo, useContext } from "react";
import colors from "../data/colors";
import MainContext from "../MainContext";



const InfoIcon = memo(() => {
    const {isMobile,goInfo}=useContext(MainContext)
    return (
        <div
            onClick={() =>goInfo() }
            
            style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                userSelect: "none",
                color: colors.textMuted,
                fontSize: 14,
                padding: "4px 8px",
                borderRadius: 6,
                transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.textPrimary)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.textMuted)}
        >
            <span style={{ fontSize: 23 }}>📄</span>
            <span style={{ fontSize:15}}>{isMobile?"":"Об игре"}</span>
        </div>
    );
});

export default InfoIcon;