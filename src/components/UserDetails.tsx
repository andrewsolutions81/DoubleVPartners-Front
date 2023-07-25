import React, { useEffect, useState } from 'react';
import { UserData, UserDetailsProps } from '../types';
import { fetchUserData } from '../api/fetch';

const UserDetails: React.FC<UserDetailsProps> = ({ username }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetchUserData(username);
        setUserData(userResponse);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={userData.avatar_url} alt={userData.login} />
      <p>Name: {userData.login}</p>
      {/* Add other user data here */}
    </div>
  );
};

export default UserDetails;
