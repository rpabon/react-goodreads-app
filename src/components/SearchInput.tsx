import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchInput: FC<SearchInputProps> = ({ onTermChange }) => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  return (
    <div className="container is-flex is-flex-wrap-nowrap">
      <input
        type="search"
        className="input is-info is-radiusless px-4"
        placeholder="Find books..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onTermChange(inputValue);
            history.push('/');
          }
        }}
      />

      <button
        type="button"
        className="button is-info is-radiusless"
        onClick={() => onTermChange(inputValue)}
      >
        Go!
      </button>
    </div>
  );
};

interface SearchInputProps {
  onTermChange(q: string): void;
}
