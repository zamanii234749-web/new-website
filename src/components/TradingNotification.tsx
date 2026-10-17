import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function TradingNotification({
            category,
            message,
            timestamp
        }: {
            category: string;
            message: string;
            timestamp: string;
        }) {
            return (
                <div style={{minWidth:"0px", flex:"1 1 0%"}}>
                    <p
                        style={{
                            margin:"0px 0px 2px",
                            fontSize:"11px",
                            fontWeight:"700",
                            letterSpacing:"0.04em",
                            textTransform:"uppercase",
                            color:"var(--brand)"
                        }}
                    >
                        {category}
                    </p>
                    <p
                        style={{
                            margin:"0px",
                            fontSize:"13.5px",
                            fontWeight:"500",
                            lineHeight:"1.35",
                            color:"rgb(15,23,42)"
                        }}
                    >
                        {message}
                    </p>
                    <p
                        style={{
                            margin:"4px 0px 0px",
                            fontSize:"11px",
                            color:"rgb(100,116,139)"
                        }}
                    >
                        {timestamp}
                    </p>
                </div>
            );
        }
    

export default TradingNotification
