import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserCard from '../components/UserCard';
import { FollowerData, FollowingData } from '../types';
import { fetchUserData, fetchUserFollowers, fetchUserFollowing } from '../api/fetch'; // Import the fetch functions from fetch.ts

const UserPage: React.FC = () => {
  const { username } = useParams<{ username?: string }>();
  const [userData, setUserData] = useState<any | null>(null);
  const [followersData, setFollowersData] = useState<FollowerData[]>([]);
  const [followingData, setFollowingData] = useState<FollowingData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (username) {
          const userResponse = await fetchUserData(username);
          setUserData(userResponse);

          const followersResponse = await fetchUserFollowers(username);
          setFollowersData(followersResponse);

          const followingResponse = await fetchUserFollowing(username);
          setFollowingData(followingResponse);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <Link to="/">Back to search</Link>
      <UserCard
        username={userData.login}
        userId={userData.id}
        followers={userData.followers_url}
      />
      <img src={userData.avatar_url} alt={userData.login} />

      <h3>Followers:</h3>
      <ul>
        {followersData.map((follower) => (
          <li key={follower.id}>
            <img src={follower.avatar_url} alt={follower.login} />
            <a href={`https://github.com/${follower.login}`} target="_blank" rel="noopener noreferrer">
              {follower.login}
            </a>
          </li>
        ))}
      </ul>

      <h3>Following:</h3>
      <ul>
        {followingData.map((following) => (
          <li key={following.id}>
            <img src={following.avatar_url} alt={following.login} />
            <a href={`https://github.com/${following.login}`} target="_blank" rel="noopener noreferrer">
              {following.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
