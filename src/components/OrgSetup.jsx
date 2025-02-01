import React, { useEffect, useState } from 'react'
import { AnimatedList } from '../shared/AnimatedList'
import { BlockRevealText } from '../animations/BlockRevealText'
import TrainingCard from '../shared/TrainingCard'
import nextLottie from '../assets/lottie/Forward.json'
import Lottie from 'lottie-react';
import useSliderStore from '../zustand/sliderStore';



function OrgSetup() {

    const sliderRef = useSliderStore((state) => state.sliderRef)

    const [isPopupOpen, setisPopupOpen] = useState(false);

    const [orgName, setOrgName] = useState('')
    const [orgEmail, setOrgEmail] = useState('')
    const [orgURL, setorgURL] = useState('')


    const [formError, setFormError] = useState('');

    const [isHoverOnBtn, setIsHoverOnBtn] = useState(false);

    const [isBackBtnHover, setIsBackBtnHover] = useState(false)

    function handlePopupOpen(e) {
        e.preventDefault();

        if (orgEmail && orgURL && orgName) {

            setisPopupOpen(true)

            setTimeout(() => {
                setisPopupOpen(false);
            }, [4000])

            setTimeout(() => {
                sliderRef.current.swiper.slideNext();
            }, 4300)
        }
        else {
            setFormError('All Fields are required');
        }
    }


    return (
        <div >

            <BlockRevealText children={"Organisation Setup"} />

            <div className='flex sm:flex-row flex-col justify-between'>
                <div className=' w-full sm:w-lg  p-4  '>

                    <form noValidate="" action="" className="sm:space-y-8">

                        <div className="space-y-4">
                            <div className="space-y-2 ">
                                <label htmlFor="companyname" className="block text-xs sm:text-sm text-left">Company Name</label>
                                <input
                                    onChange={(e) => setOrgName(e.target.value)}
                                    required type="text" name="companyname" id="companyname" placeholder="Name" className="  w-full px-3 py-2 border rounded-md border-purple-400 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-purple-400 focus:dark:border-purple-600" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="orgemail" className="block text-xs sm:text-sm text-left">Organizaton Email</label>
                                <input required
                                    onChange={(e) => setOrgEmail(e.target.value)} type="email" name="orgemail" id="orgemail" placeholder="@" className="w-full px-3  py-2  border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="orgurl" className="text-xs sm:text-sm"> Website URL  </label>
                                    {/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400 dark:text-gray-600">Forgot password?</a> */}
                                </div>
                                <input required
                                    onChange={(e) => setorgURL(e.target.value)} type="url" name="orgurl" id="orgurl" placeholder="https://" className="w-full px-3 py-2  border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600" />
                            </div>
                        </div>

                        <div className='flex  justify-between gap-2 mt-3 sm:mt-0 items-center w-full '  >

                            <div onClick={() => { sliderRef.current.swiper.slidePrev(); }}
                                onMouseOver={() => { setIsBackBtnHover(true); }} onMouseLeave={() => setIsBackBtnHover(false)}
                                className=' relative text-purple-400 border border-purple-400 px-1  sm:px-3 py-1 sm:py-2 cursor-pointer rounded-lg  rounded-tl-xl rounded-bl-xl'>

                                <svg onMouseOver={() => { setIsBackBtnHover(true); }} onMouseLeave={() => setIsBackBtnHover(false)}
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinejoin="round" d="M21 17.196V6.804c0-1.54-1.667-2.502-3-1.732l-3 1.732v10.392l3 1.732c1.333.77 3-.192 3-1.732ZM3 13.732c-1.333-.77-1.333-2.694 0-3.464l9-5.196c1.333-.77 3 .192 3 1.732v10.392c0 1.54-1.667 2.502-3 1.732z" />
                                </svg>

                                {isBackBtnHover &&

                                    <span className='absolute -top-7 text-sm px-2 -left-3 w-max border  rounded-lg'> Go Back </span>
                                }
                            </div>


                            <p className="text-right  ml-auto text-[9px] sm:text-sm font-medium text-pink-500">{formError} </p>

                            <div className='relative'>
                                {/* <button 
                                    type="submit" className="cursor-pointer  ml-auto block  w-s px-4 sm:px-8 pr-8 sm:pr-12 py-2 sm:py-3 font-semibold rounded-md bg-emerald-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Set Up
                                </button> */}
                                <button onClick={handlePopupOpen}
                                    onMouseOver={() => {
                                        setIsHoverOnBtn(true);
                                        setTimeout(() => {
                                            setIsHoverOnBtn(false)
                                        }, 1000)
                                    }} onMouseLeave={() => setIsHoverOnBtn(false)}
                                    type="button" className="cursor-pointer ml-auto block  w-s px-8 pr-12 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                                        Set Up


                                </button>
                                <Lottie animationData={nextLottie} className='h-10 w-10 bottom-1 right-2 absolute  ' loop={isHoverOnBtn} autoplay={isHoverOnBtn} />
                            </div>
                        </div>
                        <div className='relative'>
                            {/* <Lottie animationData={nextLottie} className='h-10 w-10 bottom-9 right-2 absolute ' loop={isHoverOnBtn} autoplay={isHoverOnBtn} /> */}

                        </div>
                    </form>
                </div>

                <div className=" hidden sm:block h-100 w-[2px] bg-gray-300"></div>
                <div className="  sm:hidden h-[1px] w-full bg-gray-300 mb-2"></div>

                {/* <div class="h-100 w-[2px] border-l-2 border-dotted border-gray-400"></div> */}


                <div className=' w-full  sm:w-sm sm:px-2 '>


                    <p className='font-medium sm:ml-2 text-purple-400'> Fetched Webpages </p>

                    {orgURL.match(/^https?:\/\/[\w\-]+(\.[\w\-])+(\.[\w\-])+[/#?]?.*$/) ?

                        <AnimatedList items={['store', 'support', 'brand', 'login', 'store-address', 'realmenow', 'legal/declaration-disclosures', 'bulk-order', 'legal/coins']} />

                        :
                        <div className='shadow-xl rounded-xl  px-1 py-2 sm:py-5 mx-auto w-4/5 min-w-66 sm:min-w-full sm:w-full border border-gray-400 mt-4 flex  justify-between'>
                            <div>
                                <p className='text-slate-400 ml-6'> Enter Company Website in Form</p>

                            </div>
                            <div className='mr-4'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.25" transform="matrix(-1 0 0 1 20 4)" />
                                        <path stroke="white" fill='#fff' strokeLinecap="round" strokeLinejoin="round" d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    }

                </div>


            </div>

            {isPopupOpen &&
                <TrainingCard isPopupOpen={isPopupOpen} />
            }
        </div>
    )
}

export default OrgSetup