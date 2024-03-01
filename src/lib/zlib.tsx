import { zlibSync, unzlibSync } from 'fflate';

import {
  base64ToUint8Array,
  stringToUint8Array,
  uint8ArrayToBase64,
  uint8ArrayToString,
} from './base64.ts';

export const compress = (input: string): string => {
  const data = stringToUint8Array(input);
  const compressed = zlibSync(data);

  return uint8ArrayToBase64(compressed);
};

export const decompress = (input: string): string => {
  const data = base64ToUint8Array(input);
  const decompressed = unzlibSync(data);

  return uint8ArrayToString(decompressed);
};
