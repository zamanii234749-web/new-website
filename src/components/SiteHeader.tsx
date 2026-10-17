import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import BrandLogo from './BrandLogo.tsx'
import Icon from './Icon.tsx'
import LoginLink1 from './LoginLink1.tsx'
import BrandActionLink from './BrandActionLink.tsx'
import LoginLink from './LoginLink.tsx'
import ActionLink from './ActionLink.tsx'
import DesktopNavigation from './DesktopNavigation.tsx'


// Component

        function SiteHeader() {
            return (
                <header className="relative z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <BrandLogo variant="header" />

                            <DesktopNavigation />

                            <div className="hidden items-center md:flex">
                                <div className="mr-4 flex space-x-1 text-gray-400">
                                    <PlatformIcon icon="fa-solid fa-desktop" />
                                    <PlatformIcon icon="fa-brands fa-windows" />
                                    <PlatformIcon icon="fa-brands fa-android" />
                                    <PlatformIcon icon="fa-brands fa-apple" />
                                </div>

                                <div className="ml-2 flex items-center space-x-4">
                                    <LoginLink1 />

                                    <BrandActionLink
                                        label="Sign up"
                                        variant="compact"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 md:hidden sf-hidden">
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
    

// Subcomponents

        function PlatformIcon({
            icon
        }: {
            icon: string;
        }) {
            return (
                <span className="p-1">
                    <Icon icon={icon} />
                </span>
            );
        }
    

export default SiteHeader
