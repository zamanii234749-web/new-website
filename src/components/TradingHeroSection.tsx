import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import BrandActionLink from './BrandActionLink.tsx'
import IframeEmbed from './IframeEmbed.tsx'
import LoginLink from './LoginLink.tsx'
import LiveMarketHeader from './LiveMarketHeader.tsx'
import MarketHeader from './MarketHeader.tsx'
import ActionLink from './ActionLink.tsx'


// Component

        function TradingHeroSection() {
            return (
                <section className="relative overflow-hidden border-b border-gray-200 bg-linear-to-br from-gray-100 to-white dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 opacity-60 blur-3xl">

                        </div>
                        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl">

                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative py-16 lg:py-20">
                        <div className="flex flex-col items-center gap-10 md:flex-row">
                            <div className="w-full space-y-6 md:w-1/2">
                                <div
                                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                                    style={{ background: "var(--brand)" }}
                                >
                                    Innovative Trading Platform
                                </div>

                                <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                                    <span className="block">
                                        Trade Global Markets
                                    </span>
                                    <span className="mt-1 block bg-linear-to-r from-(--brand) to-emerald-500 bg-clip-text text-transparent">
                                        With Confidence
                                    </span>
                                </h1>

                                <p className="max-w-lg text-lg text-slate-600 dark:text-slate-300">
                                    Access advanced trading tools for Forex, Cryptocurrencies, Commodities, Indices, and more with competitive spreads and lightning-fast execution.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <BrandActionLink
                                        label="Create Account"
                                        variant="large"
                                    />
                                    <LoginLink />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800">
                                    <LiveMarketHeader
                                        timestamp="10:39:59 AM"
                                        marketStatus="Open"
                                    />

                                    <MarketHeader dataId="0" />

                                    <IframeEmbed
                                        className="tradingview-widget-container w-full overflow-hidden"
                                        src="/frames/1ef66a61-be43-47f0-80ad-543bac904ef2/index.html"
                                        title="advanced chart TradingView widget"
                                        isTradingView={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    

export default TradingHeroSection
