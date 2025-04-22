import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving by Sun, 16 Jul</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex  gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://www.louisvuitton.com/images/is/image/lv/M45985_PM2_Front%20view.png?wid=490&hei=490"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Luxury Bag</h1>
          <p>
            Influenced by the 19th-century French aesthetic, Georges Vuitton
            designed the Monogram canvas – comprising a geometric floral pattern
            and the initials of Louis Vuitton
          </p>
          <p>
            <strong>Size: </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
