import { memo } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "../data/colors";

const SystemMessage = memo(({ children, isLoaded,lines }: { children: any, isLoaded: boolean,lines:number }) => {
    return isLoaded ? (
        <div style={{
            width: "100%",
            marginBottom: 16,
            marginTop: 16,
            display: "flex",
            justifyContent: "center",
        }}>
            <div style={{
                width: "70%",
                background: colors.roomCardBackground,
                border: `1px solid ${colors.inputBorder}`,
                borderRadius: 10,
                padding: 14,
                color: colors.textPrimary,
                fontSize: 14,
                lineHeight: 1.6,
            }}>
                {children}
            </div>
        </div>
    ) : (
        <div style={{
            width: "100%",
            marginBottom: 16,
            marginTop: 16,
            display: "flex",
            justifyContent: "center",
        }}>
            <div style={{
                width: "70%",
                background: colors.roomCardBackground,
                border: `1px solid ${colors.inputBorder}`,
                borderRadius: 10,
                padding: 14,
            }}>
                <Skeleton
                    count={lines}
                    baseColor="rgba(255,255,255,0.05)"
                    highlightColor="rgba(255,255,255,0.1)"
                />
            </div>
        </div>
    );
});

export default SystemMessage;