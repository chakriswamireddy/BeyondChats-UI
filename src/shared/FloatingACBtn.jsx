import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ChatBar from './ChatBar';
import Lottie from 'lottie-react';
import botWaveLottie from '../assets/lottie/bot_wave_lottie.json'
import { useMediaQuery } from 'react-responsive';

function FloatingACBtn() {

  const [showChat, setShowChat] = useState(false)

  const isMobileScreen = useMediaQuery({ query: '(max-width: 640px)' });


  return (

    <>
      <AnimatePresence>


        {showChat &&
          <motion.div
            initial={{ scale: 0.1, }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              mass: 0.5,
            }}
            className="fixed bottom-22 right-6 sm:right-12   sm:h-md w-[90%] sm:w-sm origin-bottom-right"
          >

            <div className=' '>
              <div className='h-[10%] bg-gray-400 p-2 text-center rounded-br-lg rounded-bl-lg rounded-tr rounded-tl text-sm sm:text-md '>
              Chatbot not working as intended? <a href="#" className='text-violet-600 underline text-sm sm:text-md '>Share Feedback</a>


              </div>
              <div className='bg-gray-300 h-[90%]  rounded-tr-lg rounded-tl-lg '>

                <ChatBar isBot={true} />
                <ChatBar />
                <ChatBar isBot={true} />
                <ChatBar />

                <div className=' flex place-content-center '>

                  <Skeleton width={isMobileScreen ? 250 : 350} borderRadius={20} height={40} className='place-center  px-2 my-4' />
                </div>

              </div>


            </div>



          </motion.div>
        }
      </AnimatePresence>

      <div onClick={() => setShowChat(!showChat)} className="cursor-pointer rounded-full pointer w-16 h-16 fixed bottom-6 right-4 sm:right-6 shadow-2xl border-2 border-gray-100 overflow-hidden flex items-center justify-center">
        <Lottie
          animationData={botWaveLottie}
          className="absolute w-24 h-24"
          loop={!showChat}
          autoplay={!showChat}
        />
      </div>




    </>
  )
}

export default FloatingACBtn