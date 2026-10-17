import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'


    
// Component

        function ExploreLink({
            label,
            smallIcon = false
        }: {
            label: string;
            smallIcon?: boolean;
        }) {
            return (
                <a
                    className={"flex items-center text-sm font-medium"}
                    style={{ color: "var(--brand)" }}
                >
                    {label}
                    <i
                        className={
                            smallIcon
                                ? "fas fa-arrow-right ml-1 text-xs"
                                : "fas fa-arrow-right ml-1"
                        }
                    >
                    </i>
                </a>
            );
        }
    

export default ExploreLink
