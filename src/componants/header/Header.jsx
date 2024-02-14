import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Dropdown from "../SelectDropdown/Dropdown";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

function Header() {
  const [categories, setCategories] = useState([
    "All categories",
    "Dairy Milk",
    "bread & fruit",
    "fresh food",
    "vegetable",
    "baking material",
    "fast food",
    "pet food & toy",
    "fresh food",
    "clothing & beauty",
    "Wines & Drink",
  ]);
  // getCountry("https://countriesnow.space/api/v0.1/countries/");
  const countryList = [];
  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      await axios
        .get("https://countriesnow.space/api/v0.1/countries/")
        .then((res) => {
          if (res !== null) {
            res.data.data.map((val, ind) => {
              countryList.push(val.country);
              //   console.log(val.country);
            });
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const [country, setCountry] = useState([
    "afganistan",
    "pakistan",
    "india",
    "africa",
  ]);
  return (
    <>
      <header className=" flex justify-betwee gap-7  py-4 m-auto w-full ">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-search flex items-center box-border  gap- w-[40%] h-[45px] border border-green-200 px- bg-[#cc]">
          <Dropdown categoriesItems={categories} />
          <span className="mx-4">|</span>
          <div className="inp-box w-[85%] flex items-center z-20">
            <input
              type="search"
              className="w-full border-none outline-none p- h-[40px] "
              placeholder="search items here..."
            />
            <div className="search-icon text-2xl text-[#ccc]">
              <IoSearchOutline />
            </div>
          </div>
        </div>
        <div className="location shadow-2xl w-[200px] max-h-[45px]  gap-4  ">
          {/* <FaLocationDot className="text-green-300" /> */}
          {/* <Dropdown categoriesItems={country} /> */}
          {/* <Dropdown categoriesItems={countryList} /> */}
          {/* <Dropdown categoriesItems={countryList} /> */}
          {/* <Dropdown categoriesItems={countryList} /> */}
          <Dropdown categoriesItems={countryList} />
        </div>
      </header>
    </>
  );
}

export default Header;
