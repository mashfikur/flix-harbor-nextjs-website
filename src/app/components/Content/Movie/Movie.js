import Image from "next/image";

const Popular = async ({ section = "tv" }) => {
  let page = 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/${section}/popular?language=en-US&page=${page}`,
    {
      cache: "force-cache",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      },
      next: {
        revalidate: 2,
      },
    }
  );

  const data = await res.json();

  const movies = data.results;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-12">
        {movies.map((movie, idx) => (
          <div
            key={idx}
            className=" h-[35rem]  rounded-xl  relative text-neutral  shadow-xl"
          >
            <div className="">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={500}
                height={400}
                alt="movie-poster"
                className="object-cover h-[35rem] rounded-xl"
              ></Image>
            </div>

            <div className="  text-white absolute bottom-0 w-full opacity-90 h-[50%] bg-gradient-to-t from-black via-black  rounded-xl">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
