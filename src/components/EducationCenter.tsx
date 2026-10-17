import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionLink from './ActionLink.tsx'
import EmbeddedFrame from './EmbeddedFrame.tsx'


// Component
function EducationCenter() {
    return <section className={"bg-white dark:bg-gray-900"}>
    	<div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"}>
    		<div className={"grid grid-cols-1 items-center gap-8 lg:grid-cols-2"}>
    			<div className={"overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
    				<div className={"h-[400px] w-full bg-gray-900"}>
    					
            <EmbeddedFrame
                title="Learn about Bitcoin"
                src="/frames/4f217788-4b12-4d89-a415-941ccd6bb555/index.html"
            />
        
    				</div>
    			</div>
    			<div className={"space-y-6"}>
    				<div>
    					<span className={"text-sm font-semibold uppercase tracking-wider"} style={{color:"var(--brand)"}}>
    						Education Center
    					</span>
    					<h2 className={"mt-2 text-3xl font-bold text-slate-900 dark:text-white"}>
    						Learn From Market Experts
    					</h2>
    				</div>
    				<p className={"text-lg text-slate-600 dark:text-slate-300"}>
    					Discover everything you need to know about cryptocurrency trading, from fundamentals to advanced strategies.
    				</p>
    				<div className={"p-6 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
    					<h3 className={"mb-3 text-xl font-semibold text-slate-900 dark:text-white"}>
    						About Bitcoin
    					</h3>
    					<p className={"text-slate-600 dark:text-slate-400"}>
    						Bitcoin (₿) is a decentralized digital currency that operates without a central authority. Transactions are verified by network nodes through cryptography and recorded on a public distributed ledger called a blockchain. Created in 2008 by an unknown person or group using the name Satoshi Nakamoto, Bitcoin pioneered the concept of cryptocurrencies.
    					</p>
    				</div>
    				<div className={"flex flex-wrap gap-4"}>
    					
                <ActionLink
                    label="Explore learning resources "
                    variant="primary"
                    size="compact"
                    icon="graduation-cap"
                />
            
    					
                <ActionLink
                    label="Join free webinars "
                    variant="outline"
                    size="compact"
                    icon="video"
                />
            
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
}


export default EducationCenter
