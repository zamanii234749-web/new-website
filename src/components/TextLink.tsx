import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function TextLink({
            label
        }: {
            label: string;
        }) {
            return (
                <a className={"text-blue-500 transition hover:text-blue-400"}>
                    {label}
                </a>
            );
        }
    

export default TextLink
