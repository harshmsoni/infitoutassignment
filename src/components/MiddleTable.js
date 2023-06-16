import React from "react";

const MiddleTable = () => {
  const strikeData = [
    17800, 17850, 17900, 17950, 18000, 18050, 18100, 18150, 18200,
  ];
  return (
    <div className=" ">
      <table className="w-full sm-scroll">
        <thead className=" p-4 w-full">
          <tr className="border-violet-400 border-b-2 border-x-2 ">
            <td
              title={"Strike"}
              className="py-4 px-10 bg-violet-200 font-brand"
            >
              Strike
            </td>
          </tr>
        </thead>
        <tbody>
          {strikeData.map((item, index) => {
            return (
              <tr className={` font-rubi  text-lg text-center`} key={index}>
                <td className="p-3 border-b border-[#a688dc] border-x bg-[#efe8fb]">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MiddleTable;
