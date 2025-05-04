import { Badge, Stack } from "@chakra-ui/layout";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ContactItem from "./ContactItem";

const Contacts = ({ user }) => {
  if (user)
    return (
      <Stack w="full" fontSize='12px'    spacing={6} py={4}>
        <ContactItem
          contactIcon={<CiLocationOn />}
          heading="Based in:"
          desc={user.place}
        />
        <ContactItem
          contactIcon={<BsGithub />}
          heading="Github:"
          desc={user.github}
        />
        <ContactItem
          contactIcon={<BsLinkedin />}
          heading="Linkedin:"
          desc={user.linkedin}
        />
        <ContactItem
          contactIcon={<MdEmail />}
          heading="Email:"
          desc={user.email}
        />
      </Stack>
    );
};

export default Contacts;
