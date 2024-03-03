import { Editor as MonacoEditor } from '@monaco-editor/react';
import { useStore } from '../../store';
import { Main } from './Editor.styles';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
export default function Editor({ value, onChange }: EditorProps) {
  const { theme, language } = useStore();

  return (
    <Main>
      <MonacoEditor
        height="90vh"
        language={language}
        theme={theme}
        value={value}
        onChange={(value) => onChange(value ?? '')}
      ></MonacoEditor>
    </Main>
  );
}
