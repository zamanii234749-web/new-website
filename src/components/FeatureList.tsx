import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'
import FeatureItem from './FeatureItem.tsx'


        type FeatureListData = {
            items: Array<{
                title: string;
                description?: string;
                icon?: string;
            }>;
        };
    
// Component

        function FeatureList({
            dataId,
            variant
        }: {
            dataId: string;
            variant: "check" | "icon" | "bullet";
        }) {
            const { items }: FeatureListData = getFeatureListData(dataId);

            if (variant === "check") {
                return (
                    <ul className={"space-y-4"}>
                        {items.map((item, index) => (
                            <CheckFeatureItem
                                key={index}
                                title={item.title}
                                description={item.description ?? ""}
                            />
                        ))}
                    </ul>
                );
            }

            if (variant === "icon") {
                return (
                    <ul className={"space-y-5"}>
                        {items.map((item, index) => (
                            <IconFeatureItem
                                key={index}
                                title={item.title}
                                description={item.description ?? ""}
                                icon={item.icon ?? "fa-check"}
                            />
                        ))}
                    </ul>
                );
            }

            return (
                <ul className={"space-y-3 text-slate-600 dark:text-slate-300"}>
                    {items.map((item, index) => (
                        <BulletFeatureItem
                            key={index}
                            title={item.title}
                        />
                    ))}
                </ul>
            );
        }
    

// Subcomponents

        function CheckFeatureItem({
            title,
            description
        }: {
            title: string;
            description: string;
        }) {
            return (
                <li className={"flex items-start"}>
                    <span className={"mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500"}>
                        <i className={"fas fa-check text-[10px] text-white"}>
                        </i>
                    </span>
                    <p className={"ml-3 text-slate-600 dark:text-slate-300"}>
                        <span className={"font-semibold text-slate-900 dark:text-white"}>
                            {title}
                        </span>
                        {description}
                    </p>
                </li>
            );
        }

        function IconFeatureItem({
            title,
            description,
            icon
        }: {
            title: string;
            description: string;
            icon: string;
        }) {
            return (
                <li className={"flex items-start"}>
                    <span
                        className={"grid h-8 w-8 shrink-0 place-items-center rounded-full text-white"}
                        style={{ background: "var(--brand)" }}
                    >
                        <i className={`fas ${icon} text-sm`}>
                        </i>
                    </span>
                    <div className={"ml-4"}>
                        <h4 className={"font-medium text-slate-900 dark:text-white"}>
                            {title}
                        </h4>
                        <p className={"mt-1 text-sm text-slate-600 dark:text-slate-400"}>
                            {description}
                        </p>
                    </div>
                </li>
            );
        }

        function BulletFeatureItem({
            title
        }: {
            title: string;
        }) {
            return (
                <li className={"flex items-start"}>
                    <span
                        className={"mr-2 shrink-0"}
                        style={{ color: "var(--brand)" }}
                    >
                        •
                    </span>
                    <span>
                        {title}
                    </span>
                </li>
            );
        }
    


        function getFeatureListData(id: string | number): FeatureListData {
            const data: Record<string, FeatureListData> = {
                "0": {
                    items: [
                        {
                            title: "Ultra-low spreads",
                            description: " from 0.0 pips on major pairs"
                        },
                        {
                            title: "Lightning-fast execution",
                            description: " from NY4 server facility with minimal slippage"
                        },
                        {
                            title: "Top-tier liquidity",
                            description: " and market-leading pricing 24/5"
                        },
                        {
                            title: "No dealing desk",
                            description: " and no requotes, ever"
                        }
                    ]
                },

                "1": {
                    items: [
                        {
                            title: "Globally Regulated",
                            description: "Operating under strict financial regulations to ensure maximum security for your assets.",
                            icon: "fa-check"
                        },
                        {
                            title: "40+ International Awards",
                            description: "Recognition for excellence in trading services, platform technology and customer support.",
                            icon: "fa-trophy"
                        },
                        {
                            title: "24/7 Multilingual Support",
                            description: "Expert assistance available around the clock in multiple languages.",
                            icon: "fa-headset"
                        },
                        {
                            title: "Segregated Client Funds",
                            description: "Your investments are kept in separate accounts for maximum security.",
                            icon: "fa-shield-alt"
                        },
                        {
                            title: "Personal Account Managers",
                            description: "Dedicated professionals to guide your trading journey.",
                            icon: "fa-user-tie"
                        }
                    ]
                },

                "2": {
                    items: [
                        {
                            title: "Daily Market Analysis"
                        },
                        {
                            title: "Weekly Live Webinars"
                        },
                        {
                            title: "Live Q & A Sessions"
                        },
                        {
                            title: "Trading Strategy Support"
                        }
                    ]
                },

                "3": {
                    items: [
                        {
                            title: "42+ Industry Awards"
                        },
                        {
                            title: "Top 100 Companies"
                        },
                        {
                            title: "Best Client Funds Security Global"
                        },
                        {
                            title: "Best Forex News & Analysis Provider"
                        }
                    ]
                },

                "4": {
                    items: [
                        {
                            title: "Copy Trading — How it Works"
                        },
                        {
                            title: "Become a Follower"
                        },
                        {
                            title: "Strategy Ranking"
                        },
                        {
                            title: "Become an Investor"
                        }
                    ]
                }
            };

            return data[String(id)] ?? { items: [] };
        }
    

export default FeatureList
