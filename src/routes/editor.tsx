import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { compress, decompress } from '../lib/zlib';

const generateUrl = (content: string): string => {
  const file = compress(content ?? '');
  return `${window.location.host}/#/${file}`;
};

export default function Editor() {
  const { compressedData } = useParams();
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!compressedData) return;

    setContent(decompress(compressedData));
  }, [compressedData]);

  return (
    <>
      <div>
        <textarea
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {url ? (
        <div>
          <input type="text" value={url} readOnly />
          <button onClick={() => navigator.clipboard.writeText(url)}>
            Copy URL
          </button>
          <button onClick={() => setUrl('')}>Cancel</button>
        </div>
      ) : null}

      <div>
        <button type="submit" onClick={() => setUrl(generateUrl(content))}>
          Generate URL
        </button>
      </div>
    </>
  );
}
