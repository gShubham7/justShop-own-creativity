import React from "react";
import banner2 from "../../assets/images/banner2.webp";
import ad from "../../assets/images/ad.gif";
import "../../styles/banner.css";
import { Box } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box className="box1">
      <Box
        className="banner"
        display={{ base: "none", md: "block", sm: "block" }}
      >
        <img src={banner2} alt="banner" />
      </Box>
      <Box className="ad">
        <img src={ad} alt="ad" />
      </Box>
    </Box>
  );
};

export default Banner;
