import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function FeatureItem({ text }: { text: string }) {
            return (
                <div className={"flex items-start"}>
                    <span
                        className={"mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"}
                        style={{ background: "var(--brand)" }}
                    >
                        <i className={"fas fa-check text-xs"}>
                        </i>
                    </span>
                    <p className={"ml-3 text-slate-600 dark:text-slate-300"}>
                        {text}
                    </p>
                </div>
            );
        }
    

export default FeatureItem
