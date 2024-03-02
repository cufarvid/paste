export const copyToClipboard = (text: string): Promise<void> =>
  navigator.clipboard.writeText(text);

export const addUrlPrefix = (file: string): string =>
  `${window.location.host}/#/${file}`;
