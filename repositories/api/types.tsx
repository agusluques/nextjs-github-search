export interface RawRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
}

export interface GithubResponse {
  items: RawRepository[];
}
