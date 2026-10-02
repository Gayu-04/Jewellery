
import JewelCard from "./JewelCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfJewels, setListOfJewels] = useState([]);
  const [allJewels, setAllJewels] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://bytefork.tools/m/msxch8ah");

    const json = await data.json();

    setListOfJewels(json); 
    setAllJewels(json);
  };

  const filterJewels = (sectionName) => {
    const filteredList = allJewels.filter(
      (jewel) => jewel.section === sectionName
    );

    setListOfJewels(filteredList);
    setSearchText("");
  };

  const showAll = () => {
    setListOfJewels(allJewels);
    setSearchText("");
  };

  const searchJewels = () => {
    const filteredJewels = allJewels.filter((jewel) =>
      jewel.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setListOfJewels(filteredJewels);
  };

  if (ListOfJewels.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-[#fffaf0] px-6 py-8">

      {/* Heading */}
      <h1 className="mb-8 text-center text-4xl font-bold text-yellow-700">
        Saaz Jewellery
      </h1>

      {/* Filter Section */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">

        {/* Search */}
        <div className="flex">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search jewellery..."
            className="w-64 rounded-l-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
          />

          <button
            onClick={searchJewels}
            className="rounded-r-lg bg-yellow-600 px-5 py-2 font-medium text-white transition hover:bg-yellow-700"
          >
            Search
          </button>
        </div>

        {/* All */}
        <button
          className="rounded-lg border border-yellow-600 bg-white px-4 py-2 font-medium text-yellow-700 transition hover:bg-yellow-600 hover:text-white"
          onClick={showAll}
        >
          All
        </button>

        {/* Bestseller */}
        <button
          className="rounded-lg border border-yellow-600 bg-white px-4 py-2 font-medium text-yellow-700 transition hover:bg-yellow-600 hover:text-white"
          onClick={() => filterJewels("BestSellers")}
        >
          Bestseller
        </button>

        {/* New Arrival */}
        <button
          className="rounded-lg border border-yellow-600 bg-white px-4 py-2 font-medium text-yellow-700 transition hover:bg-yellow-600 hover:text-white"
          onClick={() => filterJewels("NewArrival")}
        >
          New Arrival
        </button>

        {/* Sapphire */}
        <button
          className="rounded-lg border border-yellow-600 bg-white px-4 py-2 font-medium text-yellow-700 transition hover:bg-yellow-600 hover:text-white"
          onClick={() => filterJewels("Sapphire")}
        >
          Sapphire Collection
        </button>

        {/* Gold */}
        <button
          className="rounded-lg border border-yellow-600 bg-white px-4 py-2 font-medium text-yellow-700 transition hover:bg-yellow-600 hover:text-white"
          onClick={() => filterJewels("Gold")}
        >
          Gold Collection
        </button>
      </div>

      {/* Jewellery Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ListOfJewels.map((jewel) => (
          <Link
            key={jewel.id}
            to={"/product/" + jewel.id}
            className="transition-transform duration-200 hover:scale-[1.02]"
          >
            <JewelCard jewelData={jewel} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

  