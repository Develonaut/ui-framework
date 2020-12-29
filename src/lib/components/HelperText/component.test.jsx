import React from 'react';
import { render } from '@testing-library/react';
import { HelperText } from './component';

describe('HelperText', () => {
  it('should render without error', () => {
    expect(() => render(<HelperText />)).not.toThrowError();
  });
});