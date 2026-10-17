import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import DropdownButton from './DropdownButton.tsx'


// Component

        function DesktopNavigation() {
            return (
                <nav className={"hidden space-x-8 md:flex"}>
                    <NavigationDropdown
                        label="Trading"
                        items={[
                            "Cryptocurrencies",
                            "Forex",
                            "Shares",
                            "Indices",
                            "ETFs"
                        ]}
                    />

                    <NavigationDropdown
                        label="System"
                        items={[
                            "Trade",
                            "Copy Trading",
                            "Automated Trading"
                        ]}
                    />

                    <NavigationDropdown
                        label="Company"
                        items={[
                            "About Us",
                            "Why Us",
                            "FAQ",
                            "Legal & Regulation"
                        ]}
                    />

                    <NavigationLink label="Education" />

                    <NavigationLink label="Contact" />
                </nav>
            );
        }
    

// Subcomponents

        function NavigationDropdown({
            label,
            items
        }: {
            label: string;
            items: string[];
        }) {
            return (
                <div className={"group relative"}>
                    <DropdownButton label={label} />

                    <div
                        className={
                            "invisible absolute left-0 top-full z-50 w-48 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100"
                        }
                    >
                        <div
                            className={
                                "rounded-md border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black/5 dark:border-gray-800 dark:bg-gray-900"
                            }
                        >
                            {items.map((item) => (
                                <DropdownMenuItem
                                    key={item}
                                    label={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        function DropdownMenuItem({
            label
        }: {
            label: string;
        }) {
            return (
                <a
                    className={
                        "block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    }
                >
                    {label}
                </a>
            );
        }

        function NavigationLink({
            label
        }: {
            label: string;
        }) {
            return (
                <a
                    className={
                        "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                    }
                >
                    {label}
                </a>
            );
        }
    

export default DesktopNavigation
