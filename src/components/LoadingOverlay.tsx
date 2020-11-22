import React from 'react';
import { Spin } from 'antd';
import css from '../styles/LoadingOverlay.module.css';

export function LoadingOverlay() {
  return (
    <div className={css.loading}>
      <Spin size="large" className={css.spinner} />
    </div>
  );
}
