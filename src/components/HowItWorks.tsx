import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ActionLink from './ActionLink.tsx'
import NumberCircle from './NumberCircle.tsx'


// Component

        function HowItWorks() {
            return (
                <section className={"bg-white dark:bg-gray-900"}>
                    <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"}>
                        <div className={"mx-auto mb-12 max-w-2xl text-center"}>
                            <div className={"mb-3"}>
                                <span
                                    className={"inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg"}
                                    style={{ background: "var(--brand)" }}
                                >
                                    Simple Process
                                </span>
                            </div>

                            <h2 className={"text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"}>
                                How It Works
                            </h2>

                            <p className={"mt-3 text-lg text-slate-600 dark:text-slate-300"}>
                                Get started with trading in three simple steps.
                            </p>
                        </div>

                        <div className={"grid grid-cols-1 gap-8 md:grid-cols-3"}>
                            <ProcessStep
                                number={1}
                                title="Deposit"
                                description="Open a real account and add funds. We work with more than 20 payment systems for your convenience."
                                actionLabel="Get Started"
                            />

                            <ProcessStep
                                number={2}
                                title="Trade"
                                description="Trade any of 100 assets and stocks. Use technical analysis and trade the news for better results."
                                actionLabel="Explore Markets"
                            />

                            <ProcessStep
                                number={3}
                                title="Withdraw"
                                description="Get funds easily to your bank card or e-wallet with our fast and secure withdrawal process."
                                actionLabel="Learn More"
                            />
                        </div>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function ProcessStep({
            number,
            title,
            description,
            actionLabel,
        }: {
            number: number;
            title: string;
            description: string;
            actionLabel: string;
        }) {
            return (
                <div className={"flex h-full flex-col p-8 transition hover:-translate-y-2 rounded-xl border border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"}>
                    <div className={"mb-6 flex justify-center"}>
                        <NumberCircle number={number} />
                    </div>

                    <h3 className={"mb-3 text-center text-xl font-bold text-slate-900 dark:text-white"}>
                        {title}
                    </h3>

                    <div
                        className={"mx-auto mb-4 h-1 w-20"}
                        style={{ background: "var(--brand)" }}
                    >
                    </div>

                    <p className={"mb-8 text-center text-slate-600 dark:text-slate-300"}>
                        {description}
                    </p>

                    <div className={"mt-auto text-center"}>
                        <ActionLink
                            label={actionLabel}
                            variant="primary"
                            size="default"
                            icon="arrow-right"
                        />
                    </div>
                </div>
            );
        }
    

export default HowItWorks
