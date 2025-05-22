"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AnimationWrapper({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.5,
    once = true,
    threshold = 0.2,
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, threshold })

    // Définir les valeurs initiales et finales en fonction de la direction
    let initial = {}

    switch (direction) {
        case "up":
            initial = { opacity: 0, y: 20 }
            break
        case "down":
            initial = { opacity: 0, y: -20 }
            break
        case "left":
            initial = { opacity: 0, x: 20 }
            break
        case "right":
            initial = { opacity: 0, x: -20 }
            break
        case "none":
            initial = { opacity: 0 }
            break
        default:
            initial = { opacity: 0, y: 20 }
    }

    const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{
                duration,
                delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function AnimateStagger({
    children,
    className = "",
    staggerDelay = 0.1,
    containerDelay = 0,
    direction = "up",
    once = true,
    threshold = 0.1,
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, threshold })

    return (
        <motion.div ref={ref} initial={{ opacity: 1 }} className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <AnimationWrapper
                        key={index}
                        delay={containerDelay + index * staggerDelay}
                        direction={direction}
                        once={once}
                        threshold={threshold}
                    >
                        {child}
                    </AnimationWrapper>
                ))
                : children}
        </motion.div>
    )
}
