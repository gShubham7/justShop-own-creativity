import React from "react";
import ProductCard from "../components/ProductCard";
import { HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Electronic = () => {
  const { data } = useSelector((store) => store.product);

  return (
    <Stack style={{ marginTop: "20px" }}>
      <Stack justify="center" style={{ margin: "auto", marginTop: "20px" }}>
        <VStack spacing={5}>
          <Text align="center" fontSize="20" fontWeight="bold">
            Electronics Items
          </Text>
        </VStack>

        <HStack
          spacing={50}
          width={{ base: "100%", lg: "1200px" }}
          justify="stretch"
        >
          <SimpleGrid
            padding={5}
            spacing={5}
            columns={{ base: 2, md: 3, lg: 4 }}
          >
            {data?.electronics.map((el) => (
              <ProductCard key={el.id} {...el} value={"electronics"} />
            ))}
          </SimpleGrid>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Electronic;
