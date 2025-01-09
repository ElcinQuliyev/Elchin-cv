import React from 'react'
import { Button, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import { useQuery } from "@tanstack/react-query";
import Loading from '../../../components/Loading';
import { getTech } from '../../../services/ProfileService';


function TechStackItem() {
  const { isLoading, data: tech } = useQuery(["getTech"], getTech);
  if (isLoading) {
    return <Loading />;
  }
  return (

    <Flex
      flexWrap="wrap"
      justifyContent="center"
      columnGap={2}
      rowGap={2}
      px={2}
    >
      {tech?.map((t) => (
        <SimpleGrid  column={2} gap="40px">
          <Stack align="flex-start">
            <Button variant="outline" colorPalette="teal">
              {t}
            </Button>
          </Stack>
        </SimpleGrid>
      ))}

    </Flex>
  )
}

export default TechStackItem