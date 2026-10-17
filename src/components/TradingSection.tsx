import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Icon from './Icon.tsx'
import Icon1 from './Icon1.tsx'
import ActionLink from './ActionLink.tsx'
import ExploreLink from './ExploreLink.tsx'
import FeatureList from './FeatureList.tsx'


        type CryptoCardData = {
            title: string;
            description: string;
            symbol: string;
            gradient: string;
            imageId?: string;
            icon?: string;
        };

        type ServiceCardData = {
            title: string;
            icon: string;
            featureListId: string;
        };

        type TradingSectionData = {
            badge: string;
            title: string;
            description: string;
            cryptoCards?: CryptoCardData[];
            serviceCards?: ServiceCardData[];
        };
    
// Component

        function TradingSection({
            dataId,
            variant
        }: {
            dataId: string;
            variant: "crypto" | "services";
        }) {
            const data: TradingSectionData = getTradingSectionData(dataId);

            const isCrypto = variant === "crypto";

            return (
                <section
                    className={
                        isCrypto
                            ? "bg-gray-50 dark:bg-gray-800"
                            : "bg-white dark:bg-gray-900"
                    }
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        <SectionHeader
                            badge={data.badge}
                            title={data.title}
                            description={data.description}
                        />

                        {isCrypto ? (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {data.cryptoCards?.map((card) => (
                                    <CryptoCard
                                        key={card.symbol}
                                        title={card.title}
                                        description={card.description}
                                        symbol={card.symbol}
                                        gradient={card.gradient}
                                        imageId={card.imageId}
                                        icon={card.icon}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {data.serviceCards?.map((card) => (
                                    <ServiceCard
                                        key={card.featureListId}
                                        title={card.title}
                                        icon={card.icon}
                                        featureListId={card.featureListId}
                                    />
                                ))}
                            </div>
                        )}

                        {isCrypto ? (
                            <div className="mt-10 text-center">
                                <ActionLink
                                    label="View all cryptocurrencies "
                                    variant="primary"
                                    size="default"
                                    icon="arrow-right"
                                />
                            </div>
                        ) : (
                            <div className="mt-12 text-center">
                                <ActionLink
                                    label="Start Trading Now "
                                    variant="primary"
                                    size="wide"
                                    icon="arrow-right"
                                />
                            </div>
                        )}
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function SectionHeader({
            badge,
            title,
            description
        }: {
            badge: string;
            title: string;
            description: string;
        }) {
            return (
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <div className="mb-3">
                        <span
                            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg"
                            style={{ background: "var(--brand)" }}
                        >
                            {badge}
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                        {description}
                    </p>
                </div>
            );
        }

        function CryptoCard({
            title,
            description,
            symbol,
            gradient,
            imageId,
            icon
        }: {
            title: string;
            description: string;
            symbol: string;
            gradient: string;
            imageId?: string;
            icon?: string;
        }) {
            return (
                <div className="group overflow-hidden transition hover:-translate-y-1 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800">
                    <div
                        className={`flex h-24 items-center justify-center bg-linear-to-r ${gradient}`}
                    >
                        {imageId !== undefined ? (
                            <Img id={imageId} />
                        ) : (
                            <Icon1
                                icon={icon!}
                                size="text-5xl"
                                variant="whiteShadow"
                            />
                        )}
                    </div>

                    <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                            {title}
                        </h3>

                        <p className="h-24 overflow-hidden text-sm text-slate-600 dark:text-slate-400">
                            {description}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                            <ExploreLink
                                label="Trade now "
                                smallIcon={false}
                            />

                            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-gray-700 dark:text-slate-300">
                                {symbol}
                            </span>
                        </div>
                    </div>
                </div>
            );
        }

        function ServiceCard({
            title,
            icon,
            featureListId
        }: {
            title: string;
            icon: string;
            featureListId: string;
        }) {
            return (
                <div className="h-full p-6 transition hover:-translate-y-1 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800">
                    <div
                        className="mb-4 grid h-14 w-14 place-items-center rounded-full text-white"
                        style={{ background: "var(--brand)" }}
                    >
                        <Icon1
                            icon={icon}
                            size="text-xl"
                        />
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                        {title}
                    </h3>

                    <FeatureList
                        dataId={featureListId}
                        variant="bullet"
                    />
                </div>
            );
        }
    


        function getTradingSectionData(
            id: string | number
        ): TradingSectionData {
            const data: Record<string, TradingSectionData> = {
                "0": {
                    badge: "Popular Asset Class",
                    title: "Cryptocurrency Trading",
                    description:
                        "Trade the world's most popular digital assets with competitive spreads and advanced tools.",
                    cryptoCards: [
                        {
                            title: "Bitcoin",
                            description:
                                "Bitcoin is a decentralized digital currency without a central bank or administrator, allowing peer-to-peer transactions without intermediaries on the blockchain network.",
                            symbol: "BTC/USD",
                            gradient: "from-orange-500 to-yellow-500",
                            imageId: "0"
                        },
                        {
                            title: "Ethereum",
                            description:
                                "Ethereum is a decentralized, open-source blockchain with smart contract functionality. After Bitcoin, it is the largest cryptocurrency by market capitalization.",
                            symbol: "ETH/USD",
                            gradient: "from-blue-500 to-indigo-600",
                            imageId: "1"
                        },
                        {
                            title: "Ripple",
                            description:
                                "Ripple is a real-time gross settlement system, currency exchange and remittance network. It uses XRP to facilitate fast, low-cost international transactions.",
                            symbol: "XRP/USD",
                            gradient: "from-sky-500 to-blue-700",
                            icon: "fas fa-water"
                        },
                        {
                            title: "Cardano",
                            description:
                                "Cardano is a proof-of-stake blockchain platform. It aims to be more scalable, sustainable, and interoperable than other blockchain platforms.",
                            symbol: "ADA/USD",
                            gradient: "from-indigo-700 to-blue-900",
                            icon: "fas fa-cube"
                        }
                    ]
                },
                "1": {
                    badge: "Comprehensive Services",
                    title: "Start Trading with Br0ker Classic Demo",
                    description:
                        "Everything you need for successful trading in one platform.",
                    serviceCards: [
                        {
                            title: "Market Analysis",
                            icon: "fas fa-chart-line",
                            featureListId: "2"
                        },
                        {
                            title: "Award-Winning Broker",
                            icon: "fas fa-trophy",
                            featureListId: "3"
                        },
                        {
                            title: "Investment Options",
                            icon: "fas fa-hand-holding-usd",
                            featureListId: "4"
                        }
                    ]
                }
            };

            return data[String(id)] ?? data["0"];
        }
    

export default TradingSection
