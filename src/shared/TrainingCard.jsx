import Lottie from 'lottie-react'
import React from 'react'
import botLoad from "../assets/lottie/bot_load.json";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function TrainingCard({ isPopupOpen }) {


    const isMobileScreen = useMediaQuery({ query: '(max-width: 640px)' });



    return (
        <>
            {isPopupOpen &&
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, origin: 0, transformOrigin: '50% 50%' }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 40 }}
                    // className='-full border  fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '
                    className='fixed border inset-0 bg-black/30 backdrop-blur-20 flex items-center justify-center'
                >

                    <div className='relative z-10 bg-white p-6 rounded-lg shadow-lg'>

                        <Lottie animationData={botLoad} width={isMobileScreen ? 30 : 1}
                            className={`${isMobileScreen ? 'w-[100px] h-[100px] ' : 'sm:w-sm sm:h-sm'}`}
                            loop={true} autoplay={true} />

                        <motion.div
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}

                            transition={{ duration: 3, repeat: Infinity, ease: "linear", }}
                            style={{
                                backgroundImage: "linear-gradient(90deg, #5D5B5D ,#C3BFC2, #5D5B5D,#5D5B5D)",
                                backgroundSize: "200% auto",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                textAlign:'center'
                            }}
                        >
                            Training Your Bot
                        </motion.div>

                    </div>

                </motion.div>
            }


        </>
    )
}

export default TrainingCard