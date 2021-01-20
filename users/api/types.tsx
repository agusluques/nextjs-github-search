export interface RawUser {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface GithubResponse {
  items: RawUser[];
}
