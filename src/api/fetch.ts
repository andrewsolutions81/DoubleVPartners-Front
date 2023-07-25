//fetch.ts
import axios from 'axios';
import { UserData, FollowerData, FollowingData, UserSearchResponse } from '../types';

const apiBaseUrl = 'https://api.github.com';

// Fetch all users by search query
export const searchAllUsers = async (query: string): Promise<UserSearchResponse> => {
  const response = await axios.get(`${apiBaseUrl}/search/users?q=${query}`);
  return response.data;
};

// Fetch users by search query with a limit of 10 results per page
export const searchUsers = async (query: string): Promise<UserSearchResponse> => {
  const response = await axios.get(`${apiBaseUrl}/search/users?q=${query}&per_page=10`);
  return response.data;
};

// Fetch user data by username
export const fetchUserData = async (username: string): Promise<UserData> => {
  const response = await axios.get(`${apiBaseUrl}/users/${username}`);
  return response.data;
};

// Fetch user followers by username
export const fetchUserFollowers = async (username: string): Promise<FollowerData[]> => {
  const response = await axios.get(`${apiBaseUrl}/users/${username}/followers`);
  return response.data;
};

// Fetch users the user is following by username
export const fetchUserFollowing = async (username: string): Promise<FollowingData[]> => {
  const response = await axios.get(`${apiBaseUrl}/users/${username}/following`);
  return response.data;
};
