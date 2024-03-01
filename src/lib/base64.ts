import { decode, encode, fromUint8Array, toUint8Array } from 'js-base64';

export const base64ToUint8Array = (base64String: string): Uint8Array => {
  return toUint8Array(base64String);
};

export const uint8ArrayToBase64 = (uint8Array: Uint8Array): string => {
  return fromUint8Array(uint8Array, true);
};

export const stringToUint8Array = (string: string): Uint8Array => {
  return toUint8Array(encode(string));
};

export const uint8ArrayToString = (uint8Array: Uint8Array): string => {
  return decode(fromUint8Array(uint8Array));
};
