import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function ActionLink({
            label,
            variant = "primary",
            size = "default",
            icon = "arrow-right"
        }: {
            label: string;
            variant?: "primary" | "outline";
            size?: "default" | "compact" | "medium" | "wide";
            icon?: "arrow-right" | "graduation-cap" | "video";
        }) {
            const paddingClasses = {
                default: "px-6 py-3",
                compact: "px-5 py-2",
                medium: "px-5 py-3",
                wide: "px-8 py-3"
            };

            const variantClasses = {
                primary: "text-white shadow-lg transition hover:-translate-y-0.5",
                outline: "border border-slate-300 text-slate-600 transition hover:text-slate-900 dark:border-gray-700 dark:text-slate-300 dark:hover:text-white"
            };

            const className = [
                "inline-flex items-center rounded-md",
                variant === "outline" ? variantClasses.outline.split(" ").slice(0, 2).join(" ") : "",
                paddingClasses[size],
                "text-base font-medium",
                variant === "outline"
                    ? "text-slate-600 transition hover:text-slate-900 dark:border-gray-700 dark:text-slate-300 dark:hover:text-white"
                    : variantClasses.primary
            ].filter(Boolean).join(" ");

            return (
                <a
                    className={className}
                    {...(variant === "primary"
                        ? { style: { background: "var(--brand)" } }
                        : {})}
                >
                    {label}
                    <i className={`fas fa-${icon} ml-2`}></i>
                </a>
            );
        }
    

export default ActionLink
