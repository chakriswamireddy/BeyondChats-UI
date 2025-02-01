import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import FooterSection from '../shared/FooterSection'
import {motion} from 'framer-motion'

function SuccessIntegration() {
    const { width, height } = useWindowSize()

    const [showConfetti, setShowConfetti] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)
  
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
                initial={{y:-500}}
                animate={{y: 0}}
                transition={{

                    type: "spring",
                    stiffness: 80,  
                    damping: 20,  
                    duration:1000,
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