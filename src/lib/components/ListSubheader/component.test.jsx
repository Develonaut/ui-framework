import React from 'react';
import { render } from '@testing-library/react';
import { ListSubheader } from './component';

describe('ListSubheader', () => {
  it('should render without error', () => {
    expect(() => render(<ListSubheader />)).not.toThrowError();
  });
});