import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import one from "../../assets/sliderImg/slider1.jpg";
import two from "../../assets/sliderImg/slider2.jpg";
import three from "../../assets/sliderImg/slider3.jpg";
import four from "../../assets/sliderImg/slider4.jpg";

const Slider = () => {
  return (
    <>
      <div className="slider_wrapper">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={1}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={one} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={two} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={three} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={four} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-5 bg-[#F7F7F9]">
        <div className="max-w-4xl text-center mx-auto space-y-3 p-4">
          <h2 className="text-2xl font-oswald">Crafting Your Unique Journey</h2>
          <p className="italic">
            RoamCraft: Discover Hidden Gems. Unveil off-the-beaten-path
            destinations. Craft unique travel experiences tailored to your
            taste. Escape the ordinary and immerse yourself in unforgettable
            adventures. Start exploring with RoamCraft today.
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;
