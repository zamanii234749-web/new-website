import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Icon from './Icon.tsx'
import TradingViewFrame from './TradingViewFrame.tsx'
import IconBadge from './IconBadge.tsx'
import FeatureDescription from './FeatureDescription.tsx'
import ActionLink from './ActionLink.tsx'
import FeatureList from './FeatureList.tsx'
import FeatureItem from './FeatureItem.tsx'


type MarketSectionData = {
    badge: string;
    title: string;
    description: string;
    layout: "analysis" | "conditions" | "trust" | "freedom";
    frameSrc: string;
    featureListId?: string;
    actionLabel: string;
    actionSize: "default" | "medium";
};
    
// Component

function MarketSection({
    dataId
}: {
    dataId: string;
}) {
    const data: MarketSectionData = getMarketSectionData(dataId);

    const gridClassName =
        data.layout === "analysis"
            ? "grid grid-cols-1 gap-10 lg:grid-cols-2"
            : data.layout === "conditions"
            ? "grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
            : "grid grid-cols-1 items-center gap-10 lg:grid-cols-2";

    return (
        <section className={"bg-gray-50 dark:bg-gray-800"}>
            <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"}>
                <SectionHeader
                    badge={data.badge}
                    title={data.title}
                    description={data.description}
                />
                <div className={gridClassName}>
                    <SectionContent data={data} />
                </div>
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
        <div className={"mx-auto mb-12 max-w-2xl text-center"}>
            <div className={"mb-3"}>
                <span
                    className={"inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg"}
                    style={{ background: "var(--brand)" }}
                >
                    {badge}
                </span>
            </div>
            <h2 className={"text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"}>
                {title}
            </h2>
            <p className={"mt-3 text-lg text-slate-600 dark:text-slate-300"}>
                {description}
            </p>
        </div>
    );
}

function MarketWidget({
    src,
    height = "400px"
}: {
    src: string;
    height?: "400px" | "420px";
}) {
    return (
        <div
            className={`tradingview-widget-container w-full overflow-hidden h-[${height}]`}
            style={{ width: "100%", height: "100%" }}
        >
            <TradingViewFrame
                src={src}
                variant="advanced"
            />
        </div>
    );
}

