import React, { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import "./Dropdown.css";

function Dropdown({ categoriesItems }) {
  const [dropdown, setDropdown] = useState(false);
  const [selectedCategori, setSelectedCategori] = useState(categoriesItems[0]);

  return (
    <>
      <div
        className="categories w-full max-w-[22%] relative "
        onClick={() => setDropdown(!dropdown)}
      >
        {selectedCategori}
        <div className="arrow-icon absolute top-1.5 left-[100px]">
          {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </div>
        {dropdown === true && (
          <div className="dropdown-container w-[200px] absolute -left4  top-[100%] shadow-2xl bg-[#cc] py-4 px-1 max-h-[300px] overflow-y-scroll overflow-x-hidden ">
            <div className="search-box">
              <input
                type="search"
                placeholder="search here.."
                className="border-none outline-none h-8 pl-4"
              />
            </div>

            <ul className="mt-4 ml-3">
              {categoriesItems.map((val, index) => {
                return (
                  <li key={index} onClick={() => setSelectedCategori(val)}>
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
