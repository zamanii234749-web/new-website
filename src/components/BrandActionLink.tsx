import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionLink from './ActionLink.tsx'


    
// Component

        function BrandActionLink({
            label,
            variant
        }: {
            label: string;
            variant: "compact" | "large";
        }) {
            const className =
                variant === "compact"
                    ? "rounded-md px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
                    : "rounded-lg px-8 py-3 text-base font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110";

            return (
                <a
                    className={className}
                    style={{ background: "var(--brand)" }}
                >
                    {label}
                </a>
            );
        }
    

export default BrandActionLink
