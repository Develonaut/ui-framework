import React from 'react';
import { render } from '@testing-library/react';
import { Portal } from './component';

describe('Portal', () => {
  it('should render without error', () => {
    expect(() => render(<Portal />)).not.toThrowError();
  });
});