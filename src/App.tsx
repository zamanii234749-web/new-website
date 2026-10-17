import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './components/Icon.tsx'
import IframeEmbed from './components/IframeEmbed.tsx'
import Icon1 from './components/Icon1.tsx'
import TradingViewFrame from './components/TradingViewFrame.tsx'
import ChatBeacon from './components/ChatBeacon.tsx'
import TradingNotification from './components/TradingNotification.tsx'
import DismissButton from './components/DismissButton.tsx'
import GtOptions from './components/GtOptions.tsx'
import LanguageSwitcher from './components/LanguageSwitcher.tsx'
import NotificationSection from './components/NotificationSection.tsx'
import SiteFooter from './components/SiteFooter.tsx'
import SiteHeader from './components/SiteHeader.tsx'
import TradingMain from './components/TradingMain.tsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppContent() {
    const location = useLocation();

    return (
        <>
        <body data-surface={"rented"}>
        <div className={"inter_526f73fa-module__FXKE3W__className"}>
        <div style={{"--brand":"#2563eb"}} className={"flex min-h-screen flex-col bg-gray-100 font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-200"}>
        
                <SiteHeader />
            
        <div className={"border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"}>
        <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        
                    <IframeEmbed
                        className="py-1"
                        src="/frames/9ac43ecb-0f4b-45ad-822e-51c6e4d2fe74/index.html"
                        title="Crypto prices"
                        isTradingView={false}
                    />
                
        </div>
        </div>
        <TradingMain />
        
                <SiteFooter />
            
        <div className={"sticky bottom-0 z-30 hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 sm:block"}>
        <div className={"tradingview-widget-container"} style={{width:"100%", height:"58px"}}>
        
                    <TradingViewFrame
                        src="/frames/a33d06f6-3d99-4110-899b-b3bc3342fee2/index.html"
                        variant="ticker"
                    />
                
        </div>
        </div>
        
                <ChatBeacon />
            
        <div style={{position:"fixed", top:"116px", left:"24px", zIndex:"40", maxWidth:"min(330px,-48px + 100vw)", pointerEvents:"none", opacity:"0", transform:"translateY(-14px)", transition:"opacity 0.4s,transform 0.4s"}}>
        <div className={"brk-la-card"} style={{pointerEvents:"auto", position:"relative", background:"rgb(255,255,255)", borderRadius:"14px", boxShadow:"rgba(0,0,0,0.55) 0px 18px 48px -18px", padding:"14px", display:"flex", gap:"12px", alignItems:"flex-start", animation:"2.6s ease-in-out 0s infinite normal none running brk-la-float"}}>
        <span style={{position:"absolute", top:"-4px", right:"-4px", width:"12px", height:"12px"}}>
        <span style={{position:"absolute", inset:"0px", borderRadius:"50%", background:"rgb(34,197,94)", opacity:"0.75", animation:"1s cubic-bezier(0,0,0.2,1) 0s infinite normal none running brk-la-ping"}}></span>
        <span style={{position:"relative", display:"inline-block", width:"12px", height:"12px", borderRadius:"50%", background:"rgb(34,197,94)"}}></span>
        </span>
        <span style={{flexShrink:"0", width:"40px", height:"40px", borderRadius:"50%", background:"rgb(22,163,74)", display:"grid", placeItems:"center"}}>
        
                    <Icon1
                        icon="fa-solid fa-arrow-trend-up"
                        variant="trend"
                    />
                
        </span>
        
                <TradingNotification
                    category="Live trading"
                    message="Trader from Frankfurt earned $251 on NASDAQ"
                    timestamp="06:11 UTC"
                />
            
        <DismissButton />
        </div>
        </div>
        </div>
        <div className={"gtranslate_wrapper gt_container--c8la1f"}>
        <div id={"gt_float_wrapper"} style={{position:"fixed", bottom:"20px", left:"20px", zIndex:"999999", transition:"none"}}>
        <div className={"gt_float_switcher notranslate"} style={{opacity:"1", touchAction:"none", cursor:"grab", transition:"none"}}>
        <GtOptions />
        
                <LanguageSwitcher languageCode="en" imageId="3" />
            
        </div>
        </div>
        </div>
        </div>
        <NotificationSection />
        <next-route-announcer style={{position:"absolute"}}>
        <template shadowrootmode={"open"}>
        <div id={"__next-route-announcer__"} role={"alert"} style={{position:"absolute", border:"0px", height:"1px", margin:"-1px", padding:"0px", width:"1px", clip:"rect(0px,0px,0px,0px)", overflow:"hidden", whiteSpace:"nowrap", overflowWrap:"normal"}}></div>
        </template>
        </next-route-announcer>
        </body>
        </>
    );
}

function App() {
    const defaultRoute = "/";

    return (
        <Router>
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="*" element={<AppContent />} />
            </Routes>
        </Router>
    );
}

export default App
