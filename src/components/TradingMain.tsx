import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import TradingFeature from './TradingFeature.tsx'
import TradingCTA from './TradingCTA.tsx'
import TradingHeroSection from './TradingHeroSection.tsx'
import TradingFeatures from './TradingFeatures.tsx'
import MarketSection from './MarketSection.tsx'
import TradingSection from './TradingSection.tsx'
import EducationCenter from './EducationCenter.tsx'
import AboutSection from './AboutSection.tsx'
import HowItWorks from './HowItWorks.tsx'


// Component
function TradingMain() {
    return <main id={"main-content"} className={"grow"}>
    	
            <TradingHeroSection />
        
    	
                <TradingFeatures dataId="0" />
            
    	
                <MarketSection dataId="0" />
            
    	
                <TradingFeatures dataId="1" />
            
    	
                <TradingSection
                    dataId="0"
                    variant="crypto"
                />
            
    	<EducationCenter />
    	
                <MarketSection dataId="1" />
            
    	
                <TradingFeatures dataId="2" />
            
    	<AboutSection />
    	
                <TradingFeatures dataId="3" />
            
    	
                <MarketSection dataId="2" />
            
    	
            <HowItWorks />
        
    	
                <MarketSection dataId="3" />
            
    	
                <TradingSection
                    dataId="1"
                    variant="services"
                />
            
    	
            <TradingCTA
                title="Ready to start trading?"
                description="Open your Br0ker Classic Demo account today — it only takes a couple of minutes."
                buttonText="Create Account"
            />
        
    </main>
}


export default TradingMain
