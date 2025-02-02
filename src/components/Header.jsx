import React from 'react'
import { motion } from "framer-motion";
import TypingAnim from '../animations/TypingAnim';

function Header() {
    return (
        <div className='mb-3'>

            {/* <ControlledLottie /> */}


            <div className='h-16  ml-4 sm:ml-8 mb-2'>
            <TypingAnim  children={" Hi, From BeyondChats Bot "} />

            </div>


         

            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                    backgroundImage: "linear-gradient(90deg, #be4545, #a85d9d, #8472b7, #5a83be, #be4a75)",
                    backgroundSize: "200% auto",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: "bold",
                    
                }}
                className='text-xs  sm:text-xl ml-6 sm:ml-16'
            >
                Elevate Your Website with Seamless AI Conversations – Smart, Fast, and Always Available!
            </motion.div>


        </div>
    )
}

export default Header