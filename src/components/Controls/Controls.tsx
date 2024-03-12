import { ThemeProvider } from 'styled-components';

import { useStore } from '../../store';
import { LANGUAGES } from '../../lib/language';
import { THEME_CONFIGS, THEMES } from '../../lib/theme';
import AutoComplete from '../AutoComplete/AutoComplete';
import { Header, Wrapper, Button, PlusIcon, SaveIcon } from './Controls.styles';

interface ControlsProps {
  onNew: () => void;
  onSave: () => void;
}

export default function Controls({ onNew, onSave }: ControlsProps) {
  const { theme, setTheme, language, setLanguage } = useStore();

  return (
    <ThemeProvider theme={THEME_CONFIGS[theme].controls}>
      <Header>
        <Wrapper>
          <Button type="button" onClick={onNew}>
            <PlusIcon />
          </Button>
          <Button type="button" onClick={onSave}>
            <SaveIcon />
          </Button>
        </Wrapper>
        <Wrapper>
          <AutoComplete
            label="Language"
            items={LANGUAGES}
            selectedItem={language}
            onSelect={setLanguage}
          />
          <AutoComplete
            label="Theme"
            items={THEMES}
            selectedItem={theme}
            onSelect={setTheme}
          />
        </Wrapper>
      </Header>
    </ThemeProvider>
  );
}
