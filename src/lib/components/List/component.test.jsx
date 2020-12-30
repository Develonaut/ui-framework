import React from 'react';
import { render } from '@testing-library/react';
import { List } from './component';

describe('List', () => {
  it('should render without error', () => {
    expect(() => render(<List />)).not.toThrowError();
  });
});