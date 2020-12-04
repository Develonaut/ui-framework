import React from 'react';
import { render } from '@testing-library/react';
import { TextField } from './component';

describe('TextField', () => {
  it('should render without error', () => {
    expect(() => render(<TextField />)).not.toThrowError();
  });
});