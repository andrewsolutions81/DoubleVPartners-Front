// types.ts

export interface ErrorMessageProps {
  message: string;
}

export interface UserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface UserSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: UserData[];
}

export interface UserCardProps {
  username: string;
  userId: number;
  followers: string;
}

export interface UserDetailsProps {
  username: string;
}

export interface FollowerData {
  login: string;
  id: number;
  avatar_url: string;
}

export interface FollowingData {
  login: string;
  id: number;
  avatar_url: string;
}
