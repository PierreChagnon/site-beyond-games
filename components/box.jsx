import React from 'react'

export default function Box({ children }) {
    return (
        <div className='relative p-4'>
            <div className='absolute top-0 left-0 border-t border-l border-primary w-10 h-10'></div>
            <div className='absolute top-0 right-0 border-t border-r border-primary w-10 h-10'></div>
            <div className='absolute bottom-0 left-0 border-b border-l border-primary w-10 h-10'></div>
            <div className='absolute bottom-0 right-0 border-b border-r border-primary w-10 h-10'></div>
            {children}
        </div>
    )
}
