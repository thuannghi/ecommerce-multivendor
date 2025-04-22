import { Radio } from "@mui/material";
import React from "react";

const UserAddressCard = () => {
  return (
    <div className="p-5 border rounded-md flex">
      <div className="space-y-3">
        <h1>Tony</h1>
        <p className="w-[320px]">1234 Hawaii, US</p>
        <p>
          <strong>Mobile: </strong>091234567
        </p>
      </div>
    </div>
  );
};

export default UserAddressCard;
