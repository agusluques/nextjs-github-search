import React from "react";
import {GetServerSideProps} from "next";
import {Wrap} from "@chakra-ui/react";

import api from "../repositories/api";
import {Repository} from "../repositories/types";
import RepositoryBox from "../repositories/components/RepositoryBox";

interface Props {
  items: Repository[];
}

const RepositoriesPage: React.FC<Props> = ({items}) => {
  return (
    <Wrap justify="center" padding={3}>
      {items && items.map((repo: Repository) => <RepositoryBox key={repo.id} repo={repo} />)}
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

export default RepositoriesPage;
