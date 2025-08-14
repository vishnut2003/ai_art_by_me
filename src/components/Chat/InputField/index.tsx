'use client';

import { ConversationItem } from '@/types/ChatBotTypes';
import { RiArrowUpLine, RiLoaderLine } from '@remixicon/react'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'

const InputField = ({
    setConversation,
}: {
    setConversation: Dispatch<SetStateAction<ConversationItem[]>>,
}) => {

    const [prompt, setPrompt] = useState<string>('');
    const [isPending, setIsPending] = useState<boolean>(false);

    function handleFormsubmit(event: FormEvent) {
        event.preventDefault();

        const promptValue = prompt;

        if (!prompt) {
            return;
        }

        setConversation(prev => [...prev, {
            data: promptValue,
            role: "user",
        }, {
            isPending: true,
            role: "assistant",
            data: "Processing Image",
        }])

        setIsPending(true);

        setPrompt("")

    }

    return (
        <div
            className='space-y-[20px] pb-[20px] w-full max-w-4xl mx-auto pt-[15px] px-[15px]'
        >
            <form
                className='py-[10px] pr-[15px] pl-[25px] rounded-[30px] bg-dark-2 flex items-center gap-3'
                onSubmit={handleFormsubmit}
            >
                <input
                    className='py-[10px] outline-none w-full text-base'
                    placeholder='Enter prompt here...'
                    value={prompt}
                    onChange={(event) => {
                        setPrompt(event.target.value);
                    }}
                />
                <button
                    className='cursor-pointer min-w-[35px] h-[35px] rounded-full bg-white text-dark flex items-center justify-center'
                >
                    {
                        isPending ?
                            <RiLoaderLine
                                size={20}
                                className='animate-spin'
                            />
                            : <RiArrowUpLine
                                size={20}
                            />
                    }
                </button>
            </form>
            <p
                className='text-sm text-center font-light'
            >Our AI can make mistakes. Check important info.</p>
        </div>
    )
}

export default InputField