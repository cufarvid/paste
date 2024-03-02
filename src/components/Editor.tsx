import { Editor as MonacoEditor } from '@monaco-editor/react';
import { useStore } from '../store';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
export default function Editor({ value, onChange }: EditorProps) {
  const { theme, language } = useStore();

  return (
    <>
      <MonacoEditor
        height="90vh"
        language={language}
        theme={theme}
        value={value}
        onChange={(value) => onChange(value ?? '')}
      ></MonacoEditor>
    </>
  );
}
