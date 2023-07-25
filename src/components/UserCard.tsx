import React from "react";
import { Link } from 'react-router-dom';
import { UserData, UserCardProps } from "../types";

const UserCard: React.FC<UserCardProps> = ({ username, userId, followers }) => {
  return (
    <div>
      <Link to={`/user/${username}`}>{username}</Link> - {userId}
      <p>Followers: {followers}</p>
    </div>
  );
};

export default UserCard;
