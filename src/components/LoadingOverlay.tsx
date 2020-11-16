import React from 'react';
import css from '../styles/LoadingOverlay.module.css';

export function LoadingOverlay({ loading }: { loading: boolean }) {
  return (
    <div
      className={css['loading-wrapper']}
      style={{ display: loading ? 'block' : 'none' }}
    />
  );
}
