import { Avatar, Box, Button, Icon, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
  return (
    <>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div>
            <div className="flex items-center gap-2">
              <IconButton>
                <MenuIcon></MenuIcon>
              </IconButton>
              <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#00927c]">
                General Tony
              </h1>
            </div>
          </div>
          <div className='flex gap-1 lg:gap-6 items-center'>
            <IconButton>
              <SearchIcon></SearchIcon>
            </IconButton>
            {true ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://avatars.githubusercontent.com/u/33619498?v=4"
                />

                <h1 className="font-semibold hidden lg:block">NNT</h1>
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && <Button startIcon={<Storefront />} variant="outlined">
              Become Seller
            </Button>}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
