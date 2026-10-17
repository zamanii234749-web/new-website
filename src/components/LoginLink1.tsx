import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import LoginLink from './LoginLink.tsx'


// Component
function LoginLink1() {
    return <a className={"flex items-center text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"}>
    	<i className={"fa-solid fa-lock mr-1 text-xs"}>
    
    	</i>
    	<span>
    		Log in
    	</span>
    </a>
}


export default LoginLink1
