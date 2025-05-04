import { Avatar } from "@chakra-ui/avatar";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Loading from "../components/Loading";
import { Image, useColorModeValue } from "@chakra-ui/react";
import DownloadButton from "./DownloadButton";

const Profile = ({ user, isLoading }) => {
  const color = useColorModeValue("balck", "gray.400");

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Stack w="full" textAlign="center" alignItems="center" spacing={6}>
      <Avatar
        id="EQ"
        size="2xl"
        name="Elcin Quliyev"
        src={user.imageUrl}
        bg="#3182CE"
        outline="3px solid #3182CE"
        outlineOffset={2}
      />
      <Heading as="h2" display="flex" gap={2} color={color} fontSize="xl">
      <Image src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" w={6}/>{user.firstName}&nbsp;{user.lastName}
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
      <DownloadButton />
    </Stack>
  );
};

export default Profile;