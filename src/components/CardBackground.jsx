import { Box, Heading } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import "../index.css";
const CardBackground = ({ heading, children }) => {
  const bg = useColorModeValue("gray.50", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Box w="full" bg={bg} borderRadius="xl" className="d-flex" px={6} py={5}>
      {heading && (
        <Heading as="h2" color={color} fontWeight="medium" fontSize="xl" mb={4}>
          {heading}
        </Heading>
      )}
      {children}
    </Box>
  );
};
export default CardBackground;
