import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


export const Section = () => {
  const bg = {
    background: "url('/bg.png') ",
  };
  return (
    <div>
    <div style={bg}>
      <div className="mx-auto ">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="swiper-container"
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <br />
        </Swiper>
      </div>
    </div>
    </div>
  );
};

function Slide() {
  return (
    
      <div className="grid">
        <div className="container content-center place-self-center">
          <h1 className="font-bold text-white text-4xl text-center pt-52 pb-60">
            <p>Selamat Datang di</p> Pejabat Pengelola Informasi dan Dokumentasi
            ( PPID ) Kementerian Badan Usaha Milik Negara Republik Indonesia{" "}
            <br />
            <br />
            <button
              className=" text-lg bg-transparent hover:bg-gray-300 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
              to="/"
            >
              Selengkapnya
            </button>
          </h1>
        </div>
      </div>
  );
}
