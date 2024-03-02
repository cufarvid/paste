import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { compress, decompress } from '../lib/zlib';
import { addUrlPrefix, copyToClipboard } from '../lib/clipboard';
import Controls from '../components/Controls';
import Editor from '../components/Editor';

export default function Root() {
  const navigate = useNavigate();
  const { compressedData } = useParams();
  const [content, setContent] = useState('');

  const onSave = async () => {
    const file = compress(content ?? '');
    const url = addUrlPrefix(file);
    await copyToClipboard(url);
    navigate(`/${file}`);
  };

  useEffect(() => {
    setContent(compressedData ? decompress(compressedData) : '');
  }, [compressedData]);

  return (
    <>
      <Controls onNew={() => navigate('/')} onSave={onSave}></Controls>

      <Editor
        value={content}
        onChange={(value) => setContent(value ?? '')}
      ></Editor>
    </>
  );
}
