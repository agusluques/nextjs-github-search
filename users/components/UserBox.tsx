import {Badge, Box, Image, Link, Stack, Text, WrapItem} from "@chakra-ui/react";
import React from "react";

import {User} from "../types";

interface Props {
  user: User;
}
const UserBox: React.FC<Props> = ({user}) => {
  return (
    <Link isExternal href={user.url}>
      <WrapItem>
        <Box
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="lg"
          color="white"
          overflow="hidden"
          width={80}
        >
          <Stack>
            <Badge
              alignSelf="flex-end"
              borderRadius="lg"
              fontSize={12}
              margin={2}
              position="absolute"
              px="2"
            >
              #{user.id}
            </Badge>
            <Image marginTop="0 !important" src={user.image} width="100%" />
          </Stack>
          <Stack>
            <Box
              bgColor="gray.500"
              borderRadius="lg"
              borderTopRadius={12}
              height="100%"
              marginTop={-3}
              padding={2}
            >
              <Text>{user.username}</Text>
            </Box>
          </Stack>
        </Box>
      </WrapItem>
    </Link>
  );
};

export default UserBox;
