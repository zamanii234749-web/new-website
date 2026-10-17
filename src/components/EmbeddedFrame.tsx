import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function EmbeddedFrame({
            title,
            src
        }: {
            title: string;
            src: string;
        }) {
            return (
                <iframe
                    allow={"autoplay; encrypted-media"}
                    referrerPolicy={"strict-origin-when-cross-origin"}
                    allowFullScreen={""}
                    className={"h-full w-full object-cover"}
                    title={title}
                    sandbox={"allow-popups allow-top-navigation-by-user-activation"}
                    src={src}
                >
                </iframe>
            );
        }
    

export default EmbeddedFrame
