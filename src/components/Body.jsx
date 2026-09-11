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
      (jewel) => jewel.section === sectionName,
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
      jewel.title.toLowerCase().includes(searchText.toLowerCase()),
    );

    setListOfJewels(filteredJewels);
  };

  if (ListOfJewels.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <h1>Saaz Jewellery</h1>

      <div className="filter">
        {/* Search */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search jewellery..."
          />

          <button onClick={searchJewels}>Search</button>
        </div>

        {/* All */}
        <button className="btn-filter" onClick={showAll}>
          All
        </button>

        {/* Bestseller */}
        <button
          className="btn-filter"
          onClick={() => filterJewels("BestSellers")}
        >
          Bestseller
        </button>

        {/* New Arrival */}
        <button
          className="btn-filter"
          onClick={() => filterJewels("NewArrival")}
        >
          New Arrival
        </button>

        {/* Sapphire */}
        <button className="btn-filter" onClick={() => filterJewels("Sapphire")}>
          Sapphire Collection
        </button>

        {/* Gold */}
        <button className="btn-filter" onClick={() => filterJewels("Gold")}>
          Gold Collection
        </button>
      </div>

      <div className="container">
        {ListOfJewels.map((jewel) => (
          <Link 
          key={jewel.id} 
          to= {"/Product/" + jewel.id}
          >
          < JewelCard  jewelData={jewel} />
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
