import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './component';

describe('Button', () => {
  it('should render without error', () => {
    expect(() => render(<Button />)).not.toThrowError();
  });
});