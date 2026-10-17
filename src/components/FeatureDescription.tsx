import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function FeatureDescription({
            title,
            description
        }: {
            title: string;
            description: string;
        }) {
            return (
                <div>
                    <h4 className={"text-lg font-medium text-slate-900 dark:text-white"}>
                        {title}
                    </h4>
                    <p className={"mt-1 text-slate-600 dark:text-slate-300"}>
                        {description}
                    </p>
                </div>
            );
        }
    

export default FeatureDescription
