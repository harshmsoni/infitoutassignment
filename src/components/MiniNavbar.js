import React from "react";
import Input from "./Input";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
const MiniNavbar = () => {
  const [scrip, setScrip] = React.useState("NIFTY");
  const [date, setExpDate] = React.useState("18 May 2023");
  return (
    <div className="mt-14 md:w-5/6 w-11/12 mx-auto flex items-end flex-col gap-4 justify-between">
      <div className="flex md:gap-12 gap-4 items-center justify-between  w-full md:flex-row flex-col">
        <div className="flex sm:gap-4  gap-2 ">
          <div className=" xl:w-52 w-32">
            <Input
              FullWidth
              placeholder="Scrip"
              isLabel={true}
              value={scrip}
              onChange={(e) => setScrip(e.target.value)}
            />
          </div>
          <div className=" xl:w-52 w-32">
            <Input
              FullWidth
              placeholder="Exp"
              isLabel={true}
              value={date}
              onChange={(e) => setExpDate(e.target.value)}
            />
          </div>
          <div className=" flex-col lg:flex hidden">
            <p className="text-base  text-gray-600 font-serif">Spot</p>
            <p className="flex items-center gap-2 font-rubi">
              <span className="text-lg ">39.156.1</span>
              <span className="text-green-600 text-sm">0.7%</span>{" "}
            </p>
          </div>
          <div className=" flex-col lg:flex hidden">
            <p className="text-base  text-zinc-500 font-serif">Fut</p>
            <p className="flex items-center gap-2 font-rubi">
              <span className="text-lg ">18,251.1</span>
              <span className="text-green-600 text-sm">0.35%</span>{" "}
            </p>
          </div>
        </div>
        <div className=" gap-6 2xl:flex hidden">
          <div className="flex flex-col ">
            <p className="text-base  text-zinc-500 font-serif whitespace-nowrap">
              Max pain
            </p>
            <span className="text-lg font-rubi">18,200</span>
          </div>
          <div className="flex flex-col ">
            <p className="text-base  text-zinc-500 font-serif">PCR</p>
            <span className="text-lg font-rubi">0.92</span>
          </div>
          <div className="flex flex-col items-start relative pr-4 ">
            <p className="flex">
              <span className="text-base  text-zinc-500 font-serif whitespace-nowrap">
                Support 1
              </span>
              <span className="flex flex-col  gap-0 absolute right-0">
                <MdKeyboardArrowUp className="" /> <MdKeyboardArrowDown />
              </span>
            </p>
            <span className="text-lg font-rubi">18100</span>
          </div>
          <div className="flex flex-col items-start relative pr-4 ">
            <p className="flex">
              <span className="text-base  text-zinc-500 font-serif whitespace-nowrap">
                Resistance 1
              </span>
              <span className="flex flex-col  gap-0 absolute right-0">
                <MdKeyboardArrowUp className="" /> <MdKeyboardArrowDown />
              </span>
            </p>
            <span className="text-lg font-rubi">18500</span>
          </div>
        </div>
        <div className="flex items-center gap-6   w-full 2xl:justify-between  justify-end">
          <div className="flex gap-4 items-center">
            <HiOutlineAdjustmentsHorizontal className="text-xl" />
            <span className="text-lg">Filters</span>
          </div>
          <div className="relative">
            <button className="bg-blue-600 text-white px-12 py-2 relative">
              Basket
            </button>
            <span className="bg-yellow-300 py-1 text-sm px-2 rounded-full absolute -top-3 -right-2 font-inter">
              3
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="relative flex gap-4">
          <button className="bg-blue-600 rounded-md text-white px-10 py-2 relative">
            LTP
          </button>
          <button className="bg-gray-300 rounded-md px-10 py-2 relative">
            Geeks
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
