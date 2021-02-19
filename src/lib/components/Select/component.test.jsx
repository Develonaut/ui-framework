import React from 'react';
import { render } from '@testing-library/react';
import { Select } from './component';

describe('Select', () => {
  it('should render without error', () => {
    expect(() => render(<Select />)).not.toThrowError();
  });
});