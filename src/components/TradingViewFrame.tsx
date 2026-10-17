import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function TradingViewFrame({
            src,
            variant = "advanced"
        }: {
            src: string;
            variant?: "advanced" | "ticker";
        }) {
            const isAdvanced = variant === "advanced";

            return (
                <iframe
                    scrolling={"no"}
                    frameBorder={"0"}
                    title={
                        isAdvanced
                            ? "advanced chart TradingView widget"
                            : "ticker tape TradingView widget"
                    }
                    lang={"en"}
                    style={{
                        userSelect: "none",
                        boxSizing: "border-box",
                        display: "block",
                        height: "100%",
                        width: "100%"
                    }}
                    sandbox={
                        isAdvanced
                            ? "allow-popups allow-top-navigation-by-user-activation allow-scripts allow-modals allow-popups allow-downloads allow-pointer-lock allow-presentation"
                            : "allow-popups allow-top-navigation-by-user-activation"
                    }
                    src={src}
                >
                </iframe>
            );
        }
    

export default TradingViewFrame
