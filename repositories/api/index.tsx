import instance from "../../axios/axios";
import {Repository} from "../types";

import {GithubResponse} from "./types";

export default {
  search: (query: string): Promise<Repository[]> => {
    if (query) {
      return instance({
        method: "GET",
        url: "/repositories",
        params: {
          q: query,
        },
      })
        .then((res) => {
          return res.data;
        })
        .then((response: GithubResponse) => {
          return response.items.map((rawUser) => ({
            id: rawUser.id,
            name: rawUser.name,
            path: rawUser.full_name,
            description: rawUser.description,
            url: rawUser.html_url,
          }));
        });
    }
  },
};
