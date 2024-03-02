import { useStore } from '../store';
import { Language, LANGUAGES } from '../lib/language';
import { Theme, THEMES } from '../lib/theme';

interface ControlsProps {
  onNew: () => void;
  onSave: () => void;
}

export default function Controls({ onNew, onSave }: ControlsProps) {
  const { theme, setTheme, language, setLanguage } = useStore();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' }}>
        <button type="button" onClick={onNew}>
          New
        </button>
        <button type="button" onClick={onSave}>
          Save
        </button>
      </div>

      <div>
        <select
          value={language}
          onChange={({ target }) => setLanguage(target.value as Language)}
        >
          {LANGUAGES.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <select
          value={theme}
          onChange={({ target }) => setTheme(target.value as Theme)}
        >
          {THEMES.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
