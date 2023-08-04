import { Flex, Link } from "@chakra-ui/layout";
import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.50", "black");
  const color = useColorModeValue("black", "gray.500");

  return (
    <Flex
      bg={bg}
      py={4}
      color={color}
      justifyContent="space-around"
      borderRadius="md"
    >
      <Link
        as={NavLink}
        to={ROUTES.home}
        fontSize="xl"
        fontWeight="medium"
        transition="0.5s ease"
        _hover={{
          color: "blue.600",
        }}
      >
        Home
      </Link>
      <Link
        as={NavLink}
        to={ROUTES.blogs}
        fontSize="xl"
        fontWeight="medium"
        transition="0.5s ease"
        _hover={{
          color: "blue.600",
        }}
      >
        TechStack
      </Link>
      <Link
        as={NavLink}
        to={ROUTES.projects}
        fontSize="xl"
        fontWeight="medium"
        transition="0.5s ease"
        _hover={{
          color: "blue.600",
        }}
      >
        Projects
      </Link>
      <Button onClick={toggleColorMode} bg={"gray.300"} color={"black"}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </Flex>
  );
};

export default Navbar;