function SectionContent({
    data
}: {
    data: MarketSectionData;
}) {
    if (data.layout === "analysis") {
        return (
            <>
                <div className={"p-5 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                    <h3 className={"mb-4 text-xl font-semibold text-slate-900 dark:text-white"}>
                        Live Market Overview
                    </h3>
                    <MarketWidget
                        src={data.frameSrc}
                        height="420px"
                    />
                </div>
                <div className={"space-y-6 p-6 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                    <h3 className={"mb-2 text-xl font-semibold text-slate-900 dark:text-white"}>
                        Expert Market Analysis
                    </h3>
                    <div className={"flex items-start gap-4"}>
                        <IconBadge icon="fa-chart-bar" />
                        <FeatureDescription
                            title="Daily Market Updates"
                            description="Receive daily market analysis directly to your inbox. Our team of expert analysts provide actionable insights on market trends, price movements, and trading opportunities across all major asset classes."
                        />
                    </div>
                    <div className={"flex items-start gap-4"}>
                        <IconBadge icon="fa-tools" />
                        <FeatureDescription
                            title="Premium Trading Tools"
                            description="Access advanced trading tools designed for all experience levels. Our platform offers customizable solutions to meet diverse trading needs and styles, with multi-language support for international traders."
                        />
                    </div>
                    <div className={"flex items-start gap-4"}>
                        <IconBadge icon="fa-shield-alt" />
                        <FeatureDescription
                            title="Funds Protection"
                            description="Your security is our priority. We provide industry-leading insurance protection for client funds, ensuring your investments are protected against unforeseen circumstances."
                        />
                    </div>
                    <div className={"pt-2 text-center"}>
                        <ActionLink
                            label={data.actionLabel}
                            variant="primary"
                            size={data.actionSize}
                            icon="arrow-right"
                        />
                    </div>
                </div>
            </>
        );
    }

    if (data.layout === "conditions") {
        return (
            <>
                <div className={"p-6 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                    <h3 className={"mb-6 text-2xl font-bold text-slate-900 dark:text-white"}>
                        Premium Trading Conditions
                    </h3>
                    <FeatureList
                        dataId={data.featureListId!}
                        variant="check"
                    />
                    <div className={"mt-8"}>
                        <ActionLink
                            label={data.actionLabel}
                            variant="primary"
                            size={data.actionSize}
                            icon="arrow-right"
                        />
                    </div>
                </div>
                <div className={"p-5 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                    <h3 className={"mb-4 text-xl font-semibold text-slate-900 dark:text-white"}>
                        Live Market Overview
                    </h3>
                    <MarketWidget src={data.frameSrc} />
                </div>
            </>
        );
    }

    if (data.layout === "trust") {
        return (
            <>
                <div className={"overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                    <div className={"border-b border-gray-200 p-4 dark:border-gray-700"}>
                        <h3 className={"text-xl font-semibold text-slate-900 dark:text-white"}>
                            Real-Time Market Analysis
                        </h3>
                    </div>
                    <MarketWidget src={data.frameSrc} />
                </div>
                <div className={"p-6 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                    <h3 className={"mb-6 border-b border-gray-200 pb-3 text-xl font-bold text-gray-900 dark:border-gray-700 dark:text-white"}>
                        Our Trusted Reputation
                    </h3>
                    <FeatureList
                        dataId={data.featureListId!}
                        variant="icon"
                    />
                    <div className={"mt-8 text-center"}>
                        <ActionLink
                            label={data.actionLabel}
                            variant="primary"
                            size={data.actionSize}
                            icon="arrow-right"
                        />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={"p-6 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                <MarketWidget src={data.frameSrc} />
                <p
                    className={"mt-3 text-center text-sm"}
                    style={{ color: "var(--brand)" }}
                >
                    Competitive conditions for all traders
                </p>
            </div>
            <div className={"p-8 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                <h3
                    className={"mb-4 text-xl font-bold"}
                    style={{ color: "var(--brand)" }}
                >
                    Premium Trading Experience
                </h3>
                <p className={"mb-6 leading-relaxed text-slate-600 dark:text-slate-300"}>
                    {`One of the primary goals of `}
                    Br0ker Classic Demo
                    {` is to provide the best product in the market. Our relationships with leading tier-one financial institutions mean deep liquidity and tighter spreads for Forex traders.`}
                </p>
                <div className={"mb-6 space-y-4"}>
                    <FeatureItem text="Trade Forex, Indices, Shares &amp; Commodities" />
                    <FeatureItem text="Access global markets 24 hours / 7 days" />
                    <FeatureItem text="Multilingual customer support" />
                    <FeatureItem text="Trade on the go on our mobile apps" />
                </div>
                <ActionLink
                    label={data.actionLabel}
                    variant="primary"
                    size={data.actionSize}
                    icon="arrow-right"
                />
            </div>
        </>
    );
}
    


function getMarketSectionData(
    id: string | number
): MarketSectionData {
    const sections: Record<string, MarketSectionData> = {
        "0": {
            badge: "Real-Time Intelligence",
            title: "Market Analysis & Insights",
            description: "Stay ahead with real-time market data, AI-powered insights, and expert analysis.",
            layout: "analysis",
            frameSrc: "/frames/5bf4043d-7666-4497-9786-b1d77fc41bde/index.html",
            actionLabel: "Learn more about our services ",
            actionSize: "default"
        },
        "1": {
            badge: "Superior Trading Experience",
            title: "Tighter Spreads. Faster Execution.",
            description: "Experience institutional-grade trading conditions designed for professional traders.",
            layout: "conditions",
            frameSrc: "/frames/2de62600-b10f-4cea-904b-bd260f12e4e7/index.html",
            featureListId: "0",
            actionLabel: "View detailed conditions ",
            actionSize: "medium"
        },
        "2": {
            badge: "Global Trust",
            title: "Why Br0ker Classic Demo Is One of the World's Most Trusted Brands",
            description: "Experience the reliability and security that our global clients have come to trust.",
            layout: "trust",
            frameSrc: "/frames/9eb3e468-339e-4a8b-ae9e-ab5c02960c85/index.html",
            featureListId: "1",
            actionLabel: "Learn More ",
            actionSize: "default"
        },
        "3": {
            badge: "Freedom to Trade",
            title: "Trade What You Want, When You Want",
            description: "Experience unlimited trading possibilities with our comprehensive platform.",
            layout: "freedom",
            frameSrc: "/frames/3209fb3c-30c5-45af-a34b-60d3f174cf11/index.html",
            actionLabel: "Learn About Our Commissions ",
            actionSize: "default"
        }
    };

    return sections[String(id)] ?? sections["0"];
}
    

export default MarketSection
