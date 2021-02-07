import React from 'react';
import { render } from '@testing-library/react';
import { CircularProgress } from './component';

describe('CircularProgress', () => {
  it('should render without error', () => {
    expect(() => render(<CircularProgress />)).not.toThrowError();
  });
});