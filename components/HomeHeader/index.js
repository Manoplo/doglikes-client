import SearchIcon from "../../icons/Search";

export const HomeHeader = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold ml-4 md:text-9xl">dogLikes🐶</h1>

      <p className="mt-6 text-lg font-mono ml-4">
        A minimal social network for dog lovers! Send dogs🐕, collect likes💖!
      </p>
      <div className="w-2/4 flex mt-5 sm:w-4/4">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search dogs by name, breed..."
          className="w-full ml-3 border-b-2 border-gray focus:outline-none focus:border-b-2 focus:border-black flex-grow"
        />
      </div>
    </div>
  );
};
