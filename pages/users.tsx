import React, {useEffect} from "react";
import {GetServerSideProps} from "next";
import {Grid, Stack, Wrap} from "@chakra-ui/react";

import api from "../users/api";
import {User} from "../users/types";
import UserBox from "../users/components/UserBox";

interface Props {
  items: User[];
}

const UsersPage: React.FC<Props> = ({items}) => {
  return (
    <Wrap justify="center" padding={3}>
      {items && items.map((user: User) => <UserBox key={user.id} user={user} />)}
    </Wrap>
  );
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const items = await api.search(query.q as string);

  return {
    props: {
      items: items || null,
    },
  };
};

export default UsersPage;
