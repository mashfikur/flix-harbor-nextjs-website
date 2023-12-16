import Image from "next/image";

const Banner = async () => {
  // const res = await fetch('')

  const imgUrl = `https://image.tmdb.org/t/p/original/thLAoL6VeZGmCyDpCOeoxLvA8yS.jpg`;
  return (
    <div className="mt-12 container mx-auto minhsc">
      <div
        className={`rounded-xl min-h-[70vh] main-bg  `}
        style={{ background: `url(${imgUrl})`,backgroundSize:"cover",backgroundPosition:"initial" }}
      >
        <div className=" min-h-[70vh] flex p-6 items-center rounded-xl bg-gradient-to-t from-black ">
          <h3 className="text-6xl font-bold leading-normal">
            Explore All Your Favourite <br></br> Movies & Shows
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
