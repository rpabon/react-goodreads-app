import React, { useState } from 'react';
import { Row, Col, Input, Typography } from 'antd';
import { Link, useHistory } from 'react-router-dom';

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
    <Row gutter={16} align="middle">
      <Col xs={24} md={10}>
        <Link to="/">
          <Typography.Title style={{ color: 'white' }}>
            Discover Books
          </Typography.Title>
        </Link>
      </Col>

      <Col xs={24} md={14}>
        <Input.Search
          allowClear
          size="large"
          placeholder="Find books..."
          enterButton="Go!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSearch={onSearch}
        />
      </Col>
    </Row>
  );
}

interface NavBarProps {
  onTermChange(q: string): void;
}
