import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
// import Grid from '@mui/material/Unstable_Grid2';
// import { Grid2 } from '@mui/system/unstable_Grid';
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={9}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              Z
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg"> Tony</p>
              <p className="opacity-70">2025-01-01T22:14:15.485769</p>
            </div>
          </div>

          <Rating readOnly value={4.5} precision={0.5} />
          <p>Value for product, great product</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://vn.louisvuitton.com/images/is/threekit-image/MKUXLJDE_side_view.png?wid=1090&hei=1090"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
