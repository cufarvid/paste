import { useStore } from '../../store';
import { Language, LANGUAGES } from '../../lib/language';
import { Theme, THEMES } from '../../lib/theme';
import AutoComplete from '../AutoComplete/AutoComplete';

import { Header, Wrapper, Button, PlusIcon, SaveIcon } from './Controls.styles';

interface ControlsProps {
  onNew: () => void;
  onSave: () => void;
}

export default function Controls({ onNew, onSave }: ControlsProps) {
  const { theme, setTheme, language, setLanguage } = useStore();

  const mutableLanguages = [...LANGUAGES];
  const mutableThemes = [...THEMES];

  return (
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
          data={mutableLanguages}
          onSelect={(language: Language) => setLanguage(language)}
          placeholder="Language"
        />
        <AutoComplete
          data={mutableThemes}
          onSelect={(theme: Theme) => setTheme(theme)}
          placeholder="Theme"
        />
      </Wrapper>
    </Header>
  );
}
