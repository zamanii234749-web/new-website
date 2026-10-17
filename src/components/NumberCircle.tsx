import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function NumberCircle({ number }: { number: number }) {
            return (
                <div
                    className={"grid h-20 w-20 place-items-center rounded-full text-2xl font-bold text-white shadow-lg"}
                    style={{ background: "var(--brand)" }}
                >
                    {number}
                </div>
            );
        }
    

export default NumberCircle
