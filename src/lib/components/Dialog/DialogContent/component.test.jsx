import React from 'react';
import { render } from '@testing-library/react';
import { DialogContent } from './component';

describe('DialogContent', () => {
  it('should render without error', () => {
    expect(() => render(<DialogContent />)).not.toThrowError();
  });
});