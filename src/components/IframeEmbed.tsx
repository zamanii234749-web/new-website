import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function IframeEmbed({
            className,
            src,
            title,
            isTradingView
        }: {
            className: string;
            src: string;
            title: string;
            isTradingView: boolean;
        }) {
            return (
                <div
                    className={className}
                    style={
                        isTradingView
                            ? { height: "620px", width: "100%" }
                            : undefined
                    }
                >
                    {isTradingView ? (
                        <iframe
                            scrolling="no"
                            frameBorder="0"
                            title={title}
                            lang="en"
                            style={{
                                userSelect: "none",
                                boxSizing: "border-box",
                                display: "block",
                                height: "100%",
                                width: "100%"
                            }}
                            sandbox="allow-popups allow-top-navigation-by-user-activation allow-scripts allow-modals allow-popups allow-downloads allow-pointer-lock allow-presentation"
                            src={src}
                        >
                        </iframe>
                    ) : (
                        <iframe
                            title={title}
                            width="100%"
                            height="36px"
                            scrolling="auto"
                            frameBorder="0"
                            className="w-full"
                            sandbox="allow-popups allow-top-navigation-by-user-activation allow-scripts allow-modals allow-popups allow-downloads allow-pointer-lock allow-presentation"
                            src={src}
                        >
                        </iframe>
                    )}
                </div>
            );
        }
    

export default IframeEmbed
