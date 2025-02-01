import React, { useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const ChatBar = ({ isBot }) => {

  const counterRef = useRef(null);

  useEffect(() => {
    if (!counterRef.current || counterRef.current == null) {
      counterRef.current = 1
    }
    else (
      counterRef.current += 1
    )

    // console.log(counterRef.current)
  }, [])

  const isMobileScreen = useMediaQuery({ query: '(max-width: 640px)' });


  return (

    <div className={`flex gap-2 mt-2 mr-3 items-center ${isBot ? 'justify-start' : 'justify-end'} `}>

      {isBot &&
        <Skeleton width={40} height={40} borderRadius='100%' className='ml-2' />
      }

      <Skeleton width={isBot ? ( isMobileScreen ? 170 :  200) : isMobileScreen ? 200 : 220} height={ isMobileScreen ? 40 :  50 + (counterRef.current * 5)} borderRadius={10} />
    </div>

  )
}

export default ChatBar