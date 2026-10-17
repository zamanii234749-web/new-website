import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import ActionLink from './ActionLink.tsx'
import TradingFeature from './TradingFeature.tsx'


// Component
function AboutSection() {
    return <section className={"bg-gray-50 dark:bg-gray-800"}>
    	<div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"}>
    		<div className={"relative"}>
    			<Img id="2" />
    			<div className={"relative z-10 mb-10 text-center"}>
    				<span className={"inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg"} style={{background:"var(--brand)"}}>
    					Our Story
    				</span>
    				<h2 className={"mt-2 text-3xl font-bold text-slate-900 dark:text-white"}>
    					About Us
    				</h2>
    				<div className={"mx-auto my-4 h-1 w-20"} style={{background:"var(--brand)"}}>
    
    				</div>
    			</div>
    			<div className={"relative z-10 mx-auto max-w-4xl p-8 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
    				<p className={"leading-relaxed text-slate-600 dark:text-slate-300"}>
    					Br0ker Classic Demo
    					{` has become one of the most reputable brokers in the industry, offering traders CFDs across Forex, Equities, Commodities and Futures. Trading on the Forex market is a legitimate and straightforward way of generating income.`}
    				</p>
    				<p className={"mt-4 leading-relaxed text-slate-600 dark:text-slate-300"}>
    					{`The good news is that you don't have to be a professional trader in order to make money. All you need is the right personality and the right skill set and you can make money trading on foreign exchanges. `}
    					Br0ker Classic Demo
    					{` lets you trade in the way that best suits you.`}
    				</p>
    				<div className={"mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"}>
    					
                <TradingFeature dataId="0" />
            
    					
                <TradingFeature dataId="1" />
            
    				</div>
    				<div className={"mt-8 text-center"}>
    					
                <ActionLink
                    label="Learn more about us "
                    variant="primary"
                    size="default"
                    icon="arrow-right"
                />
            
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
}


export default AboutSection
