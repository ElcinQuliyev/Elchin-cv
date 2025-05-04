import { Box, Flex, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="90%"
      h="150px"
      mx="auto"
      mt={4}
      mb={4}
      fontSize="md"
      borderRadius="md"
      justifyContent="space-around"
      alignItems="center"
      className="footer"
    >
      <Box
        as={Link}
        href=""
        position="relative"
        _hover={{
          transform: "scale(1.2)",
          color: "#90CDF4",
          transition: "all 0.3s ease",
        }}>
        <Image 
        h={32}
        w={32} 
        bg={colorMode !== "light" ? "#151b27" : "white"}
        src="../../../elcinlogo.png" />
        <Text
          fontSize="lg"
          color="#90CDF4"
          fontWeight="bold"
          textAlign="center"
          fontFamily="Poppins"
          position="absolute"
          textDecoration="underline"
          bottom="5%"
          right="8%"
        >
          Elcin Quliyev
        </Text>
      </Box>
      <Text
        fontSize="xl"
        fontWeight="bold"
        textAlign="center"
        fontFamily="Poppins"
        color={colorMode !== "light" ? "#90CDF4" : "#151b27"}
      >
        © 2023 Elcin Quliyev / Python Dev. All rights reserved.
      </Text>
      <Flex className="icons" gap={5}>
        <Box
          as={Link}
          href="https://linkedin.com/in/elcin-quliyev/"
          _hover={{
            transform: "scale(1.2)",
            color: "#90CDF4",
            transition: "all 0.3s ease",
          }}
        >
          <SlSocialLinkedin size={45} />
        </Box>

        <Box
          as={Link}
          href="https://github.com/ElcinQuliyev"
          _hover={{
            transform: "scale(1.2)",
            color: "#90CDF4",
            transition: "all 0.3s ease",
          }}
        >
          <SlSocialGithub size={45} />
        </Box>

        <Box
          as={Link}
          href="mailto:elcinquliyevm@gmail.com"
          _hover={{
            transform: "scale(1.2)",
            color: "#90CDF4",
            transition: "all 0.3s ease",
          }}
        >
          <TbMail size={45} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;