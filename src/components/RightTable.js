import React from "react";
import THeading from "./THeading";
const RightTable = () => {
  const PutheadData = ["LTP", "Chng%", "Volume", "OI", "IV", "OI Buildup"];
  const PutRowData = [
    {
      isactive: true,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: true,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: true,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: true,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: true,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: true,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: true,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: false,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
    {
      isactive: false,
      items: ["15.3", "-44.2%", "982", "1.4K", "9.2", "Long Buildup"],
    },
  ];
  return (
    <table className="w-full">
      <thead className=" p-4 w-full">
        <tr className="border-b-gray-600 border-b-2">
          {PutheadData.map((item, index) => {
            return <THeading key={index} data={item} />;
          })}
        </tr>
      </thead>
      <tbody>
        {PutRowData.map((item, index) => {
          return (
            <tr
              key={index}
              className={`${
                item.isactive
                  ? " border-b-gray-200 border-b"
                  : "bg-yellow-100 border-b-yellow-400 border-b"
              }   font-rubi font-normal text-lg `}
            >
              <td className="p-3 flex items-center gap-2">
                <span className=" border text-sm px-1 bg-white">B</span>
                <span className=" border text-sm px-1  bg-white">S</span>
                {item.items[0]}
              </td>
              <td className="p-3 text-red-600">{item.items[1]}</td>
              <td className="p-3 ">{item.items[2]}</td>
              <td className="p-3">{item.items[3]}</td>
              <td className="p-3">{item.items[4]}</td>
              <td className="p-3 leading-tight whitespace-nowrap">
                {item.items[5]}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RightTable;
