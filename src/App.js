import { Box, Flex, Heading } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Main from "./modules/Main/Main";
import Projects from "./modules/Projects/Projects";
import { ROUTES } from "./routes";

function App() {
  return (
    <Flex w="95%" mx="auto" className="d-flex" mt={4} columnGap={6}>
      <MainLayout />
      <Box w="68%">
        <Routes>
          <Route path="" element={<Navigate to={ROUTES.home} />} />
          <Route path={ROUTES.home} element={<Main />} />
          <Route path={ROUTES.projects} element={<Projects />} />
          <Route path="*" element={<Heading as="h1">404 Not Found</Heading>} />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
