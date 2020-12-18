import React from 'react';
import { render } from '@testing-library/react';
import { DialogActions } from './component';

describe('DialogActions', () => {
  it('should render without error', () => {
    expect(() => render(<DialogActions />)).not.toThrowError();
  });
});