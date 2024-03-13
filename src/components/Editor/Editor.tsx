import { BeforeMount, Editor as MonacoEditor } from '@monaco-editor/react';

import { useStore } from '../../store';
import { defineTheme, THEME_CONFIGS } from '../../lib/theme';
import { Main } from './Editor.styles';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
export default function Editor({ value, onChange }: EditorProps) {
  const { theme, language } = useStore();

  const beforeMount: BeforeMount = () => {
    console.log('beforeMount');
    Object.values(THEME_CONFIGS).forEach(defineTheme);
  };

  return (
    <Main>
      <MonacoEditor
        height="90vh"
        language={language}
        theme={theme}
        value={value}
        onChange={(value) => onChange(value ?? '')}
        beforeMount={beforeMount}
      ></MonacoEditor>
    </Main>
  );
}
