import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'
import Icon1 from './Icon1.tsx'
import ActionLink from './ActionLink.tsx'
import ExploreLink from './ExploreLink.tsx'
import TradingFeature from './TradingFeature.tsx'


        type TradingFeatureCardData = {
            icon: string;
            title: string;
            description: string;
            highlightedTitle?: {
                prefix: string;
                highlight: string;
            };
            exploreLabel?: string;
        };

        type TradingFeaturesData = {
            title: string;
            subtitle: string;
            badge?: string;
            gridClassName: string;
            cardVariant: "simple" | "product" | "copy" | "platform";
            cards: TradingFeatureCardData[];
            actionLabel?: string;
        };
    
// Component

        function TradingFeatures({
            dataId
        }: {
            dataId: string;
        }) {
            const data: TradingFeaturesData = getTradingFeaturesData(dataId);

            return (
                <section className={"bg-white dark:bg-gray-900"}>
                    <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"}>
                        <SectionHeading
                            title={data.title}
                            subtitle={data.subtitle}
                            badge={data.badge}
                        />

                        <div className={data.gridClassName}>
                            {data.cards.map((card, index) => (
                                <FeatureCard
                                    key={index}
                                    card={card}
                                    variant={data.cardVariant}
                                />
                            ))}
                        </div>

                        {data.actionLabel !== undefined && (
                            <div className={"mt-10 text-center"}>
                                <ActionLink
                                    label={data.actionLabel}
                                    variant="primary"
                                    size="default"
                                    icon="arrow-right"
                                />
                            </div>
                        )}
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function SectionHeading({
            title,
            subtitle,
            badge
        }: {
            title: string;
            subtitle: string;
            badge?: string;
        }) {
            return (
                <div className={"mx-auto mb-12 max-w-2xl text-center"}>
                    {badge !== undefined && (
                        <div className={"mb-3"}>
                            <span
                                className={"inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg"}
                                style={{ background: "var(--brand)" }}
                            >
                                {badge}
                            </span>
                        </div>
                    )}

                    <h2 className={"text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"}>
                        {title}
                    </h2>

                    <p className={"mt-3 text-lg text-slate-600 dark:text-slate-300"}>
                        {subtitle}
                    </p>
                </div>
            );
        }

        function FeatureCard({
            card,
            variant
        }: {
            card: TradingFeatureCardData;
            variant: TradingFeaturesData["cardVariant"];
        }) {
            const cardClassName =
                variant === "simple"
                    ? "flex flex-col items-center text-center"
                    : variant === "product"
                        ? "group p-6 transition hover:-translate-y-1 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"
                        : "p-6 transition hover:-translate-y-1 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800";

            const iconClassName =
                variant === "simple"
                    ? "mb-4 grid h-16 w-16 place-items-center rounded-full text-white shadow-lg"
                    : variant === "product"
                        ? "mb-4 grid h-12 w-12 place-items-center rounded-full text-white"
                        : variant === "copy"
                            ? "mb-4 grid h-14 w-14 place-items-center rounded-full text-white"
                            : "mb-4 grid h-16 w-16 place-items-center rounded-full text-white shadow-lg";

            const headingClassName =
                variant === "simple" || variant === "product"
                    ? "mb-2 text-xl font-bold text-slate-900 dark:text-white"
                    : "mb-3 text-xl font-bold text-slate-900 dark:text-white";

            const descriptionClassName =
                variant === "product"
                    ? "mb-4 text-slate-600 dark:text-slate-400"
                    : variant === "platform"
                        ? "text-slate-600 dark:text-slate-300"
                        : "text-slate-600 dark:text-slate-400";

            return (
                <div className={cardClassName}>
                    <div
                        className={iconClassName}
                        style={{ background: "var(--brand)" }}
                    >
                        <Icon1
                            icon={card.icon}
                            size={variant === "simple" ? "text-2xl" : "text-xl"}
                        />
                    </div>

                    <h3 className={headingClassName}>
                        {card.highlightedTitle !== undefined ? (
                            <>
                                {`${card.highlightedTitle.prefix} `}
                                <span style={{ color: "var(--brand)" }}>
                                    {card.highlightedTitle.highlight}
                                </span>
                            </>
                        ) : (
                            card.title
                        )}
                    </h3>

                    <p className={descriptionClassName}>
                        {card.description}
                    </p>

                    {card.exploreLabel !== undefined && (
                        <ExploreLink
                            label={card.exploreLabel}
                            smallIcon={true}
                        />
                    )}
                </div>
            );
        }
    


        function getTradingFeaturesData(
            id: string | number
        ): TradingFeaturesData {
            const data: Record<string, TradingFeaturesData> = {
                "0": {
                    title: "Why Trade With Us",
                    subtitle: "Everything you need for successful trading",
                    gridClassName: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4",
                    cardVariant: "simple",
                    cards: [
                        {
                            icon: "fas fa-chart-line",
                            title: "Trading Tools",
                            description: "Plan your trades effectively with our wide range of free professional trading tools."
                        },
                        {
                            icon: "fas fa-layer-group",
                            title: "Trading Products",
                            description: "Diverse opportunities to optimize your trading portfolio across multiple markets."
                        },
                        {
                            icon: "fas fa-desktop",
                            title: "Trading Platforms",
                            description: "Powerful platforms to suit all trading styles and needs on any device."
                        },
                        {
                            icon: "fas fa-wallet",
                            title: "Funding Methods",
                            description: "Multiple quick, easy and secure methods to fund your trading account."
                        }
                    ]
                },

                "1": {
                    title: "Diverse Trading Products",
                    subtitle: "Access global markets with competitive conditions",
                    gridClassName: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4",
                    cardVariant: "product",
                    cards: [
                        {
                            icon: "fas fa-globe",
                            title: "Forex",
                            description: "Trade 70+ major, minor & exotic currency pairs with competitive spreads and conditions.",
                            exploreLabel: "Explore Forex"
                        },
                        {
                            icon: "fas fa-chart-line",
                            title: "Shares",
                            description: "Access hundreds of public companies from the US, UK, Germany and more markets.",
                            exploreLabel: "Explore Shares"
                        },
                        {
                            icon: "fas fa-fire",
                            title: "Energies",
                            description: "Discover opportunities on UK & US Crude Oil as well as Natural Gas with tight spreads.",
                            exploreLabel: "Explore Energies"
                        },
                        {
                            icon: "fas fa-landmark",
                            title: "Indices",
                            description: "Trade major and minor Index CFDs from around the globe with competitive conditions.",
                            exploreLabel: "Explore Indices"
                        }
                    ]
                },

                "2": {
                    title: "Copy Professional Traders",
                    subtitle: "Let experienced traders do the work for you with our advanced copy trading system.",
                    badge: "Social Trading",
                    gridClassName: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",
                    cardVariant: "copy",
                    actionLabel: "Explore Copy Trading ",
                    cards: [
                        {
                            icon: "fas fa-copy",
                            title: "Copy 400+ Strategies",
                            description: "Access hundreds of strategies for more than 1000 instruments across 7 asset classes."
                        },
                        {
                            icon: "fas fa-chart-line",
                            title: "Select Top Performers",
                            description: "Use our reporting tools to rank strategies according to performance and select the most suitable for your circumstances."
                        },
                        {
                            icon: "fas fa-shield-alt",
                            title: "Stay Protected",
                            description: "The system uses sophisticated calculations to keep your exposure at an optimal level for your account."
                        },
                        {
                            icon: "fas fa-sliders-h",
                            title: "Combine Methods",
                            description: "Our integrated platform allows you to combine copying with manual and automated trading, depending on your preferences."
                        }
                    ]
                },

                "3": {
                    title: "Advanced Trading Tools",
                    subtitle: "Our platform provides everything you need for successful trading in one powerful interface.",
                    badge: "Platform Features",
                    gridClassName: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
                    cardVariant: "platform",
                    cards: [
                        {
                            icon: "fas fa-bolt",
                            title: "Reliable Execution",
                            highlightedTitle: {
                                prefix: "Reliable",
                                highlight: "Execution"
                            },
                            description: "Featuring the market's sharpest execution, Br0ker Classic Demo fills your orders in milliseconds without any requotes or price manipulation."
                        },
                        {
                            icon: "fas fa-chart-line",
                            title: "Intelligent Analysis",
                            highlightedTitle: {
                                prefix: "Intelligent",
                                highlight: "Analysis"
                            },
                            description: "Make informed decisions with smart market analysis tools, live sentiment data and in-platform market insights."
                        },
                        {
                            icon: "fas fa-search-dollar",
                            title: "Transparent Reporting",
                            highlightedTitle: {
                                prefix: "Transparent",
                                highlight: "Reporting"
                            },
                            description: "Access transaction statistics, equity charts and detailed history of your deals for a crystal clear understanding of your performance."
                        },
                        {
                            icon: "fas fa-desktop",
                            title: "Intuitive Interface",
                            highlightedTitle: {
                                prefix: "Intuitive",
                                highlight: "Interface"
                            },
                            description: "Easy to use and navigate, Br0ker Classic Demo was built with real traders' needs in mind. Trade with Br0ker Classic Demo and experience its distinct advantage."
                        }
                    ]
                }
            };

            return data[String(id)] ?? data["0"];
        }
    

export default TradingFeatures
