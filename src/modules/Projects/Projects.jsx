import React from "react";
import Github from "../Main/Github/Github";
import CardBackground from "../../components/CardBackground";
import RecentProject from "../Main/RecentProject/RecentProject";
import { Flex } from "@chakra-ui/react";
export default function Projects() {
  return (
    <Flex flexDirection='column' gap={4}>
      <CardBackground heading="Recent Projects" isBlur>
        <RecentProject />
      </CardBackground>
      <CardBackground heading="GitHub Projects" isBlur>
        <Github />
      </CardBackground>
    </Flex>
  );
}
