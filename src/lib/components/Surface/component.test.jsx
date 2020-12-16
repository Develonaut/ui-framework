import React from 'react';
import { render } from '@testing-library/react';
import { Surface } from './component';

describe('Surface', () => {
  it('should render without error', () => {
    expect(() => render(<Surface />)).not.toThrowError();
  });
});