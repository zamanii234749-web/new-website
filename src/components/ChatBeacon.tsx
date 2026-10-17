import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Chat_bubble_speech_balloon from './icons/Chat_bubble_speech_balloon.tsx'


// Component

        function ChatBeacon() {
            return (
                <button
                    type={"button"}
                    className={"fixed bottom-24 right-6 z-30 h-12 w-12 cursor-grab select-none touch-none rounded-full text-white shadow-2xl active:cursor-grabbing md:bottom-6 chat-beacon chat-beacon--idle"}
                    style={{
                        "--chat-beacon": "#3a54e8",
                        touchAction: "none"
                    } as React.CSSProperties}
                >
                    <span className={"chat-beacon-ring"}>
                    </span>
                    <span className={"chat-beacon-face bg-linear-to-br from-blue-600 to-indigo-600"}>
                        <Chat_bubble_speech_balloon />
                    </span>
                </button>
            );
        }
    

export default ChatBeacon
