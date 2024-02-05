import React from "react";
import { Box, Text } from "@chakra-ui/react";
import "../../styles/advertisement.css";

const Advertisement = () => {
  return (
    <Box className="advBox" display={{ base: "none", md: "block" }}>
      <Text className="slogan1">Hear it. Feel it.</Text>
    </Box>
  );
};

export default Advertisement;
