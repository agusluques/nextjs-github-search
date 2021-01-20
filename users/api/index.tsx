import instance from "../../axios/axios";
import {User} from "../types";

import {GithubResponse} from "./types";

export default {
  search: (query: string): Promise<User[]> => {
    if (query) {
      return instance({
        method: "GET",
        url: "/users",
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
            username: rawUser.login,
            image: rawUser.avatar_url,
            url: rawUser.html_url,
          }));
        });
    }
  },
};
