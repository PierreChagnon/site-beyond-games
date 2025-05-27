"use client";
import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Écouter les mouvements de souris
        window.addEventListener('mousemove', updateMousePosition);

        // Écouter les éléments interactifs
        const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Curseur principal - rond avec effet de mélange */}
            <div
                className={`fixed top-0 left-0 pointer-events-none z-[99] transition-transform duratio  n-150 ease-out `}
                style={{
                    transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
                }}
            >
                <div className="w-6 h-6 bg-blue-500 rounded-full mix-blend-exclusion opacity-80" />
            </div>

            {/* Curseur secondaire - plus grand, avec effet de traînée */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-40 transition-transform duration-300 ease-out"
                style={{
                    transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
                }}
            >
                <div className="w-10 h-10 border-2 border-purple-400 rounded-full mix-blend-exclusion opacity-60" />
            </div>
        </>
    );
};