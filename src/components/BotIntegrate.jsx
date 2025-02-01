import React, { useState } from 'react'

import FloatingACBtn from '../shared/FloatingACBtn'
import DropDown from '../shared/DropDown'

import { motion } from 'framer-motion'
import { Link } from 'react-router'

import mailSendLottie from '../assets/lottie/mail_send.json'
import Lottie from 'lottie-react'
import useSliderStore from '../zustand/sliderStore'




export default function BotIntegrate() {

    const sliderRef = useSliderStore((state) => state.sliderRef)

    const [copied, setCopied] = useState(false);
    
    const [chosenInstrucs, setChosenInstrucs] = useState(null)
    
    const [isSendBtnHover, setIsSendBtnHover] = useState(false)
    
    const codeSnippet = `
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large">
    <meta name="bingbot" content="index, follow">`


    const clsName = `relative text-[14px] sm:text-md px-4 sm:px-6 py-2 sm:py-3 rounded-xl  bg-slate-600 hover:bg-slate-100 text-white hover:text-slate-600
    font-medium hover:border hover:border-slate-600
    before:absolute before:bottom-[-5px] before:left-1/2 before:-translate-x-1/2 before:w-[100%] before:h-1 
    before:content-[''] before:blur-sm before:bg-[linear-gradient(90deg,red,orange,yellow,green,blue,indigo,violet)]`
    
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(codeSnippet);
            setCopied(true);
            setTimeout(() => setCopied(false), 8000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };




    return (
        <div className='w-full h-full  bg-slate-100 flex flex-col gap-4 justify-center items-center'>

           

            <DropDown chosenInstrucs={chosenInstrucs} setChosenInstrucs={setChosenInstrucs} />

            {chosenInstrucs == 'mail' &&

                <motion.div
                    initial={{ scaleY: 0.7 }}
                    animate={{ scaleY: 1 }}
                    transition={{

                        type: "spring",
                        stiffness: 80,  
                        damping: 20,  
                    }}
                    className='w-[90%] sm:w-sm h-md  origin-center rounded-tr-xl rounded-tl-xl'

                >

                    <div className=' w-full h-8 bg-slate-300 pt-1 pl-4  rounded-tr-xl rounded-tl-xl ' > Send Mail</div>
                    <div className=' bg-slate-800 pt-2 '>
                        {/* <p className='text-sm pl-4 text-white font-medium'>   Copy this code & paste it on your Website Head Section</p> */}
                        <div>
                            <div className=" relative space-y-2 pb-2 flex flex-col sm:flex-row items-start gap-2 border- border-pink-800">
                                {/* <label htmlFor="email" className="block text-sm text-left">Email address</label> */}
                                <input type="email" name="email" id="email" placeholder="Client Developer Email " className=" mx-2 w-[90%] sm:w-full px-2 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 " />
                                <button onClick={() => setIsSendBtnHover(!isSendBtnHover)}
                                    type="button" className="cursor-pointer ml-auto block  mr-5 sm:mr-4  px-8 pr-16 py-2 font-semibold rounded-md bg-violet-600 text-gray-50">
                                       {isSendBtnHover? 'Sent' : 'Send'} 


                                </button>
                                <div className='absolute bottom-4 sm:bottom-4 right-6 border- top:0 z-5 sm:bottom-0'>
                                {isSendBtnHover ?
                                    <Lottie
                                        animationData={mailSendLottie}
                                        className="  w-10 h-10"
                                        loop={false}
                                        autoplay={true}
                                    />
                                    :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 430 430"><g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="14.8" stroke-width="12"><path d="m150.8 131.3 105.5 106.1c11.4 11.5 30 11.5 41.5 0l105.7-106" /><path d="M150.8 131.3v167.3h252.7V131.4z" /><path d="m150.8 282 66.7-57.8c4.7-4.1 9.9-7.6 15.3-10.5m88.7-.1c5.6 3 10.8 6.6 15.7 10.8l66.3 56.9M107.4 131.4H26.6m80.8 41.8H26.6m81 41.2H26.8m80.8 41.8H26.8m80.6 41.2H26.6" /></g></svg>
                                    }
                                    </div>
                            </div>
                            <div className='flex gap-2 ml-2 pb-2'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">


                                    <path fill="white" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c1.086.692 2.493 1.075 4.026 1.176A3 3 0 0 1 9 17v-.042c-1.318-.114-2.468-.457-3.327-1.005C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1H9.17c.131-.373.335-.711.593-1zM10 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1m-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z" />
                                   
                                </svg>
                                <span className='text-slate-400 text-sm' > You can send the instructions to your developer </span>
                            </div>
                        </div>
                    </div>


                </motion.div>

            }
            {chosenInstrucs === 'show now' &&

                <motion.div
                    initial={{ scaleY: 0.7 }}
                    animate={{ scaleY: 1 }}
                    transition={{

                        type: "spring",
                        stiffness: 82, 
                        damping: 21,  
                        mass: 0.5,
                    }}
                    className=' w-[90%] sm:w-sm h-md  origin-center rounded-tr-xl rounded-tl-xl'

                >

                    <div className=' w-full h-8 bg-slate-300 pt-1 pl-4  rounded-tr-xl rounded-tl-xl ' > Instructions</div>
                    <div className=' bg-slate-800 pt-2 '>
                        <p className='text-sm pl-4 text-white font-medium'>   Copy this code & paste it on your Website Head Section</p>

                        <div className='bg-slate-300 relative'>
                            <pre className="overflow-auto p-4 bg-gray-800  text-sm text-slate-300">
                                <code>{codeSnippet}</code>
                            </pre>
                            <button
                                onClick={copyToClipboard}
                                className="absolute top-0 right-4 flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm"
                            >
                                {copied ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M9.116 17q-.691 0-1.153-.462T7.5 15.385V4.615q0-.69.463-1.153T9.116 3h7.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T16.884 17zm-3 3q-.691 0-1.153-.462T4.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h8.77v1z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M9.116 17q-.691 0-1.153-.462T7.5 15.385V4.615q0-.69.463-1.153T9.116 3h7.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T16.884 17zm0-1h7.769q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T16.884 4H9.116q-.231 0-.424.192t-.192.423v10.77q0 .23.192.423t.423.192m-3 4q-.69 0-1.153-.462T4.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h8.77v1zM8.5 16V4z" />
                                    </svg>
                                }
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    </div>


                </motion.div>

            }

            <div className='flex gap-4 justify-between    w-[90%] sm:w-max items-center '>



                <div className='relative'>
                    <button className="relative  text-[14px] sm:text-md px-3  sm:px-6 py-2 sm:py-3 rounded-xl z-5 hover:bg-slate-600 bg-slate-100 border hover:text-white text-slate-600 font-medium"  > 
                          <Link target='_blank' rel='noopener noreferrer' to='/client-website'>  Test Bot    </Link>  </button>
                </div>

                <div className='relative'>
                    <button className={clsName}>  <Link to='/success-integration'> Test Integration Button  </Link>   </button>
                </div>
            </div>
          
            <div onClick={() => { sliderRef.current.swiper.slidePrev(); }}
                className='absolute  bottom-5 left-5 text-purple-400 border border-purple-400 flex gap-2 items-center px-3 py-2 cursor-pointer rounded-lg  rounded-tl-xl rounded-bl-xl'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinejoin="round" d="M21 17.196V6.804c0-1.54-1.667-2.502-3-1.732l-3 1.732v10.392l3 1.732c1.333.77 3-.192 3-1.732ZM3 13.732c-1.333-.77-1.333-2.694 0-3.464l9-5.196c1.333-.77 3 .192 3 1.732v10.392c0 1.54-1.667 2.502-3 1.732z" />
                </svg>
                <button className='cursor-pointer '> Go Back
                </button>
            </div>
        </div>
    )
}
