import {Button, Heading, Stack} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  query: string;
}

const IndexPage: React.FC<Props> = ({query}) => {
  return (
    <Stack padding={3}>
      <Heading>Search by:</Heading>
      <Stack direction="row" justify="center" spacing={4}>
        <Link href={`/users?q=${query}`}>
          <Button
            backgroundColor="gray.500"
            color="white"
            leftIcon={<img src="https://icongr.am/feather/users.svg?size=12&color=currentColor" />}
            variant="solid"
          >
            Users
          </Button>
        </Link>
        <Link href={`/repositories?q=${query}`}>
          <Button
            backgroundColor="gray.500"
            color="white"
            leftIcon={<img src="https://icongr.am/feather/folder.svg?size=12&color=currentColor" />}
            variant="solid"
          >
            Repositories
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default IndexPage;
