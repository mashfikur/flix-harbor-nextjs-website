"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";
import { duration } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//eslint-disable-next-line
export default function Slider() {
  const imgUrl = `https://image.tmdb.org/t/p/original/thLAoL6VeZGmCyDpCOeoxLvA8yS.jpg`;

  const { data: currents, isPending } = useQuery({
    queryKey: ["currents"],
    queryFn: async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWMzMTkyNjU0NGQzMmNiNjljZDk2MDY3MDk3NTQ5ZSIsInN1YiI6IjY1N2FlZGYxZWM4YTQzMDBlMDliNWUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2kr6J-oqi3Wl93bR0RpCcErIuA9S-USv47_XDjgZPI",
          },
        }
      );

      return res.data;
    },
  });

  // console.log(currents);

  return (
    <div className="container mx-auto my-36 flex items-center ">
      <div className="flex-1">
        <h3 className="text-7xl text-amber-600 font-semibold">
          Pick Your Content Of The Day !
        </h3>
      </div>
      <div className="flex-1">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper w-80 mx-auto"
          loop={true}
          autoplay={{ pauseOnMouseEnter: true, delay: 4000 }}
        >
          {currents &&
            currents?.results.map((moive, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  alt="slider-image"
                  width={500}
                  height={400}
                  src={`https://image.tmdb.org/t/p/original${moive.poster_path}`}
                  className="hover:scale-110 duration-300 hover:cursor-pointer"
                ></Image>{" "}
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex justify-center mt-10">
          <button class="btn z-[100]  right-[30%] bottom-2 btn-warning rounded-full text-lg px-12 flex items-center justify-center custom-shadow duration-500">
            Details
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
