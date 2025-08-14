import React from 'react'

const DefaultLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) => {
    return (
        <div
            className='h-[100dvh] w-screen'
        >
            <div
                className='w-full h-full mx-auto'
            >
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout