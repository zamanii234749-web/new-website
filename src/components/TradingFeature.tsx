import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type TradingFeatureData = {
            title: string;
            description: React.ReactNode;
        };
    
// Component

        function TradingFeature({
            dataId
        }: {
            dataId: string;
        }) {
            const { title, description }: TradingFeatureData = getTradingFeatureData(dataId);

            return (
                <div className={"rounded-lg bg-gray-50 p-4 dark:bg-gray-900/60"}>
                    <h3 className={"flex items-center font-semibold text-slate-900 dark:text-white"}>
                        <i
                            className={"fas fa-check-circle mr-2"}
                            style={{ color: "var(--brand)" }}
                        >
                        </i>
                        {title}
                    </h3>
                    <p className={"mt-2 text-slate-600 dark:text-slate-400"}>
                        {description}
                    </p>
                </div>
            );
        }
    


        function getTradingFeatureData(id: string | number): TradingFeatureData {
            const data: Record<string, TradingFeatureData> = {
                "0": {
                    title: "Personalized Trading",
                    description: "Do you want to risk a little or a lot? Do you want gains in the short term or are you playing a longer game? Are you a day trader, a swing trader or a scalper?"
                },
                "1": {
                    title: "Complete Control",
                    description: (
                        <>
                            {`With the right tools, information and access to all the world's currencies, `}
                            Br0ker Classic Demo
                            {` puts you in control of the trades you make.`}
                        </>
                    )
                }
            };

            return data[String(id)] ?? data["0"];
        }
    

export default TradingFeature
