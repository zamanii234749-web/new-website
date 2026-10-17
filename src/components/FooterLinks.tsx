import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type FooterLinksData = {
            labels: string[];
        };
    
// Component

        function FooterLinks({
            dataId
        }: {
            dataId: string;
        }) {
            const { labels }: FooterLinksData = getFooterLinksData(dataId);

            return (
                <ul className={"space-y-3"}>
                    {labels.map((label, index) => (
                        <FooterLinkItem
                            key={index}
                            label={label}
                        />
                    ))}
                </ul>
            );
        }
    

// Subcomponents

        function FooterLinkItem({
            label
        }: {
            label: string;
        }) {
            return (
                <li>
                    <a className={"text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}>
                        {label}
                    </a>
                </li>
            );
        }
    


        function getFooterLinksData(id: string | number): FooterLinksData {
            const data: Record<string, FooterLinksData> = {
                "0": {
                    labels: [
                        "About Us",
                        "Why Choose Us",
                        "Education",
                        "Contact"
                    ]
                },
                "1": {
                    labels: [
                        "Cryptocurrencies",
                        "Forex",
                        "Shares",
                        "Indices"
                    ]
                },
                "2": {
                    labels: [
                        "Log In",
                        "Create Account",
                        "Help Center"
                    ]
                }
            };

            return data[String(id)] ?? { labels: [] };
        }
    

export default FooterLinks
