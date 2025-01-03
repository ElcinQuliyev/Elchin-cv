import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Loading from "../components/Loading";
import { useColorModeValue } from "@chakra-ui/react";

const Profile = ({ user, isLoading }) => {
  const color = useColorModeValue("balck", "gray.400");

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Stack w="full" textAlign="center" alignItems="center" spacing={6}>
      <Avatar
        size="2xl"
        name="Elcin Quliyev"
        src={user.imageUrl}
        bg="blue"
        outline="2px solid blue"
        outlineOffset={2}
      />
      <Heading as="h2" color={color} fontSize="xl">
        {user.firstName}&nbsp;{user.lastName}
      </Heading>
      <Text color={color}>
        ⚡{" "}
        {user.interests.map((interest, idx) => {
          if (idx !== user.interests.length - 1) {
            return interest + " | ";
          } 
          return interest;
          
        })}{" "}
        ⚡
      </Text>
      <Button
        variant="outline"
        size="sm"
        colorScheme="blue"
        fontWeight="medium"
        textTransform="uppercase"
      >
        Download Resume
      </Button>
    </Stack>
  );
};

export default Profile;
