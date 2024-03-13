import { describe, expect, it } from 'vitest';
import {
  base64ToUint8Array,
  stringToUint8Array,
  uint8ArrayToBase64,
} from './base64.ts';

describe('base64 util', () => {
  const input = 'Hello, World!';
  const base64String = 'SGVsbG8sIFdvcmxkIQ';
  const uint8Array = new Uint8Array([
    72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33,
  ]);

  it('converts a base64 string to a Uint8Array', () => {
    expect(base64ToUint8Array(base64String)).toEqual(uint8Array);
  });

  it('converts a Uint8Array to a base64 string', () => {
    expect(uint8ArrayToBase64(uint8Array)).toEqual(base64String);
  });

  it('converts a string to a Uint8Array', () => {
    expect(stringToUint8Array(input)).toEqual(uint8Array);
  });

  it('converts a Uint8Array to a string', () => {
    expect(uint8ArrayToBase64(uint8Array)).toEqual(base64String);
  });
});
