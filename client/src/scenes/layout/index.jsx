import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sliderbar from "components/Sliderbar";

function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const [isSliderbarOpen, setIsSliderbarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sliderbar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSliderbarOpen={isSliderbarOpen}
        setIsSliderbarOpen={setIsSliderbarOpen}
      />
      <Box>
        <Navbar
          isSliderbarOpen={isSliderbarOpen}
          setIsSliderbarOpen={setIsSliderbarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
