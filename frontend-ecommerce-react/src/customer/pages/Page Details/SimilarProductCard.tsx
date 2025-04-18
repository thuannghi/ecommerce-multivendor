import React from "react";

const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src={
              "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-keepall-bandouliere-45-mon-monogram--P01949_PM2_Front%20view.png?wid=490&hei=490"
            //   "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-onthego-pm-mon-monogram--P01900_PM1_Worn%20view.png?wid=1090&hei=1090"
            }
            alt=""
          />
        </div>

        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Nike</h1>
            <p>Blue Shirt</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">$400</span>
            <span className="thin-line-through text-gray-400">$999</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
