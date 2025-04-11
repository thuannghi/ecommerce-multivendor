import React from "react";
import { MenLevelTwo } from "../../../data/category/level two/MenLvelTwo";
import { WomenLevelTwo } from "../../../data/category/level two/WomenLevelTwo";
import { ElectronicsLevelTwo } from "../../../data/category/level two/ElectricsLevelTwo";
import { FurnitureLevelTwo } from "../../../data/category/level two/FurnitureLevelTwo";
import { MenLevelThree } from "../../../data/category/level three/MenLvelThree";
import { WomenLevelThree } from "../../../data/category/level three/WomenLevelThree";
import { ElectronicsLevelThree } from "../../../data/category/level three/ElectricsLevelThree";
import { FurnitureLevelThree } from "../../../data/category/level three/FurnitureLevelThree";
import { Box } from "@mui/material";

const categoryTwo: {[key:string]: any[]} = {
  men: MenLevelTwo,
  women: WomenLevelTwo,
  electronics: ElectronicsLevelTwo,
  home_furniture: FurnitureLevelTwo
};

const categoryThree: {[key:string]: any[]} = {
  men: MenLevelThree,
  women: WomenLevelThree,
  electronics: ElectronicsLevelThree,
  home_furniture: FurnitureLevelThree
};

const CategorySheet = ({selectedCategory, setShowSheet}: any) => {
  const childCategory = (Category: any, parentCategoryId: any) => {
    return Category.filter(
      (child: any) => child.parentCategoryId === parentCategoryId
    );
  };
  return (
    <div>
      <Box
        sx={{ zIndex: 2 }}
        className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
      >
        <div className="flex text-sm flex-wrap">
          {categoryTwo[selectedCategory]?.map((item:any, index) => (
            <div
              className={`p-8 lg:w-[20%] ${
                index % 2 === 0 ? "bg-slate-50" : "bg-white"
              }`}
            >
              <p className="text-primary-color mb-5 font-semibold">
                {item.name}
              </p>
              <ul className="space-y-3">
                {childCategory(categoryThree[selectedCategory], item.categoryId).map(
                  (item: any) => (
                    <div>
                      <li className="hover:text-primary-color cursor-pointer">
                        {item.name}
                      </li>
                    </div>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};
export default CategorySheet;
