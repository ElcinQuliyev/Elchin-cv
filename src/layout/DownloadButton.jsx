import React from 'react';
import { Button, VStack, useBreakpointValue } from '@chakra-ui/react';

const DownloadButton = () => {
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  const handleDownload = () => {
    const fileUrl = '/myResume/CV-ElcinQuliyev.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV-ElcinQuliyev.pdf';
    link.target = '_blank';
    link.click();
  };
  

  return (
    <VStack spacing={4} align="center" mt={10}>
      <Button colorScheme="blue" onClick={handleDownload} size={buttonSize} variant="solid">
        Download CV
      </Button>
    </VStack>
  );
};

export default DownloadButton;
