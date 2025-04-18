import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                src="https://vn.louisvuitton.com/images/is/threekit-image/MKUXLJDE_front_view.png?wid=1090&hei=1090"
                alt=""
                className="lg:w-full w-[50%] cursor-pointer rounded-md"
              />
            ))}
          </div>

          <div className="w-full lg:w-[85%]">
            <img
              src="https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-onthego-pm-mon-monogram--P01900_PM1_Worn%20view.png?wid=1090&hei=1090"
              alt=""
              className="w-full rounded-md"
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">Sun Clothing</h1>
          <p className="text-gray-500 font-semibold">men black shirt</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center ">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>234 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">$400</span>
              <span className="line-through text-gray-400">$999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sm">Sale product info here....</p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assure</p>
            </div>

            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>

            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free shipping and return</p>
            </div>

            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2 ">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add to bag
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>
          <div className="mt-5">
            <p>
              Senti Bio to Showcase SENTI-202 Clinical Data and Novel Logic
              Gated Gene Circuit Mechanism of Action in Oral and Poster
              Presentations at the American Association for Cancer Research
              (AACR) Annual Meeting 2025
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>

        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Product</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
