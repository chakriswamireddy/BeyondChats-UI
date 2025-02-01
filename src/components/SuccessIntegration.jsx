import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import FooterSection from '../shared/FooterSection'
import { motion } from 'framer-motion'
import useSliderStore from '../zustand/sliderStore'
import { Link, useNavigate } from 'react-router'
import { useMediaQuery } from 'react-responsive'

function SuccessIntegration() {
    const { width, height } = useWindowSize()

    const [showConfetti, setShowConfetti] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    const sliderRef = useSliderStore((state) => state.sliderRef)
    
    const isMobileScreen = useMediaQuery({ query: '(max-width: 640px)' });


    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate('/');
        setTimeout(()=> {
            sliderRef.current.swiper.slidePrev(); 
        },100)
    }



    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => {
                setShowConfetti(false)
            }, 2500)
        }, 3500)
    }, [])

    return (
        <div className='h-screen flex flex-col justify-between bg-gray-100 '>

            <div onClick={handleBackClick}
                className='absolute  top-5 left-5 text-purple-400 border border-purple-400 flex gap-2 items-center px-3 py-2 cursor-pointer rounded-lg  rounded-tl-xl rounded-bl-xl'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinejoin="round" d="M21 17.196V6.804c0-1.54-1.667-2.502-3-1.732l-3 1.732v10.392l3 1.732c1.333.77 3-.192 3-1.732ZM3 13.732c-1.333-.77-1.333-2.694 0-3.464l9-5.196c1.333-.77 3 .192 3 1.732v10.392c0 1.54-1.667 2.502-3 1.732z" />
                </svg>

                {!isMobileScreen &&
                <button className='cursor-pointer '> Go Back
                </button>
                }
            </div>

            {showConfetti &&

                <Confetti
                    width={width}
                    height={height}
                    confettiSource={{ x: width / 2, y: 0, }}
                    initialVelocityX={10}
                    initialVelocityY={10}
                    className={`absolute transition-opacity duration-1000 ease-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}

                />
            }

            <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{

                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    duration: 1000,
                }}
            >
                <section className="dark:bg-gray-100 dark:text-gray-800 ">
                    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                        <h1 className="text-4xl font-bold leading-none sm:text-5xl"> Chat Bot Integration to your Website is
                            <span className="dark:text-purple-500"> Successful</span>
                        </h1>
                        <p className="px-8 mt-8 mb-12 text-xl italic"> Tailor your chatbot to your needs with ease </p>
                        <div className="flex flex-wrap  sm:w-max justify-center">
                            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-purple-500 dark:text-gray-50">Explore Admin Panel</button>
                            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Start Tallking to your Chatbot</button>
                            {/* <button className="px-4 py-2 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Failed</button> */}

                        </div>
                    </div>
                </section>

            </motion.div>


            <FooterSection />
        </div>
    )
}

export default SuccessIntegration