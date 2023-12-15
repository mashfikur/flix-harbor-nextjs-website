import Image from "next/image";

const Content = async () => {
  let page = 5;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
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
    <div className="container mx-auto min-h-screen">
      <h3 className="text-center py-14 text-4xl font-semibold">
        Popular Movies
      </h3>

      <div className="grid grid-cols-4 gap-10 pb-12">
        {movies.map((movie, idx) => (
          <div
            key={idx}
            className=" h-[30rem]  rounded-xl  relative text-neutral  shadow-xl"
          >
            <div className="relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={500}
                height={400}
                alt="movie-poster"
                className="object-cover h-[30rem] rounded-xl"
              ></Image>
            </div>

            <div className="  text-white absolute bottom-0 w-full h-full bg-gradient-to-t from-black rounded-xl">
              <div className="absolute bottom-2 left-0">
                <h2 className="text-3xl  mb-6 mx-2 px-3 pt-2 rounded-xl font-semibold bg-amber-600 ">
                  {movie.original_title}
                </h2>
                <p className="font-semibold text-gray-400">
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

export default Content;
