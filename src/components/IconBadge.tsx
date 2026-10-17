import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'


    
// Component

        function IconBadge({ icon }: { icon: string }) {
            return (
                <div
                    className={"grid h-12 w-12 shrink-0 place-items-center rounded-full text-white shadow-lg"}
                    style={{ background: "var(--brand)" }}
                >
                    <i className={`fas ${icon}`}>
                    </i>
                </div>
            );
        }
    

export default IconBadge
