import { describe, expect, it } from 'vitest';
import { addUrlPrefix } from './clipboard.ts';

describe('clipboard util', () => {
  it('adds a URL prefix', () => {
    const file = 'content';
    expect(addUrlPrefix(file)).toBe(`${window.location.host}/#/${file}`);
  });
});
