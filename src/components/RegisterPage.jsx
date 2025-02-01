import React, { useEffect, useState } from 'react'

import { useRef } from 'react';

import registerBoardIMG from '../assets/images/register_board.jpg'


import { motion } from "framer-motion";

import regUserLottie from '../assets/lottie/register_wave.json'
import Lottie from 'lottie-react';
import DecryptedText from '../animations/DecryptedText/DecryptedText';
import useSliderStore from '../zustand/sliderStore';


function RegisterPage() {
	const containerRef = useRef(null);

	const sliderRef = useSliderStore((state) => state.sliderRef)

	const [isHoverOnBtn, setIsHoverOnBtn] = useState(false);
	const [isPwdFocused, setIsPwdFocused] = useState(false);

	const [username, setUsername] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [userPwd, setUserPwd] = useState('')

	const [formError, setFormError] = useState('');

	function handleRegister(e) {
		e.preventDefault();

		console.log(username)

		if (userPwd && userEmail && username) {
			sliderRef.current.swiper.slideNext();
		}
		else {
			setFormError('All Fields are required');

			setTimeout(() => {
				setisPopupOpen(false);
			}, [4000])
		}
	}


	return (

		<div className='flex gap-0 flex-col sm:flex-row items-center justify-items-center rounded-2xl shadow-xl   w-full '>


			<motion.div
				initial={{ x: "-10%", opacity: 0, }}
				animate={{ x: 0, opacity: 1, }}
				// exit={{ x: "50%", opacity: 0,  }}
				transition={{ duration: 1, ease: "easeInOut" }}
				style={{
					// height: 100,
					// backgroundColor: "blue",
				}}
				className='hidden md:block relative '
			>

				<p className="text-4xl ml-10 tracking-wider italic mb-4  font-extrabold" style={{
					WebkitTextStroke: '2px  #A78BFA  ',
					WebkitTextFillColor: 'transparent',
					textStroke: '1px gray',
					color: 'transparent'
				}}>Start Your Journey Here! </p>

				<img src={registerBoardIMG} className=' relative rounded-xl w-xl' />
				{/* <img src={clI} className='h-6 w-6 absolute ' alt=""  style={{position:'absolute', top:'112px', left:'170px', transform:'rotate(-10deg)'}}/> */}
			</motion.div>


			<motion.div
				initial={{ x: "50%", opacity: 0, }}
				animate={{ x: 0, opacity: 1, scaleX: 1 }}
				exit={{ x: "-100%", opacity: 0, }}
				transition={{ duration: 1, ease: "easeInOut" }}
				style={{
					// height: 100,
					// backgroundColor: "blue",
				}}

				className="   w-full max-w-md p-4   sm:p-8 sm:pr-8 bg-gray-50 text-gray-800 "
			>
				<div  >

					<h2 className="mb-1 sm:mb-3 text-lg sm:text-3xl font-semibold text-center">Let's Explore</h2>
					<p className="text-sm text-center text-gray-600">Existing user!
						<a href="#" rel="noopener noreferrer" className=" pl-1 focus:underline hover:underline">Sign up here</a>
					</p>
					<div className="my-3 sm:my-6 space-y-4">
						<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400  focus:ring-violet-400 ">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
								<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
							</svg>
							<p>Login with Google</p>
						</button>
					</div>
					<div className="flex items-center w-full my-4 relative">
						<hr className="w-full text-gray-600 " />
						<p className="px-3 text-gray-600">OR</p>
						<hr className="w-full text-gray-600" />
					</div>
					<form noValidate="" action="" className="space-y-8">
						<div className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="name" className="block text-sm text-left">Name</label>
								<input type="text" name="name" onChange={(e) => setUsername(e.target.value)} id="name" placeholder="john" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800 focus:border-violet-600" />
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="block text-sm text-left">Email address</label>
								<input type="email" name="email" id="email" onChange={(e) => setUserEmail(e.target.value)}
									placeholder="john@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-90 text-gray-800 focus:border-violet-600" />
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<label htmlFor="password" className="text-sm">

										<DecryptedText text="Password" isPwdFocused={isPwdFocused} />
										{/* Password */}

									</label>
									{/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400 dark:text-gray-600">Forgot password?</a> */}
								</div>
								<input onChange={(e) => setUserPwd(e.target.value)}
									onFocus={() => setIsPwdFocused(true)} onBlur={() => setIsPwdFocused(false)}
									type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
							</div>
						</div>

						<div className='flex justify-between'>


							<p className="text-right ml-2 w-max text-[9px] sm:text-sm font-medium text-pink-500">{formError} </p>


							<button onClick={handleRegister}
								onMouseOver={() => {
									setIsHoverOnBtn(true);
									setTimeout(() => {
										setIsHoverOnBtn(false)
									}, 1500)
								}} onMouseLeave={() => setIsHoverOnBtn(false)}
								type="button" className="cursor-pointer ml-auto block  w-s px-8 pr-12 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Sign Up


							</button>
						</div>
						<div className='relative'>
							{isHoverOnBtn ?

								<motion.div
									initial={{ x: 2, translateX: 0 }}
									animate={{ x: -20, translateX: 12 }}
									transition={{
										type: "spring",
										stiffness: 80,
										damping: 20,
										mass: 0.5,
									}}
								>
									<Lottie animationData={regUserLottie} className='h-10 w-6 bottom-9 right-2 absolute ' loop={isHoverOnBtn} autoplay={isHoverOnBtn} />
								</motion.div>
								:
								<Lottie animationData={regUserLottie} className='h-10 w-6 bottom-9 right-4 absolute ' loop={false} autoplay={false} />
							}
						</div>
					</form>
				</div>
			</motion.div>




		</div>


	)
}

export default RegisterPage