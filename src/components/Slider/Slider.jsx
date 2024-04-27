import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="slider_wrapper">
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          slidesPerView={1}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div
              className="hero h-[550px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/FmQd7qR/slider1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                  className="max-w-lg"
                >
                  <h1 className="mb-5 text-4xl font-bold">
                    Discover Your World
                  </h1>
                  <p className="mb-5">
                    Embark on a journey of discovery with our immersive travel
                    experiences. Uncover hidden gems and create unforgettable
                    memories. Start exploring today!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero h-[550px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/QbtdzDb/slider2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-4xl font-bold">
                    Explore Beyond Boundaries
                  </h1>
                  <p className="mb-5">
                    Break free from limits. Embark on a journey to new horizons.
                    Explore diverse cultures, breathtaking landscapes, and
                    unforgettable experiences. Adventure awaits!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero h-[550px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/p0MwdTd/slider3.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-4xl font-bold">
                    Unveil Your Next Adventure
                  </h1>
                  <p className="mb-5">
                    Dive into endless possibilities. Discover hidden treasures
                    and thrilling escapades. Your next adventure awaits.
                    Explore, experience, and create unforgettable memories with
                    us.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero h-[550px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/NCgcFW1/slider4.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-4xl font-bold">
                    Unveiling World Wonders
                  </h1>
                  <p className="mb-5">
                    Unveil the world`s wonders with us. Dive into rich cultures,
                    stunning landscapes, and captivating history. Let`s embark
                    on a journey to remember together.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-5 bg-[#F7F7F9]">
        <div className="max-w-4xl text-center mx-auto space-y-4 p-4">
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
