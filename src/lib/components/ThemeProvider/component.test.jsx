import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from './component';

describe('ThemeProvider', () => {
  it('should render without error', () => {
    expect(() => render(<ThemeProvider />)).not.toThrowError();
  });
});