import React, { useState } from "react";
import UserCard from "../components/UserCard";
import ErrorMessage from "../components/ErrorMessage";
import { UserData } from '../types';
import { searchUsers } from '../api/fetch';

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (searchQuery.length <= 4) {
        setError("Search query must have more than 4 characters.");
      } else if (searchQuery === "doublevpartners") {
        setError("doublevpartners is reserved.");
      } else {
        setError(null); // Clear any previous error message
        const response = await searchUsers(searchQuery);
        setUsers(response.items);
      }
    } catch (error) {
      setError("Error fetching users data.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <ErrorMessage message={error} />}
      {users.map((user) => (
        <UserCard
          key={user.id}
          username={user.login}
          userId={user.id}
          followers={user.followers_url}
        />
      ))}
    </div>
  );
};

export default Home;
