import React from 'react'
import "./ShopByCategory.css"

const ShopByCatagoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
        <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
            <img className='rounded-full group-hover:scale-95 transition-transform duration-700 object-cover object-top h-full w-full'
            src='https://vn.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2025/central/categories/evergreen/Women_WSLG_WW_HP_Category_Push_DII.jpg?wid=490' alt='' />
        </div>
        <h1>Leather accessories for women</h1>
    </div>
  )
}

export default ShopByCatagoryCard