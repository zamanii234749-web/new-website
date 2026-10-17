import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'


    
// Component

        function Icon1({
            icon,
            size,
            variant = "default"
        }: {
            icon: string;
            size?: "text-xl" | "text-2xl" | "text-5xl";
            variant?: "default" | "whiteShadow" | "trend";
        }) {
            const className = [
                icon,
                size,
                variant === "whiteShadow" ? "text-white drop-shadow-sm" : ""
            ].filter(Boolean).join(" ");

            if (variant === "trend") {
                return (
                    <i
                        className={className}
                        style={{
                            color: "rgb(255,255,255)",
                            fontSize: "15px"
                        }}
                    >
                    </i>
                );
            }

            return (
                <i className={className}>
                </i>
            );
        }
    

export default Icon1
