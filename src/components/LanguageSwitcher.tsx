import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component

        function LanguageSwitcher({
            languageCode,
            imageId
        }: {
            languageCode: string;
            imageId: string;
        }) {
            return (
                <div className={"gt-selected"}>
                    <div className={"gt-current-lang"}>
                        <Img id={imageId} />
                        <span className={"gt-lang-code"}>
                            {languageCode}
                        </span>
                        <span className={"gt_float_switcher-arrow"}>

                        </span>
                    </div>
                </div>
            );
        }
    

export default LanguageSwitcher
