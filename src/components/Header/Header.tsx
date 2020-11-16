import React, { FC, Fragment, useState } from 'react';

export const Header: FC<HeaderProps> = ({ onTermChange }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Fragment>
      <header
        className="navbar is-link"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container px-4">
          <a
            href="/"
            className="navbar-brand is-size-3 has-text-weight-bold has-text-white"
          >
            Discover Books
          </a>
        </div>
      </header>

      <div className="container is-flex is-flex-wrap-nowrap">
        <input
          type="search"
          className="input is-info is-radiusless px-4"
          placeholder="Find books..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') onTermChange(inputValue);
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
    </Fragment>
  );
};

interface HeaderProps {
  onTermChange(q: string): void;
}
