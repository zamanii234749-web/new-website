import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import BrandLogo from './BrandLogo.tsx'
import Icon from './Icon.tsx'
import SocialLinks from './SocialLinks.tsx'
import FooterLinks from './FooterLinks.tsx'
import TextLink from './TextLink.tsx'


// Component

function SiteFooter() {
    return (
        <footer className={"bg-white text-gray-700 dark:bg-gray-950 dark:text-gray-300"}>
            <div className={"border-t border-gray-200 dark:border-gray-800"}>
                <div className={"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"}>
                    <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"}>
                        <div>
                            <BrandLogo variant="sidebar" />
                            <p className={"mb-6 text-sm text-gray-500 dark:text-gray-400"}>
                                Br0ker Classic Demo
                                {` offers CFD trading on stocks, forex, indices, commodities, and cryptocurrencies with competitive spreads and advanced trading tools.`}
                            </p>
                            <SocialLinks />
                        </div>

                        <FooterNavigationSection
                            title="Quick Links"
                            dataId="0"
                        />

                        <FooterNavigationSection
                            title="Trading"
                            dataId="1"
                        />

                        <FooterNavigationSection
                            title="Your Account"
                            dataId="2"
                        />
                    </div>
                </div>
            </div>

            <div className={"border-t border-gray-200 dark:border-gray-800"}>
                <div className={"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"}>
                    <div className={"flex flex-col items-center justify-between md:flex-row"}>
                        <h4 className={"mb-4 text-sm font-semibold text-gray-900 dark:text-white md:mb-0"}>
                            Available On
                        </h4>

                        <div className={"flex items-center space-x-6 text-gray-400"}>
                            <FooterPlatform
                                icon="fa-solid fa-desktop"
                                label="Web"
                            />

                            <FooterPlatform
                                icon="fa-brands fa-windows"
                                label="Windows"
                            />

                            <FooterPlatform
                                icon="fa-brands fa-android"
                                label="Android"
                            />

                            <FooterPlatform
                                icon="fa-brands fa-apple"
                                label="iOS"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={"border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"}>
                <div className={"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"}>
                    <div className={"text-xs text-gray-500 dark:text-gray-400"}>
                        <p className={"mb-4 leading-relaxed"}>
                            <span className={"font-semibold text-gray-700 dark:text-gray-300"}>
                                RISK WARNING:
                            </span>
                            {` The Financial Products offered by the company include Contracts for Difference ('CFDs') and other complex financial products. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, CFDs may not be suitable for all investors because it is possible to lose all of your invested capital. You should never invest money that you cannot afford to lose. Before trading in the complex financial products offered, please ensure you understand the risks involved.`}
                        </p>

                        <div className={"mb-4 flex flex-wrap gap-4"}>
                            <TextLink label="Terms &amp; Conditions" />
                            <TextLink label="Privacy Policy" />
                            <TextLink label="Legal Documents" />
                        </div>

                        <p>
                            {`© `}
                            2026
                            Br0ker Classic Demo
                            . All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
    

// Subcomponents

function FooterNavigationSection({
    title,
    dataId
}: {
    title: string;
    dataId: string;
}) {
    return (
        <div>
            <h3 className={"mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white"}>
                {title}
            </h3>
            <FooterLinks dataId={dataId} />
        </div>
    );
}

function FooterPlatform({
    icon,
    label
}: {
    icon: string;
    label: string;
}) {
    return (
        <span className={"flex items-center"}>
            <Icon icon={icon} hasMargin={true} />
            <span className={"text-sm"}>
                {label}
            </span>
        </span>
    );
}
    

export default SiteFooter
