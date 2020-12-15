import React from 'react';
import { render } from '@testing-library/react';
import { Dialog } from './component';

describe('Dialog', () => {
  it('should render without error', () => {
    expect(() => render(<Dialog />)).not.toThrowError();
  });
});