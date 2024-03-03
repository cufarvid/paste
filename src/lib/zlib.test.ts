import { describe, expect, it } from 'vitest';
import { compress, decompress } from './zlib.ts';

describe('zlib util', () => {
  const input = 'Hello, World!';
  const compressed = 'eJzzSM3JyddRCM8vyklRBAAfngRq';

  it('compresses a string', () => {
    expect(compress(input)).toEqual(compressed);
  });

  it('decompresses a string', () => {
    expect(decompress(compressed)).toEqual(input);
  });
});
