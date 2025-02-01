import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import React, { useRef } from 'react'
import RegisterPage from "../components/RegisterPage";
import OrgSetup from "../components/OrgSetup";
import BotIntegrate from "../components/BotIntegrate";

function Slider() {

  const sliderRef = useRef(null);

  return (
    <Swiper
      modules={[Navigation]}

      navigation={false}
      loop={true}
      speed={800}  
      effect="slide"
      className=" round w-5xl p-1 rounded-2xl shadow-xl bg-gray-50"
      allowTouchMove={false}
      ref={sliderRef}
    >
      <SwiperSlide key={"num"}>

        <RegisterPage sliderRef={sliderRef} />
      </SwiperSlide>
      <SwiperSlide key={"num2"} className="rounded-2xl shadow-xl p-6">
        <OrgSetup sliderRef={sliderRef} />
      </SwiperSlide>
      <SwiperSlide key={"num3"}>
        <BotIntegrate sliderRef={sliderRef} />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Slider;



// import React, { useRef } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';


// const MyCarousel = () => {
//     const [emblaRef] = useEmblaCarousel()


//   const scrollPrev = () => {
//     // Use scrollPrev instead of slidePrev
//     emblaRef.current.scrollPrev();
//   };

//   const scrollNext = () => {
//     // Use scrollNext instead of slideNext
//     emblaRef.current.scrollNext();
//   };

//   return (
//     <div className="embla" ref={emblaRef}>
//     <div className="embla__container">
//       <div className="embla__slide">Slide 1</div>
//       <div className="embla__slide">Slide 2</div>
//       <div className="embla__slide">Slide 3</div>
//     </div>
//   </div>
//   );
// };

// export default MyCarousel;

