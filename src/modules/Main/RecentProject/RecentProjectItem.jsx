import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FiLink2 } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";

 const colors = {
  README: "📁",
  Python: "blue",
  HTML: "red",
  TypeScript: "blue",
  JavaScript: "yellow",
  CSS: "blue", 
};

const RecentProjectItem = ({ repo }) => {
  const toast = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(repo.clone_url);
    toast({
      position: "top-right",
      title: "Link copied",
      description: "Git clone url copied",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
    window.open(repo.svn_url);
  };

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "gray.300");

  const hasReadme = repo.contents_url && repo.contents_url.includes("README.md");

  return (
    <GridItem
      bg={bg}
      borderRadius="xl"
      px={6}
      py={8}
      boxShadow="md"
      target="_blank"
      onClick={handleCopy}
      transition={"0.4s all"}
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "2px 2px 22px",
      }}
    >
      <Heading
        as="h2"
        fontSize="medium"
        display="flex"
        columnGap={1}
        alignItems="center"
        fontWeight="medium"
        color={color}
        flexDirection="column"
      >
        <Box display="flex" gap={1} alignItems="center" padding={2}>
          <FiLink2 /> {repo.name}
        </Box>
        <Image
          borderRadius={"20px"}
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/80"
        />
      </Heading>

      <Text as="p" color="gray.500" mt={1}>
        {repo.description}
      </Text>

      <Flex mt={8} justifyContent="space-between">
        <Flex columnGap={4}>
          <Text
            display="flex"
            columnGap={1}
            alignItems="center"
            color="gray.600"
          >
            <BsStar /> {repo.stargazers_count}
          </Text>
          <Text
            display="flex"
            columnGap={1}
            alignItems="center"
            color="gray.600"
          >
            <BiGitBranch />
            {repo.forks}
          </Text>
        </Flex>

        <Text display="flex" columnGap={1} alignItems="center" color="gray.600">
          {hasReadme ? (
            <Box
              display="flex"
              alignItems="center"
              bg="transparent"
              color="gray.600"
              fontSize="20px"
            >
              {colors[`${repo.language}`] || "README"}
            </Box>
          ) : (
            <>
              <Box
                bg={colors[`${repo.language}`] || "gray"} 
                w="16px"
                h="16px"
                borderRadius="xl"
              ></Box>
              {repo.language || "README"} 
            </>
          )}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default RecentProjectItem;
