import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container border-b-2 border-amber-600 mx-auto py-8 flex justify-between items-center">
        <div className="">
          <h3 className="text-5xl font-bold"> Flix Harbor</h3>
        </div>
        <div className=" text-end">
          <ul className="flex items-center gap-10 font-semibold">
            <li>Home</li>
            <li>Movie</li>
            <li>TV Show</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
