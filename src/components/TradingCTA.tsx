import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function TradingCTA({
            title,
            description,
            buttonText
        }: {
            title: string;
            description: string;
            buttonText: string;
        }) {
            return (
                <section className={"bg-white dark:bg-gray-900"}>
                    <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"}>
                        <div className={"relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 p-10 text-center text-white shadow-2xl lg:p-16"}>
                            <div className={"pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"}>
                            </div>
                            <h2 className={"relative text-3xl font-bold tracking-tight sm:text-4xl"}>
                                {title}
                            </h2>
                            <p className={"relative mx-auto mt-3 max-w-xl text-white/85"}>
                                {description}
                            </p>
                            <a className={"relative mt-7 inline-block rounded-lg bg-white px-7 py-3 text-sm font-semibold text-blue-600 shadow-lg transition hover:-translate-y-0.5"}>
                                {buttonText}
                            </a>
                        </div>
                    </div>
                </section>
            );
        }
    

export default TradingCTA
