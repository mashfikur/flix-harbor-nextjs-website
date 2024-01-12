import Popular from "./Popular/Popular";

const Content = async () => {
  return (
    <div className="container mx-auto min-h-screen">
      {/* movies section */}
      <h3 className="text-start  my-14 text-5xl   font-light">
        Popular Movies
      </h3>

      <Popular section="movie"></Popular>

      {/* tv section */}
      <h3 className="text-start  my-14 text-5xl   font-light">Popular Tv</h3>

      <Popular section="tv"></Popular>
    </div>
  );
};

export default Content;
