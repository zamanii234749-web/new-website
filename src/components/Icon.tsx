import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function Icon({
            icon,
            hasMargin = false
        }: {
            icon: string;
            hasMargin?: boolean;
        }) {
            return (
                <i className={`${icon}${hasMargin ? " mr-2" : ""}`}>
                </i>
            );
        }
    

export default Icon
