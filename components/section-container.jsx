import React from 'react'

export default function SectionContainer({ children, bgColor = 'bg-black' }) {
    return (
        <div className={`relative flex items-center justify-center ${bgColor} m-4 md:m-8 rounded-4xl`}>
            {children}
        </div>
    )
}
