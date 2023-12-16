"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const imgUrl = `https://image.tmdb.org/t/p/original/thLAoL6VeZGmCyDpCOeoxLvA8yS.jpg`;
  const img2 =
    "https://image.tmdb.org/t/p/original/dd7EgfOEKPqQxWtBfAvjYZahbSc.jpg";

  const img3 =
    "https://image.tmdb.org/t/p/original//kteLc9xtCOOjwvVNHjxNqJxu0OA.jpg";
  const img4 =
    "https://image.tmdb.org/t/p/original/7Ns6tO3aYjppI5bFhyYZurOYGBT.jpg";
  return (
    <div className="container mx-auto">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-80 mx-auto"
        loop={true}
      >
        <SwiperSlide>
          {" "}
          <Image
            alt="slider-image"
            width={500}
            height={400}
            src={imgUrl}
            className=""
          ></Image>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="slider-image"
            width={500}
            height={400}
            src={img2}
            className=""
          ></Image>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="slider-image"
            width={500}
            height={400}
            src={img3}
            className=""
          ></Image>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="slider-image"
            width={500}
            height={400}
            src={img4}
            className=""
          ></Image>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
