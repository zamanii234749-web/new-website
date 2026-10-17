import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'


    
// Component

        function BrandLogo({
            variant = "header"
        }: {
            variant?: "header" | "sidebar";
        }) {
            return (
                <a
                    className={
                        variant === "header"
                            ? "flex shrink-0 items-center gap-2.5"
                            : "mb-6 flex items-center gap-2.5"
                    }
                >
                    <BrandIcon />
                    <span
                        className={
                            variant === "header"
                                ? "text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                                : "text-lg font-bold text-gray-900 dark:text-white"
                        }
                    >
                        Br0ker Classic Demo
                    </span>
                </a>
            );
        }
    

// Subcomponents

        function BrandIcon() {
            return (
                <span
                    className="grid h-8 w-8 place-items-center rounded-md text-white"
                    style={{ background: "var(--brand)" }}
                >
                    <i className="fa-solid fa-chart-line text-sm">
                    </i>
                </span>
            );
        }
    

export default BrandLogo
