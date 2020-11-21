import React from "react";

import ShiftCard from "./ShiftCard";

import "./ShiftList.scss";

const ShiftList = ({ data }) => {
  return (
    <div className="sl-container">
      <div className="sl-main">
        {data.map((data) => {
          return <ShiftCard data={data} key={data._id} />;
        })}
      </div>
    </div>
  );
};

export default ShiftList;
