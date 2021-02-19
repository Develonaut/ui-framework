import React from 'react';
import { render } from '@testing-library/react';
import { SvgIcon } from './component';

describe('SvgIcon', () => {
  it('should render without error', () => {
    expect(() => render(<SvgIcon />)).not.toThrowError();
  });
});