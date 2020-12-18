import React from 'react';
import { render } from '@testing-library/react';
import { DialogTitle } from './component';

describe('DialogTitle', () => {
  it('should render without error', () => {
    expect(() => render(<DialogTitle />)).not.toThrowError();
  });
});