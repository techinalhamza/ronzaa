import { Button } from "@mui/material";
import { BiCategory } from "react-icons/bi";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import "./Nav.css";
import { NavLink } from "react-bootstrap";
import { FaHeadset } from "react-icons/fa";
import MegaMenu from "../mega-menu/MegeMenu";
import { categoryData } from "../categoryData";
import { useState } from "react";

function Nav() {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  return (
    <>
      <div className="nav-container container-fluid relative">
        <div className="row justify-content-start relative">
          <div className="col-3 category-btn border p-0 flex items-center relative">
            <Button
              className=""
              onClick={() => setCategoryDropdown(!categoryDropdown)}
            >
              <BiCategory />
              <span className="">browse all categories</span>

              {categoryDropdown ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropright />
              )}
            </Button>
            {categoryDropdown === true && (
              <div className="category-dropdown absolute top-[100%] w-full shadow-md  bg-[#FFFFFF] z-50 overflow-hidden">
                <div className="row gap- border border-[#3BB77D]">
                  {categoryData.map((val) => {
                    return (
                      <>
                        <div className="col-6 flex gap-2 my-4 border py-2 ">
                          <img src={val.img} alt="" className="w-8" />
                          <p>{val.title}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="col-7 navigation-menu border cursor flex items-center justify-center   text-base text-black ">
            <Button>
              <NavLink>home</NavLink>
            </Button>
            <Button>
              <NavLink>about</NavLink>
            </Button>
            <Button>
              <NavLink>shop</NavLink>
            </Button>
            <Button>
              <NavLink>vendors</NavLink>
            </Button>
            <MegaMenu />
            <Button>
              <NavLink>blog</NavLink>
            </Button>
            <Button>
              <NavLink>pages</NavLink>
            </Button>
            <Button>
              <NavLink>contact</NavLink>
            </Button>
          </div>
          <div className="col-2 border flex items-center justify-center gap-3">
            <FaHeadset className="text-4xl opacity-55" />
            <div className="content flex flex-col items-center justify-center leading-3">
              <h1 className="text-3xl font-bold text-[#3BB77D]">1900 - 888</h1>
              <p className="text-sm">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
