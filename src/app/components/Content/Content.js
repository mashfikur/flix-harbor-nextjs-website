import Popular from "./Movie/Movie";

const Content = async () => {
  return (
    <div className="container mx-auto min-h-screen">
      {/* movies section */}
      <h3 className="text-center py-14 text-4xl font-semibold">
        Popular Movies
      </h3>
      <Popular section="movie"></Popular>

      {/* tv section */}
      <h3 className="text-center py-14 text-4xl font-semibold">Popular Tv</h3>
      <Popular section="tv"></Popular>
    </div>
  );
};

export default Content;
