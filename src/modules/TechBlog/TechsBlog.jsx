import React from "react";
import Loading from "../../components/Loading";
import { getTech } from "../../services/ProfileService";
import { Badge, Flex, Progress, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const TechsBlog = () => {
  const { isLoading, data: tech } = useQuery(["getTech"], getTech);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex
      flexWrap="wrap"
      flexDirection="column"
      textAlign="center"
      columnGap={3}
      rowGap={4}
      px={2}
    >
      {tech?.map((t) => (
        <Stack
          spacing={4}
          w="full"
          py={3}
          px={2}
          boxShadow="md"
          borderRadius="xl"
          transition={"0.4s all"}
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "2px 2px 22px",
          }}
        >
          <Badge
            key={t}
            bg="gray.800"
            fontSize="xs"
            py={1}
            px={2}
            borderRadius="xl"
            color="white"
            w={32}
          >
            {t}
          </Badge>
          <Progress
            hasStripe
            colorScheme="green"
            bg="blackAlpha.100"
            isAnimated
            value={84}
          />
        </Stack>
      ))}
    </Flex>
  );
};

export default TechsBlog;
