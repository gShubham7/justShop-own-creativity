import React from "react";
import { Image, Stack } from "@chakra-ui/react";
import "../../styles/advertisement.css";

const AdGif = () => {
  return (
    <Stack
      width="100%"
      className="advgif"
      display={{ base: "block", md: "block", small: "block" }}
    >
      <Image
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/JBL-NM/03_ANC.gif"
        alt="advgif"
        minWidth="80%"
      />
    </Stack>
  );
};

export default AdGif;
