import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'


// Component

        function SocialLinks() {
            return (
                <div className={"flex space-x-4 text-gray-400"}>
                    <SocialIcon iconClass="fa-brands fa-twitter" />
                    <SocialIcon iconClass="fa-brands fa-linkedin" />
                    <SocialIcon iconClass="fa-solid fa-envelope" />
                </div>
            );
        }
    

// Subcomponents

        function SocialIcon({ iconClass }: { iconClass: string }) {
            return (
                <span className={"transition hover:text-gray-900 dark:hover:text-white"}>
                    <i className={iconClass}></i>
                </span>
            );
        }
    

export default SocialLinks
