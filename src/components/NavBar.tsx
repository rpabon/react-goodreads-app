import React, { useState } from 'react';
import { Input, Layout, Typography } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import css from '../styles/NavBar.module.css';

export function NavBar({ onTermChange }: NavBarProps) {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  function onSearch() {
    if (inputValue) {
      onTermChange(inputValue);
      history.push('/');
    }
  }

  return (
    <Layout.Header>
      <div className={`app-container ${css.navbar}`}>
        <Link to="/" className={css.title}>
          <Typography.Title level={2}>Discover Books</Typography.Title>
        </Link>

        <Input.Search
          allowClear
          size="large"
          placeholder="Find books..."
          enterButton="Go!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSearch={onSearch}
        />
      </div>
    </Layout.Header>
  );
}

interface NavBarProps {
  onTermChange(q: string): void;
}
