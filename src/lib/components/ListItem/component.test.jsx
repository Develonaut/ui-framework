import React from 'react';
import { render } from '@testing-library/react';
import { ListItem } from './component';

describe('ListItem', () => {
  it('should render without error', () => {
    expect(() => render(<ListItem />)).not.toThrowError();
  });
});