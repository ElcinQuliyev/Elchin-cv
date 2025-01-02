import { Flex,  Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

// text change a link to={ path.url } and change server.js
const ContactItem = ({contactIcon,heading,desc}) => {
  console.log(desc);
  
  return (
    <Flex justifyContent="space-between" alignItems="center" color="white">
           <Flex columnGap={2} alignItems="center"> {contactIcon} <Text>{heading}</Text></Flex>
            <Link to={desc}>{desc}</Link>
    </Flex>
  )
}

export default ContactItem