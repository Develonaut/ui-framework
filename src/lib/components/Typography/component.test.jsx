import React from 'react';
import { render } from '@testing-library/react';
import { Typography } from './component';

describe('Typography', () => {
  it('should render without error', () => {
    expect(() => render(<Typography />)).not.toThrowError();
  });
});