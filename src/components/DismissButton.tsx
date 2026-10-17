import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function DismissButton() {
    return <button type={"button"} style={{flexShrink:"0", background:"none", border:"none", padding:"0px", lineHeight:"1", cursor:"pointer", color:"rgb(148,163,184)"}}>
    	<i className={"fa-solid fa-xmark"} style={{fontSize:"14px"}}>
    
    	</i>
    </button>
}


export default DismissButton
