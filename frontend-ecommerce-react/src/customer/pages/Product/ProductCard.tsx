import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://www.louisvuitton.com/images/is/image/lv/M_BC_ShowSS25_DL1_Jan25_10_DII.jpg?wid=2400",
  "https://www.louisvuitton.com/images/is/image/lv/M_BC_PRECOSS25_DL1_Oct31_Screenshot07_DII.jpg?wid=2400",
  "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-silk-shirt--FTBI01VVU900_PM1_Worn%20view.png?wid=1090&hei=1090",
  "https://www.louisvuitton.com/images/is/image/lv/W_BC_RTW_NEWPERMAMENT_JAN25_02_DII.jpg?wid=2400",
  "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nano-speedy--M81085_PM1_Worn%20view.png?wid=1090&hei=1090",
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHover) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHover]);

  return (
    <>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {images.map((item, index) => (
            <img
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          }
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Niky</h1>
            <p>Blue Shirt</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">$400</span>
            <span className="thin-line-through text-gray-400">$999</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
