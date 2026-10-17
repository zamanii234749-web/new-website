import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function DropdownButton({
            label
        }: {
            label: string;
        }) {
            return (
                <button className={"group inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"}>
                    <span>
                        {label}
                    </span>
                    <i className={"fa-solid fa-chevron-down ml-2 text-[10px] text-gray-400 transition group-hover:rotate-180"}>

                    </i>
                </button>
            );
        }
    

export default DropdownButton
