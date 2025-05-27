import Spline from '@splinetool/react-spline/next';
import * as motion from "motion/react-client"
import { AnimatePresence } from 'framer-motion';


export default function Owl() {
    return (
        <AnimatePresence>
            <motion.div 
            className='relative w-[700px] h-[800px] overflow-hidden'
                initial="offscreen"
                whileInView="onscreen"
                variants={{
                    offscreen: {
                        y: 600,
                    },
                    onscreen: {
                        y: 50,
                        rotate: -10,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 0.8,
                        },
                    },
                }}
                // viewport={{ amount: 0.9 }}
                >
                <Spline
                    scene="https://prod.spline.design/BsrDXWKroJTWnh0s/scene.splinecode"
                />
            <span className='absolute bg-amber-300 w-1/3 h-[50px] bottom-4 right-4'></span>
            </motion.div>
        </AnimatePresence>
    );
}
