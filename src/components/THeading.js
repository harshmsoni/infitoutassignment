import React from "react";

const THeading = ({ data }) => {
  return (
    <td title={data} className="p-4 bg-[#E8EEFB] font-brand whitespace-nowrap">
      {data}
    </td>
  );
};

export default THeading;
