import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        <div className='col-span-3 row-span-12 text-white'>
            <img className='w-full h-full object-cover object-top rounded-md'
            src='https://www.louisvuitton.com/images/is/image/lv/MEN_09_MNG_SHADOW_BC_DII.jpg?wid=2400' alt='' />
        </div>

        <div className='col-span-2 row-span-6 text-white'>
            <img className='w-full h-full object-cover object-top rounded-md'
            src='https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-discovery-backpack-pm--M14884_PM2_Front%20view.png?wid=490&hei=490' alt='' />
        </div>

        <div className='col-span-4 row-span-6 text-white'>
            <img className='w-full h-full object-cover object-top rounded-md'
            src='https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-golf-bag--M13925_PM2_Front%20view.png?wid=490&hei=490' alt='' />
        </div>

        <div className='col-span-3 row-span-12 text-white'>
            <img className='w-full h-full object-cover object-top rounded-md'
            src='https://www.louisvuitton.com/images/is/image/lv/Women_Campaign_LVxTM_Chapter2_DigitalAmpli_01_DII.jpg?wid=2400' alt='' />
        </div>

        <div className='col-span-4 row-span-6 text-white'>
            <img className='w-full h-full object-cover object-top rounded-md'
            src='https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-tm-cherry-blossom-bag-chain--M02540_PM1_Worn%20view.png?wid=1090&hei=1090' alt='' />
        </div>

        <div className='col-span-2 row-span-6 text-white'>
            <img className='w-full h-full object-cover object-top rounded-md'
            src='https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-printed-short-sleeved-silk-shirt--HSS34WQJN60Q_PM2_Front%20view.png?wid=490&hei=490' alt='' />
        </div>
    </div>
  )
}

export default CategoryGrid