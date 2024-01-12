"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import "./ContentStyles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ContentSlider({ movies, section = "movie" }) {
  return (
    <>
      <div className="border-2">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="swiper-new"
          navigation={true}
        >
          {movies &&
            movies.map((movie, idx) => (
              <SwiperSlide key={idx} className="">
                <div className=" h-full border-2 rounded-xl  relative text-neutral  shadow-xl">
                  <div className="h-full w-full">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      width={500}
                      height={400}
                      alt="movie-poster"
                      className="object-cover h-[30rem] rounded-xl "
                    ></Image>
                  </div>

                  {/* <div className="  text-white absolute bottom-0 w-full opacity-90 h-[50%] bg-gradient-to-t from-black via-black  rounded-xl">
                    <div className="absolute bottom-2 left-0 px-2">
                      <h2 className="text-3xl  h-14 font-semibold  mb-6  ">
                        {section === "movie"
                          ? movie.original_title
                          : movie.original_name}
                      </h2>
                      <p className="font-semibold h-20 text-gray-400">
                        {" "}
                        {movie.overview.split("").slice(0, 100)}...{" "}
                      </p>
                    </div>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
