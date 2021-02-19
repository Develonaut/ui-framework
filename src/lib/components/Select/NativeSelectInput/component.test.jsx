import React from 'react';
import { render } from '@testing-library/react';
import { NativeSelectInput } from './component';

describe('NativeSelectInput', () => {
  it('should render without error', () => {
    expect(() => render(<NativeSelectInput />)).not.toThrowError();
  });
});