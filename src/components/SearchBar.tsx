import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.length >= 4 && query !== 'doublevpartners') {
      onSearch(query);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
