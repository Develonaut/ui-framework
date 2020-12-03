import React from 'react';
import { render } from '@testing-library/react';
import { ClickAwayListener } from './component';

describe('ClickAwayListener', () => {
  it('should render without error', () => {
    expect(() => render(<ClickAwayListener />)).not.toThrowError();
  });
});