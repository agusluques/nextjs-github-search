import {Link, Stack, Text, WrapItem} from "@chakra-ui/react";
import React from "react";

import {Repository} from "../types";

interface Props {
  repo: Repository;
}

const RepositoryBox: React.FC<Props> = ({repo}) => {
  return (
    <Link isExternal href={repo.url}>
      <WrapItem>
        <Stack
          bgColor="gray.500"
          borderRadius="lg"
          borderWidth="1px"
          boxShadow="lg"
          color="white"
          height={150}
          overflow="hidden"
          padding={2}
          width={80}
        >
          <Text fontSize="2xl" textDecoration="none">
            {repo.name}
          </Text>
          <Text as="i" fontSize="sm">
            {repo.path}
          </Text>
          <Text fontSize="sm" noOfLines={3}>
            {repo.description}
          </Text>
        </Stack>
      </WrapItem>
    </Link>
  );
};

export default RepositoryBox;
