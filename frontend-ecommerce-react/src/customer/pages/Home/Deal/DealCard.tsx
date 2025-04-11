import React from "react";

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
      <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top'
        src="https://vn.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_bags/Women_Bags_WW_HP_Category_Push_V20240726_DII.jpg?wid=490"
        alt=""
      />
      <div className='border-4 border-black bg-black text-white p-2 text-center'>
        <p className='text-lg font-semibold'>Women bag</p>
        <p className='text-2xl font-bold'>20% OFF</p>
        <p className='text-balance text-lg'>Shop now</p>
      </div>
    </div>
  );
};

export default DealCard;
