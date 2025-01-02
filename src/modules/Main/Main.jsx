import { Stack } from "@chakra-ui/react";
import React from "react";
import CardBackground from "../../components/CardBackground";
import Github from "./Github/Github";
import RecentProject from "./RecentProject/RecentProject";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <Stack spacing={8}>
      <CardBackground heading="GitHub Projects" isBlur>
        <Github />
      </CardBackground>
      <CardBackground heading="Recent Projects">
        <RecentProject />
      </CardBackground>
      <Footer />
    </Stack>
  );
}
