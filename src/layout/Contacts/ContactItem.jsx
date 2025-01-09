import {Flex, Text} from '@chakra-ui/react'
import React from 'react'

// text change a link to={ path.url } and change server.js
const ContactItem = ({contactIcon,heading,desc}) => {
  // console.log(desc);
  
  return (
    <Flex justifyContent="space-between" alignItems="center" color="gray.500">
           <Flex columnGap={2} alignItems="center"> {contactIcon} <Text >{heading}</Text></Flex>
           
            <Text color='gray.500' fontSize='sm' >
          <a href={desc} target='_blank'  >{desc}</a>
            </Text>
    </Flex>
    
  )
}

export default ContactItem