import React from "react";
import THeading from "./THeading";

const LeftTable = () => {
  const CallheadData = ["OI Buildup", "IV", "OI", "Volume", "Chng%", "LTP"];
  const CallRowData = [
    {
      isactive: false,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: false,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: false,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: false,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: false,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: false,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: false,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: true,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
    {
      isactive: true,
      items: ["Long Buildup", "9.4", "35K", "1.25K", "+123.5%", "1,245.3"],
    },
  ];
  return (
    <table className="w-full ">
      <thead className=" p-4 w-full">
        <tr className="border-b-gray-600 border-b-2">
          {CallheadData.map((item, index) => {
            return <THeading key={index} data={item} />;
          })}
        </tr>
      </thead>
      <tbody>
        {CallRowData.map((data, index) => {
          return (
            <tr
              key={index}
              className={`${
                data.isactive
                  ? " border-b-gray-200 border-b"
                  : "bg-yellow-100 border-b-yellow-400 border-b"
              }  font-rubi  leading-tight  md:text-lg text-base`}
            >
              <td className="p-1 leading-10 whitespace-nowrap">
                {data.items[0]}
              </td>
              <td className="p-1">{data.items[1]}</td>
              <td className="p-1">{data.items[2]}</td>
              <td className="p-1">{data.items[3]}</td>
              <td className="p-1 text-green-600">{data.items[4]}</td>
              <td className="p-1 ">
                <span> {data.items[5]}</span>

                <span className=" border  p-1 bg-white  sm:mx-3 mx-1">B</span>
                <span className=" border  p-1  bg-white">S</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LeftTable;
