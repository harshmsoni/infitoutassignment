import React, { useState } from "react";
import logo from "../track_trade.svg";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [active, setActive] = React.useState(1);
  const links = [
    {
      name: "Dashboard",
      id: 1,
    },
    {
      name: "Option chain",
      id: 2,
    },
    {
      name: "Stategy builder",
      id: 3,
    },
    {
      name: "Positions",
      id: 4,
    },
    {
      name: "Order book",
      id: 5,
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <div className="flex 2xl:px-14 xl:px-4 py-4 shadow-lg font-rubi justify-between items-center relative gap-6 w-full ">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className=" 2xl:gap-10 gap-4 xl:flex hidden">
        {links.map((link, key) => {
          return (
            <p
              key={key}
              id=""
              className={`${
                link.id === active ? "text-blue-800" : "text-black "
              } cursor-pointer   xl:text-lg  text-base `}
              onClick={() => setActive(link.id)}
            >
              {link.name}
            </p>
          );
        })}
      </div>
      <div className="gap-10   items-center sm:flex  hidden">
        <div className="flex flex-col items-end">
          <p className="text-xs uppercase text-gray-600">Nifty</p>
          <p>
            <span className="text-green-600 text-xs">0.35%</span>{" "}
            <span className="xl:text-lg text-base ">18.245.32</span>
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs uppercase text-gray-600">Banknifty</p>
          <p>
            <span className="text-green-600 text-xs">0.7%</span>{" "}
            <span className="sm:text-lg text-base ">39.156.1</span>
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs uppercase text-gray-600">India Vix</p>
          <p>
            <span className="text-red-600 text-xs">-10.9%</span>{" "}
            <span className="sm:text-lg text-base ">12.12</span>
          </p>
        </div>
      </div>
      <div className=" items-center gap-1 text-black xl:flex hidden ">
        Profile
        <IoIosArrowDown />
      </div>
      <div>
        <RxHamburgerMenu
          className={`text-3xl cursor-pointer z-50 xl:hidden block mx-8 ${
            show ? "text-white" : "text-black"
          }`}
          onClick={() => setShow(!show)}
        />
        {show && (
          <div className=" top-0 flex gap-8 flex-col absolute bg-black text-white min-h-screen -right-2 z-30 pt-20 items-end ">
            <AiOutlineCloseCircle
              className="text-white text-4xl cursor-pointer mx-4 "
              onClick={() => setShow(false)}
            />
            <div className="px-20 flex gap-8 flex-col ">
              {links.map((link, key) => {
                return (
                  <p
                    key={key}
                    id=""
                    className={`${
                      link.id === active ? "text-red-600" : "text-white"
                    } cursor-pointer  leading-tight   `}
                    onClick={() => setActive(link.id)}
                  >
                    {link.name}
                  </p>
                );
              })}
              <p id="" className={` text-white cursor-pointer  leading-tight `}>
                Profile
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
