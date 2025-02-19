import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { UiButton } from './ui-button';

describe('UiButton', () => {
  it('renders w/o errors', () => {
    expect(() => render(<UiButton />)).not.toThrow();
  });
});
