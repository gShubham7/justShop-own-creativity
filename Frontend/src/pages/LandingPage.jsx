import React from "react";
import { Divider, Box, Center } from "@chakra-ui/react";
import Banner from "../components/landing-page/Banner";
import Brands from "../components/landing-page/Brands";
import MenSection from "../components/landing-page/MenSection";
import WomenSection from "../components/landing-page/WomenSection";
import ElectronicSection from "../components/landing-page/ElectronicSection";
import FlexItems from "../components/landing-page/FlexItems";
import Why from "../components/landing-page/Why";
import Gifts from "../components/landing-page/Gifts";
import Advertisement from "../components/landing-page/Advertisement";
import Reviews from "../components/landing-page/Reviews";
import AdGif from "../components/landing-page/Adgif";

const LandingPage = () => {
  return (
    <Box>
      <AdGif />
      <Banner />
      <FlexItems />
      <Center>
        <Divider orientation="horizontal" width="80%" marginTop="2rem" />
      </Center>
      <Why />
      <Brands />
      <Center>
        <Divider orientation="horizontal" width="80%" marginTop="2rem" />
      </Center>
      <MenSection />
      <Gifts />
      <WomenSection />
      <Advertisement />
      <ElectronicSection />
      <Reviews />
    </Box>
  );
};

export default LandingPage;
