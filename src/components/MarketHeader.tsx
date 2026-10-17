import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function MarketHeader({ dataId }: { dataId: string }) {
            const {
                symbol,
                price,
                change,
                updatedAt
            }: MarketHeaderData = getMarketHeaderData(dataId);

            const isNegative = change < 0;

            return (
                <div className={"flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700"}>
                    <div className={"flex items-center gap-2"}>
                        <span
                            className={"grid h-8 w-8 place-items-center rounded-md text-white"}
                            style={{ background: "var(--brand)" }}
                        >
                            <i className={"fas fa-chart-line text-sm"}></i>
                        </span>
                        <div>
                            <div className={"flex flex-wrap items-center gap-2"}>
                                <span className={"font-semibold text-slate-900 dark:text-white"}>
                                    {symbol}
                                </span>
                                <span className={"text-lg font-bold text-slate-900 dark:text-white"}>
                                    {price}
                                </span>
                                <span
                                    className={
                                        isNegative
                                            ? "rounded-sm px-1.5 py-0.5 text-xs bg-red-500/15 text-red-600 dark:text-red-400"
                                            : "rounded-sm px-1.5 py-0.5 text-xs bg-green-500/15 text-green-600 dark:text-green-400"
                                    }
                                >
                                    {change > 0 ? "+" : ""}
                                    {change.toFixed(2)}
                                    %
                                </span>
                            </div>
                            <div className={"text-xs text-slate-500 dark:text-slate-400"}>
                                {`Real-time data · Updated `}
                                {updatedAt}
                            </div>
                        </div>
                    </div>
                    <div className={"hidden gap-2 sm:flex"}>
                        <span className={"grid h-7 w-7 place-items-center rounded-md bg-gray-100 text-slate-500 dark:bg-gray-700 dark:text-slate-300"}>
                            <i className={"fas fa-up-right-and-down-left-from-center text-xs"}></i>
                        </span>
                        <span
                            className={"grid h-7 w-7 place-items-center rounded-md text-white"}
                            style={{ background: "var(--brand)" }}
                        >
                            <i className={"fas fa-plus text-xs"}></i>
                        </span>
                    </div>
                </div>
            );
        }
    


        type MarketHeaderData = {
            symbol: string;
            price: string;
            change: number;
            updatedAt: string;
        };

        function getMarketHeaderData(id: string | number): MarketHeaderData {
            const marketData: Record<string, MarketHeaderData> = {
                "0": {
                    symbol: "BTC/USD",
                    price: "$81,494",
                    change: -1.05,
                    updatedAt: "10:39:59 AM"
                }
            };

            return marketData[String(id)] ?? marketData["0"];
        }
    

export default MarketHeader
