import React, { useEffect, useState } from "react";
import LeftTable from "./LeftTable";
import RightTable from "./RightTable";
import MiddleTable from "./MiddleTable";
const Container = () => {
  const [ids, setIds] = useState("C");
  return (
    <div className=" md:w-5/6 w-11/12 mx-auto  my-4 font-rubi">
      <div className="flex flex-col md:w-1/5 sm:w-1/4 w-1/2 my-3 xl:hidden ">
        <label htmlFor="ids" className="whitespace-nowrap ">
          Select an Option
        </label>
        <select
          name=""
          id="ids"
          className="bg-blue-600 text-white p-3 hover:shadow-md outline-none"
          onChange={(e) => setIds(e.target.value)}
        >
          <option value="C">CALLS</option>
          <option value="P">PUTS</option>
        </select>
      </div>
      <div className="flex ">
        <div
          className={` ${ids === "C" ? "w-full" : "hidden"} xl:w-3/5 xl:block`}
        >
          <p className="text-center text-lg bg-white p-4 xl:block hidden">
            CALLS
          </p>
          <div className="flex overflow-x-scroll">
            <LeftTable />
            <MiddleTable />
          </div>
        </div>

        <div
          className={` border-black ${
            ids === "P" ? "w-full" : "hidden"
          }  xl:w-1/2 xl:block`}
        >
          <p className="text-center text-lg bg-white p-4 xl:block hidden">
            PUTS
          </p>
          <div className="flex overflow-x-scroll">
            <RightTable />
            <div className="xl:hidden block">
              <MiddleTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
