import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import MarketHeader from './MarketHeader.tsx'


// Component

        function LiveMarketHeader({
            timestamp,
            marketStatus
        }: {
            timestamp: string;
            marketStatus: string;
        }) {
            return (
                <div className={"flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-700"}>
                    <div className={"flex items-center gap-3"}>
                        <span className={"flex items-center gap-1.5"}>
                            <span className={"relative flex h-2 w-2"}>
                                <span className={"absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"}>
                                </span>
                                <span className={"relative inline-flex h-2 w-2 rounded-full bg-green-500"}>
                                </span>
                            </span>
                            <span className={"text-xs font-medium text-green-500"}>
                                LIVE
                            </span>
                        </span>
                        <span className={"font-mono text-xs text-slate-400"}>
                            {timestamp}
                        </span>
                    </div>
                    <div className={"flex items-center gap-2"}>
                        <span className={"text-xs text-green-500"}>
                            {marketStatus}
                        </span>
                        <select className={"rounded-sm border-0 bg-gray-100 px-2 py-1 text-xs text-slate-600 focus:ring-0 dark:bg-gray-700 dark:text-slate-300"}>
                            <option selected={""}>
                                1D
                            </option>
                            <option>
                                1W
                            </option>
                            <option>
                                1M
                            </option>
                            <option>
                                1Y
                            </option>
                        </select>
                    </div>
                </div>
            );
        }
    

export default LiveMarketHeader
